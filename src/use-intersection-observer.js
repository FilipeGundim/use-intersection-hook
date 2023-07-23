import React from "react";

const useIntersectionObserver = (callback) => {
  const observerRef = React.useRef();

  const observeNode = (node) => observerRef.current?.observe(node);

  const disconnectObserver = () => observerRef.current?.disconnect();

  const handleRef = React.useCallback((node) => {
    if (!node) {
      return;
    }
    observeNode(node);
  }, []);

  const createObserverRef = () => {
    const observer = new IntersectionObserver(callback);
    observerRef.current = observer;

    return handleRef;
  };

  return { createObserverRef, disconnectObserver };
};

export default useIntersectionObserver;
