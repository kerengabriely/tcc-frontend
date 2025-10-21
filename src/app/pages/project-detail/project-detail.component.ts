import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Project } from '../../shared/interface/project.interface';
import { ProjectService } from '../../core/services/api/project.service';
import { SolutionProposalComponent } from './solution-proposal/solution-proposal.component';
import { TranslationService } from '../../core/services/translation.service';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../core/services/auth.service';
import { ApplicationService } from '../../core/services/api/application.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { notBlankValidator } from '../../shared/validators/not-blank.validator';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, SolutionProposalComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private projectService = inject(ProjectService);
  private messageService = inject(MessageService);
  private translationService = inject(TranslationService);
  private authService = inject(AuthService);
  private applicationService = inject(ApplicationService);
  private formBuilder = inject(FormBuilder);

  project: Project | null = null;
  skills: string[] = [];
  deadline: string | null = null;
  loading = false;
  currentYear = new Date().getFullYear();
  selectedProjectId: string = '';

  applicationForm!: FormGroup;

  ngOnInit(): void {
    this.applicationForm = this.formBuilder.group({
      idea: ['', [notBlankValidator(), Validators.maxLength(300)]],
      value: ['', [notBlankValidator(), Validators.pattern(/^\d+(\.\d{1,2})?$/)]], 
    });
    this.loadProjectById(this.route.snapshot.paramMap.get('id') || '');
    this.selectedProjectId = this.route.snapshot.paramMap.get('id')!;
  }

  loadProjectById(projectId: string): void {
    this.loading = true;
    this.projectService.getById(projectId).subscribe({
      next: (project) => {
        this.project = project;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar project:', error);
        this.messageService.add({
          severity: 'error',
          summary: this.translationService.translate('common.errorTitle'),
          detail: this.translationService.translate('project.default.errorLoad')
        });
        this.loading = false;
      }
    });
  }


  goBack(): void {
    this.router.navigate(['/projects']);
  }

  // --- Mock helpers (reutilizando os mesmos dados da tela de projetos) ---
  // private getMockProjects(): Project[] {
  //   return [
  //     {
  //       id: '1',
  //       title: 'Sistema de Gestão Acadêmica',
  //       description: 'Desenvolver módulos para controle de cursos, alunos e matrículas.',
  //       status: 'OPEN',
  //       creationDate: '2024-01-15',
  //       entrepreneur: { id: '1', companyName: 'TechStart Solutions' } as any
  //     },
  //     {
  //       id: '2',
  //       title: 'E-commerce de Livros',
  //       description: 'Criar plataforma de vendas com carrinho, checkout e administração.',
  //       status: 'OPEN',
  //       creationDate: '2024-02-10',
  //       entrepreneur: { id: '2', companyName: 'BookMarket Ltda.' } as any
  //     },
  //     {
  //       id: '3',
  //       title: 'App de Entregas',
  //       description: 'Aplicativo mobile para roteirização de entregas com mapas e tracking.',
  //       status: 'OPEN',
  //       creationDate: '2024-03-02',
  //       entrepreneur: { id: '3', companyName: 'LogiTrack' } as any
  //     },
  //     {
  //       id: '4',
  //       title: 'Plataforma de Cursos Online',
  //       description: 'Sistema com aulas gravadas, quizzes e certificação.',
  //       status: 'OPEN',
  //       creationDate: '2024-04-20',
  //       entrepreneur: { id: '4', companyName: 'EduPro' } as any
  //     },
  //     {
  //       id: '5',
  //       title: 'Dashboard de Finanças',
  //       description: 'Visualização de KPIs financeiros, gráficos e relatórios.',
  //       status: 'OPEN',
  //       creationDate: '2024-05-05',
  //       entrepreneur: { id: '5', companyName: 'FinSight' } as any
  //     },
  //     {
  //       id: '6',
  //       title: 'Portal de Vagas Tech',
  //       description: 'Portal de vagas com filtros, candidatura e área do candidato.',
  //       status: 'OPEN',
  //       creationDate: '2024-06-12',
  //       entrepreneur: { id: '6', companyName: 'HireTech' } as any
  //     }
  //   ];
  // }


  proposalVisible = false;

  openProposalModal(): void {
    this.proposalVisible = true;
  }


  onSubmitProposal(data: { title: string; description: string; value: number | null }): void {
    const loggedStudentId = this.authService.getCurrentUser()?.sub;
    const selectedProjectId = this.selectedProjectId;

    const applicationData = {
      idea: data.title,       // string
      value: data.value || 0, // number, garante valor padrão
      idProject: selectedProjectId || ''  
    };

    this.applicationService.create(applicationData).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Aplicação enviada com sucesso!'
        });
        this.proposalVisible = false; // fecha o modal
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: err.error?.message || 'Falha ao enviar aplicação.'
        });
      }
    });
  }

}