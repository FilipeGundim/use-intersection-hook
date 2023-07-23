import React from "react";
import useIntersectionObserver from "./use-intersection-observer";

const Example = () => {
  const { createObserverRef, disconnectObserver } = useIntersectionObserver();

  React.useEffect(() => {
    () => disconnectObserver();
  }, []);

  const observerCallback = () => console.log("Hello world was viewed");

  return (
    <section ref={createObserverRef(observerCallback)}>
      <span>Hello world!</span>
    </section>
  );
};

export default Example;
