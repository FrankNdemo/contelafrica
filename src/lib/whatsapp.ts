const APPOINTMENT_PHONE = "254114470441";

export function appointmentWhatsAppUrl(
  message = "Hello Contel Africa, I would like to book an appointment.",
) {
  return `https://wa.me/${APPOINTMENT_PHONE}?text=${encodeURIComponent(message)}`;
}
