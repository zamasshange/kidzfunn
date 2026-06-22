declare module 'fullpage.js' {
  interface FullpageOptions {
    licenseKey?: string;
    navigation?: boolean;
    navigationPosition?: string;
    credits?: { enabled: boolean };
    scrollingSpeed?: number;
    onLeave?: (
      origin: { index: number },
      destination: { index: number },
      direction: string
    ) => void;
  }

  export default class fullpage {
    constructor(selector: string, options?: FullpageOptions);
    destroy(type?: string): void;
  }
}

declare module 'fullpage.js/dist/fullpage.min.css';
