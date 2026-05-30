"use client";
import { useEffect } from "react";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "sck", "src"];
const CHECKOUT_DOMAIN = "pay.wiapy.com";

export function UTMForward() {
  useEffect(() => {
    function getParams(): Record<string, string> {
      const params: Record<string, string> = {};

      // 1. Pega da URL atual
      const search = new URLSearchParams(window.location.search);
      UTM_KEYS.forEach((key) => {
        const val = search.get(key);
        if (val) params[key] = val;
      });

      // 2. Complementa com o que Utmify salva no localStorage
      try {
        const stored = localStorage.getItem("utmify_params");
        if (stored) {
          const parsed = JSON.parse(stored) as Record<string, string>;
          Object.entries(parsed).forEach(([k, v]) => {
            if (!params[k] && v) params[k] = v;
          });
        }
      } catch {}

      return params;
    }

    function applyToLinks() {
      const params = getParams();
      if (!Object.keys(params).length) return;

      document.querySelectorAll<HTMLAnchorElement>(`a[href*="${CHECKOUT_DOMAIN}"]`).forEach((a) => {
        try {
          const url = new URL(a.href);
          Object.entries(params).forEach(([k, v]) => {
            if (!url.searchParams.has(k)) url.searchParams.set(k, v);
          });
          a.href = url.toString();
        } catch {}
      });
    }

    // Aplica imediatamente e após hydration completa
    applyToLinks();
    const timer = setTimeout(applyToLinks, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
