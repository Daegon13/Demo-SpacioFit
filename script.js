(() => {
  const config = window.SPACIOFIT_CONFIG || {};

  // Reserva externa: todos los CTA apuntan al sistema actual, no lo sustituyen.
  document.querySelectorAll(".reserve-link").forEach(link => {
    if (config.bookingUrl) link.href = config.bookingUrl;
  });

  document.querySelectorAll(".whatsapp-link").forEach(link => {
    if (config.whatsappUrl) link.href = config.whatsappUrl;
  });

  // Promoción temporal reutilizable.
  const promo = config.promotion || {};
  const promoBar = document.getElementById("promoBar");
  if (promoBar && promo.active) {
    promoBar.hidden = false;
    document.getElementById("promoTitle").textContent = promo.title || "";
    document.getElementById("promoText").textContent = promo.text || "";
    const promoCta = document.getElementById("promoCta");
    promoCta.textContent = promo.ctaLabel || "Ver promoción";
    promoCta.href = promo.ctaUrl || "#tratamientos";
  }

  document.getElementById("promoClose")?.addEventListener("click", () => {
    promoBar.hidden = true;
  });

  // Google Reviews: solo datos reales configurados. No se generan testimonios.
  const reviews = config.googleReviews || {};
  if (reviews.enabled) {
    const rating = document.getElementById("reviewRating");
    const count = document.getElementById("reviewCount");
    if (rating) rating.textContent = reviews.rating || "—";
    if (count) count.textContent = reviews.count ? `${reviews.count} reseñas en Google` : "Reseñas en Google";
  }

  // Filtro visual simple para conectar necesidad -> servicios.
  document.querySelectorAll("[data-filter]").forEach(card => {
    card.addEventListener("click", () => {
      const filter = card.dataset.filter;
      window.setTimeout(() => {
        document.querySelectorAll(".service-pill").forEach(pill => {
          pill.classList.toggle("is-active", pill.dataset.service === filter);
        });
      }, 350);
    });
  });

  document.querySelectorAll(".service-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      pill.classList.toggle("is-active");
      track("service_interest", { service: pill.textContent.trim().replace("↗", "").trim() });
    });
  });

  // Analytics preparado para GTM/Plausible sin cargar scripts externos por defecto.
  function track(eventName, params = {}) {
    if (!config.analytics?.enabled) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "spaciofit_demo_event",
      action: eventName,
      ...params
    });

    if (typeof window.plausible === "function") {
      window.plausible(eventName, { props: params });
    }
  }

  document.querySelectorAll("[data-analytics]").forEach(el => {
    el.addEventListener("click", () => {
      track(el.dataset.analytics, {
        destination: el.href || "",
        label: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120)
      });
    });
  });

  // Exponer helper para integraciones futuras.
  window.SpacioFitDemo = { track };
})();
