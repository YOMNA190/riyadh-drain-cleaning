export const GA_TRACKING_ID = 'AW-18297016690';

export const CONVERSION_LABELS = {
  CLICK_TO_CALL_1: 'beC3CJSCrMocEPKi2ZRE',
  CONTACT_1: 'xaiGCIeesqscENjazM9D',
  CONTACT_2: 'Q4U8CL6CksocEPKi2ZRE',
};

export const trackConversion = (label: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': `${GA_TRACKING_ID}/${label}`
    });
  }
};

// Function to track phone calls specifically
export const trackPhoneCall = () => {
  trackConversion(CONVERSION_LABELS.CLICK_TO_CALL_1);
};

// Function to track contact/whatsapp clicks
export const trackContact = () => {
  // We can track both labels or choose one based on priority
  trackConversion(CONVERSION_LABELS.CONTACT_1);
  trackConversion(CONVERSION_LABELS.CONTACT_2);
};
