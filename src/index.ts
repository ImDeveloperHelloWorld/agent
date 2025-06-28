// src/index.ts
import { getSystemMetrics } from './metrics';
import { sendMetrics } from './api';
import { login } from './auth';
import { retry } from './utils';

async function run() {
  try {
    const metrics = await getSystemMetrics();
    console.log(metrics);
    
    // await sendMetrics(metrics);

    await retry(() => sendMetrics(metrics), 3, 500);

  } catch (err) {
    console.error(' Error during metric collection or sending:', err);
  }
}

async function start() {
  try {
    await login();
    await run();
    setInterval(run, 30_000);
  } catch (err) {
    console.error(' Agent failed to start:', err);
  }
}

start();