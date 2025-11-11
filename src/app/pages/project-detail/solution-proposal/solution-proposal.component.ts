import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { Project } from '../../../shared/interface/project.interface';
import { RouterModule } from '@angular/router';
import { notBlankValidator } from '../../../shared/validators/not-blank.validator';

@Component({
  selector: 'app-solution-proposal',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, InputTextModule, InputNumberModule, ButtonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './solution-proposal.component.html',
  styleUrls: ['./solution-proposal.component.scss']
})
export class SolutionProposalComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() project: Project | null = null;
  @Output() submit = new EventEmitter<{ title: string; description: string; value: number | null }>();

  private formBuilder = inject(FormBuilder);

  solutionTitle = '';
  solutionDescription = '';
  solutionValue: number | null = null;
  submitted = false;

  proposalForm!: FormGroup;

  ngOnInit(): void {
    this.proposalForm = this.formBuilder.group({
      idea: ['', [Validators.required, notBlankValidator(), Validators.maxLength(100)]],
      value: ['', [Validators.required, notBlankValidator(), Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    });
  }


  close(): void {
    this.submitted = false;
    this.visible = false;
    this.visibleChange.emit(false);
    this.proposalForm.reset();
  }

  submitProposal(): void {
    if (this.proposalForm.invalid) {
      this.proposalForm.markAllAsTouched();
      return;
    }

    const { idea, value } = this.proposalForm.value;

    this.submit.emit({ title: idea, description: idea, value });
    this.showSuccess();
  }

  showSuccess(): void {
    this.submitted = true;
  }
}