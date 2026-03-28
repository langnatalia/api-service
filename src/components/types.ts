// types.ts
import { HttpMethods } from 'express';

type HttpMethod = HttpMethods;

type Request<T> = {
  body: T;
};

type Response<T> = {
  statusCode: number;
  data?: T;
  error?: string;
};

type Credentials = {
  username: string;
  password: string;
};

type User = {
  id: string;
  name: string;
  email: string;
};

type UserCreate = {
  name: string;
  email: string;
  password: string;
};

type UserUpdate = {
  name?: string;
  email?: string;
};

type Permission = {
  id: string;
  name: string;
  description: string;
};

type PermissionCreate = {
  name: string;
  description: string;
};

type PermissionUpdate = {
  name?: string;
  description?: string;
};

type Role = {
  id: string;
  name: string;
  permissions: Permission[];
};

type RoleCreate = {
  name: string;
  permissions: PermissionCreate[];
};

type RoleUpdate = {
  name?: string;
  permissions?: PermissionUpdate[];
};

type Token = {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
};