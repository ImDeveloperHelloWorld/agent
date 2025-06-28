// src/auth.ts
import axios from 'axios';
import { AUTH_URL, EMAIL, PASSWORD } from './config';

let token: string | null = null;

export async function login() {
  try {
    const res = await axios.post(AUTH_URL, { email: EMAIL, password: PASSWORD });
    token = res.data.token;
    console.log('Logged in successfully');
  } catch (err: any) {
    console.error(' Login failed:', err.message);
    throw err;
  }
}

export function getToken() {
  return token;
}