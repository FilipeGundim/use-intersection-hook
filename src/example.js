import { useEffect } from "react";
import { useIntersectionObserver } from "./use-intersection-observer";

export const Example = () => {
  const observerCallback = () => console.log("Hello world was viewed");

  const { createObserverRef, disconnectObserver } = useIntersectionObserver(observerCallback);

  useEffect(() => {
    () => disconnectObserver();
  }, []);

  return (
    <section ref={createObserverRef()}>
      <span>Hello world!</span>
    </section>
  );
};

