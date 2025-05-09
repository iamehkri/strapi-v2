// Interface automatically generated by schemas-to-ts

import { Blog } from '../../../blog/content-types/blog/blog';
import { Feature } from '../../../feature/content-types/feature/feature';
import { Blog_Plain } from '../../../blog/content-types/blog/blog';
import { Feature_Plain } from '../../../feature/content-types/feature/feature';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas/AdminPanelRelationPropertyModification';

export interface Tag {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    slug: string;
    description?: string;
    blog?: { data: Blog };
    feature?: { data: Feature };
    color?: any;
  };
}
export interface Tag_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  slug: string;
  description?: string;
  blog?: Blog_Plain;
  feature?: Feature_Plain;
  color?: any;
}

export interface Tag_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  slug: string;
  description?: string;
  blog?: number;
  feature?: number;
  color?: any;
}

export interface Tag_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  slug: string;
  description?: string;
  blog?: AdminPanelRelationPropertyModification<Blog_Plain>;
  feature?: AdminPanelRelationPropertyModification<Feature_Plain>;
  color?: any;
}
