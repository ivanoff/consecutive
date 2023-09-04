declare module 'consecutive' {
  interface ConsecutiveFunction {
    (begin?: number | string, base?: number, inc?: number): () => void;
  }

  const consecutive: ConsecutiveFunction;
  export = consecutive;
}