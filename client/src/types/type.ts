import { UserFormData } from "@/validation/userSchema";
import { CreateUserInput } from "./schema/UserForm";
import { keyof } from "zod";

export interface BackendError {
  error?: {
    field?: keyof CreateUserInput; // "fakeId" | "name" | ...
    message?: string;
  };
}

export interface ErrorResponseType {
  data?: BackendError;
  status?: number;
}










export type UserRole = {
  id: string;
  name: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;

  phone?: string | null;
  language?: string | null;

  fakeId: number;

  avatar?: string | null;
  avatarUrl?: string | null;
  avatarPublicId?: string | null;

  multiImg: string[];

  bio?: string | null;
  version?: number | null;

  emailStatus: "PENDING" | "VERIFIED" | "REJECTED"; 
  verified: boolean;

  createdAt: string;

  images: ImageType[];

  roles: UserRole[];

  // optional nested objects
  address?: {
    id: string;
    city: string;
    country: string;
  } | null;
};

export type ImageType = {
  id: string;
  imageUrl: string;
  imagePublicId: string;
  userId: string;
  createdAt: string; // Date becomes string in JSON
};


export type GetUserResponse = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  avatarUrl: string | null;
};