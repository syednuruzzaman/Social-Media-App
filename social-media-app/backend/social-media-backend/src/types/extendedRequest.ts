
import { Request } from 'express';

export interface ExtendedRequest extends Request {
  user?: {
    id: string;
    email: string;
    // Add other user properties as needed
  };
}