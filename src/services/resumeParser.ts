import { API_BASE } from "./api";

export async function parseResume(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE}/api/parse/`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Resume parsing failed");
  }

  return res.json();
}