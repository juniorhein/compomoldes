export function trackContactConversion() {
  try {
    window.gtag?.("event", "conversion", {
      send_to: "AW-16651584823/4nczCJrSqcUZELeKjIQ-",
    });
  } catch {
    // O contato deve continuar funcionando mesmo se o rastreamento falhar.
  }
}

export function trackContactLinkClick(event) {
  if (event.type === "auxclick" && event.button !== 1) return;
  const link = event.target.closest?.("a[href]");
  if (!link) return;

  const url = new URL(link.href, window.location.href);
  const isWhatsApp = ["https:", "http:"].includes(url.protocol)
    && ["wa.me", "api.whatsapp.com", "wa.link"].includes(url.hostname);
  if (isWhatsApp || url.protocol === "tel:" || url.protocol === "mailto:") {
    trackContactConversion();
  }
}
