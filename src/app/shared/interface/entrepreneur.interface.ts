import { BusinessArea } from './business-area.interface';

export interface Entrepreneur {
  id: string;
  cnpj: string;
  companyName: string;
  description: string;
  email: string;
  phone: string;
  businessArea: string;
  // Many-to-Many relationships
}

export interface RelationshipDto {
  id: string;
}

export interface CreateEntrepreneurRequest {
  cnpj: string;
  companyName: string;
  description: string;
  email: string;
  phone: string;
  registrationDate: string;
  // Many-to-Many relationships
  businessAreas?: RelationshipDto[];
}

export interface UpdateEntrepreneurRequest {
  cnpj: string;
  companyName: string;
  description: string;
  email: string;
  phone: string;
  registrationDate: string;
  // Many-to-Many relationships
  businessAreas?: RelationshipDto[];
}
