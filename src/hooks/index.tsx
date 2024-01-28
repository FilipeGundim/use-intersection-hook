import { useRef, useCallback } from "react";

export const useIntersectionObserver = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observeNode = (e: HTMLElement) => observerRef.current!.observe(e);

  const disconnect = () => observerRef.current!.disconnect();

  const handleRef = useCallback((element: HTMLElement | null) => {
    if (!element) {
      throw new Error("❌ The element is invalid");
    }
    observeNode(element);
  }, []);

  const observe = (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) => {
    observerRef.current = new IntersectionObserver(callback, options);

    return handleRef;
  };

  return { observe, disconnect };
};
