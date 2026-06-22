interface FullpageDropEffectApi {
  setOption: (key: string, value: unknown) => void;
}

interface FullpageApi {
  destroy: (type?: string) => void;
  dropEffect?: FullpageDropEffectApi;
}

interface FullpageConstructor {
  new (selector: string, options?: Record<string, unknown>): { destroy: (type?: string) => void };
}

declare global {
  interface Window {
    fullpage?: FullpageConstructor | unknown;
    fullpage_api?: FullpageApi;
  }
}

export {};
