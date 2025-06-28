// src/api.ts
import axios from 'axios';
import { API_URL } from './config';
import { getToken } from './auth';
import { retry } from './utils';

export async function sendMetrics(metrics: any) {
  const token = getToken();
  if (!token) {
    console.error(' Cannot send metrics: Not authenticated');
    return;
  }

  try {
    const res = await axios.post(API_URL, metrics, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(`✅ Metrics sent: ${res.status}`);
  } catch (err: any) {
    console.error(' Failed to send metrics:', err.message);
    throw new Error(' Failed to send metrics:');
  }
}
