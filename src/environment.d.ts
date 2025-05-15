
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_PRIMARY_COLOR: string;
  readonly VITE_SECONDARY_COLOR: string;
  readonly VITE_CRYPTO_COLOR: string;
  readonly VITE_BYTE_COLOR: string;
  readonly VITE_ENABLE_CONTACT_FORM: string;
  readonly VITE_ENABLE_NEWSLETTER: string;
  readonly VITE_ENABLE_TESTIMONIALS: string;
  readonly VITE_ENABLE_PORTFOLIO: string;
  readonly VITE_ENABLE_BLOG: string;
  readonly VITE_GA_ID: string;
  readonly VITE_FB_PIXEL_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
