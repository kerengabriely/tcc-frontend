import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { filter } from 'rxjs';
import { Project } from '../../shared/interface/project.interface';
import { ProjectService } from '../../core/services/api/project.service';
import { MessageService } from 'primeng/api';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-available-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './available-projects.component.html',
  styleUrls: ['./available-projects.component.scss']
})
export class AvailableProjectsComponent {
  private projectService = inject(ProjectService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private messageService = inject(MessageService);
  private translationService = inject(TranslationService);

  projects: Project[] = [];
  displayedProjects: Project[] = [];
  loading = false;

  // Paginação simples "carregar mais"
  pageSize = 6;
  private displayCount = this.pageSize;


  ngOnInit(): void {
    this.loadProject();
  }

  ngAfterViewInit() {
    // Quando a navegação termina, checa fragmento e rola para o elemento
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      }
    });
  }

  /**
   * Carregar lista de projects
   */
  loadProject(): void {
    this.projects = [];
    this.loading = true;
    this.projectService.list().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.loading = false;
        this.updateDisplayed();
      },
      error: (error) => {
        console.error('Erro ao carregar projects:', error);
        this.messageService.add({
          severity: 'error',
          summary: this.translationService.translate('common.errorTitle'),
          detail: this.translationService.translate('project.default.errorLoadList')
        });
        this.loading = false;
      }
    });
  }

  updateDisplayed(): void {
    this.displayedProjects = this.projects.slice(0, this.displayCount);
  }

  hasMore(): boolean {
    return this.displayedProjects.length < this.projects.length;
  }

  loadMore(): void {
    if (!this.hasMore()) return;
    this.displayCount = Math.min(this.displayCount + this.pageSize, this.projects.length);
    this.updateDisplayed();
  }

  goToProjectDetails(project: Project): void {
    if (project?.id) {
      this.router.navigate(['/project-detail', project.id]);
    } else {
      this.router.navigate(['/project-detail', '1']);
    }
  }

  // Métodos usados no header (mantendo o mesmo comportamento do home)
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}