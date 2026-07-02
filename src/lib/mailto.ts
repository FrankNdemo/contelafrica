export const SUBMISSION_EMAIL = "linkentnerg@gmail.com";

type MailtoField = {
  label: string;
  value?: FormDataEntryValue | string | null;
};

export function openSubmissionEmail(subject: string, fields: MailtoField[]) {
  const body = fields
    .map(({ label, value }) => `${label}: ${String(value ?? "").trim() || "-"}`)
    .join("\n");

  window.location.href = `mailto:${SUBMISSION_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
