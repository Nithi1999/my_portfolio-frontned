import { API_BASE } from "./api";

export async function matchResume(resume: string, jd: string) {
  const res = await fetch(`${API_BASE}/api/match/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      resume_text: resume,
      jd_text: jd,
    }),
  });

  if (!res.ok) {
    throw new Error("Resume matching failed");
  }

  return res.json();
}