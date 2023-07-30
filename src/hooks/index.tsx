import { useRef, useCallback } from "react";

export const useIntersectionObserver = () => {
  const observerRef = useRef<IntersectionObserver>();

  const observeNode = (element: HTMLElement) =>
    observerRef.current?.observe(element);

  const disconnectObserver = () => observerRef.current?.disconnect();

  const handleRef = useCallback((element: HTMLElement | null) => {
    if (!element) {
      return;
    }
    observeNode(element);
  }, []);

  const createObserverRef = (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) => {
    observerRef.current = new IntersectionObserver(callback, options);

    return handleRef;
  };

  return { createObserverRef, disconnectObserver };
};
