import React from "react";
import useIntersectionObserver from "./use-intersection-observer";

const Example = () => {
  const observerCallback = () => console.log("Hello world was viewed");

  const { createObserverRef, disconnectObserver } =
    useIntersectionObserver(observerCallback);

  React.useEffect(() => {
    () => disconnectObserver();
  }, []);

  return (
    <section ref={createObserverRef()}>
      <span>Hello world!</span>
    </section>
  );
};

export default Example;
