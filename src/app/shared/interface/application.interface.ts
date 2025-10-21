import { Student } from './student.interface';
import { Project } from './project.interface';

export interface Application {
  id?: string;
  idea?: string;
  status: string;
  applicationDate?: string;
  student: Student;
  project: Project;
}

export interface RelationshipDto {
  id: string;
}

export interface CreateApplicationRequest {
  idea: string;
  value: number;
  idProject: string;
}

export interface UpdateApplicationRequest {
  student?: RelationshipDto;
  project?: RelationshipDto;
  idea: string;
  status: string;
  applicationDate: string;
}
