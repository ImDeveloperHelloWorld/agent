export async function retry<T>(
  fn: () => Promise<T>,
  maxRetries: number,
  delayMs: number
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      const backoff = delayMs * Math.pow(2, attempt - 1);
      console.warn(`Retrying (${attempt}/${maxRetries}) in ${backoff}ms...`);
      await new Promise((res) => setTimeout(res, backoff));
    }
  }
  throw new Error('Retry failed unexpectedly');
}