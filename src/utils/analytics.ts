/**
 * SolForte Transportes - Analytics & Conversion Tracking Helper
 * Safely pushes events to window.dataLayer (GTM/GA4) and dispatches CustomEvents
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type ConversionAction =
  | 'click_quote_cta'
  | 'submit_quote_form'
  | 'click_tracking_cta'
  | 'submit_tracking_search'
  | 'click_whatsapp'
  | 'click_phone'
  | 'click_email'
  | 'open_quote_modal';

export const trackConversionEvent = (
  action: ConversionAction,
  params: Record<string, string | number | boolean> = {}
) => {
  const eventPayload = {
    event: action,
    timestamp: new Date().toISOString(),
    ...params,
  };

  // Push to GTM dataLayer if present
  if (typeof window !== 'undefined') {
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(eventPayload);
    }

    // Dispatch a browser DOM CustomEvent for custom listeners
    window.dispatchEvent(
      new CustomEvent('solforte_conversion', {
        detail: eventPayload,
      })
    );
  }
};
