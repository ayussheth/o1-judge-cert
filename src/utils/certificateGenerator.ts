import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export interface CertificateData {
  name: string;
  email: string;
  hackathon: string;
  date: string;
  country: string;
  category: string;
  description: string;
}

export function parseCertificateParams(
  searchParams: URLSearchParams
): CertificateData {
  return {
    name: searchParams.get("name") || "",
    email: searchParams.get("email") || "",
    hackathon: searchParams.get("hackathon") || "",
    date: searchParams.get("date") || "",
    country: searchParams.get("country") || "",
    category: searchParams.get("category") || "",
    description: searchParams.get("description") || "",
  };
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function downloadPDF(elementId: string, fileName: string) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#fffef8",
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(fileName);
}

export function generateShareURL(data: CertificateData): string {
  const params = new URLSearchParams({
    name: data.name,
    email: data.email,
    hackathon: data.hackathon,
    date: data.date,
    country: data.country,
    category: data.category,
    description: data.description,
  });
  return `${window.location.origin}/certificate?${params.toString()}`;
}
