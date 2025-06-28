// src/config.ts
import dotenv from 'dotenv';
dotenv.config();

export const API_URL = process.env.API_URL!;
export const AUTH_URL = process.env.AUTH_URL!;
export const EMAIL = process.env.EMAIL!;
export const PASSWORD = process.env.PASSWORD!;

if (!API_URL || !AUTH_URL || !EMAIL || !PASSWORD) {
  throw new Error('Missing environment variables');
}
