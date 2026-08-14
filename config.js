/*
  SPACIOFIT DEMO — CONFIGURACIÓN
  Cambiá datos acá sin tocar el HTML.
*/
window.SPACIOFIT_CONFIG = {
  bookingUrl: "https://agenxu.com/booking/centro-estetico?location_id=24",

  whatsappUrl: "https://wa.me/59895835225?text=Hola%2C%20quiero%20consultar%20por%20un%20tratamiento%20en%20SpacioFit.",

  promotion: {
    active: false,
    title: "Promoción temporal",
    text: "Activá este bloque con contenido real publicado por SpacioFit.",
    ctaLabel: "Ver promoción",
    ctaUrl: "#tratamientos"
  },

  googleReviews: {
    // Agregado público verificado al preparar esta demo. No contiene testimonios inventados.
    enabled: true,
    rating: "5,0",
    count: 137
  },

  analytics: {
    // La demo emite eventos en dataLayer si Google Tag Manager está presente.
    // También intenta Plausible si window.plausible existe.
    enabled: true
  }
};
