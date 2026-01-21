import { API_BASE } from "./api";

export async function downloadResumePdf(data: any) {
  const res = await fetch(
    `${API_BASE}/api/generatepdf`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: data,
      }),
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("PDF generation failed:", errorText);
    alert("Failed to generate PDF");
    return;
  }

  const blob = await res.blob();

  if (blob.type !== "application/pdf") {
    alert("Invalid PDF response");
    return;
  }

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Resume_Analysis_Report.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}