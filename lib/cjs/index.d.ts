export declare const useIntersectionObserver: () => {
    observe: (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => (element: HTMLElement | null) => void;
    disconnect: () => void;
};
