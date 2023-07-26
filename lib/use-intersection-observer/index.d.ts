export declare const useIntersectionObserver: () => {
    createObserverRef: (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => (element: HTMLElement | null) => void;
    disconnectObserver: () => void;
};
