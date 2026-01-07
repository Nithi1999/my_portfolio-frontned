export const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

if (!API_BASE) {
  throw new Error("API base URL is not defined");
}