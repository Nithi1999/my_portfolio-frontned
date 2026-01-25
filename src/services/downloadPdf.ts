import { API_BASE } from "./api";

export async function downloadResumePdf(
  data: any,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: (msg: string) => void
) {
  try {
    onStart?.();

    const res = await fetch(`${API_BASE}/api/generatepdf/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
      redirect: "follow",
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "PDF generation failed");
    }

    const blob = await res.blob();

    if (blob.type !== "application/pdf") {
      throw new Error("Invalid PDF response");
    }

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Resume_Analysis_Report.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (err: any) {
    console.error(err);
    onError?.(err.message || "Failed to generate PDF");
  } finally {
    onEnd?.();
  }
}