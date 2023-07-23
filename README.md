# use-intersection-hook

This is a simple React Hooks that trigger a callback all time de element is viewed.  

# Installation

Just run a ```yarn add use-intersection-hook``` or ```npm i --save use-intersection-hook```

# How to use

Simply import `use-intersection-hook` on your component, then call this on that way:

```jsx
import { useEffect } from "react";
import { useIntersectionObserver } from "use-intersection-observer";

export const Example = () => {
  const { createObserverRef, disconnectObserver } = useIntersectionObserver();

  useEffect(() => {
    () => disconnectObserver();
  }, []);

  const observerCallback = () => console.log("Hello world was viewed");
  const observerOptions = {
    rootMargin: "20px",
  };

  return (
    <section ref={createObserverRef(observerCallback, observerOptions)}>
      <span>Hello world!</span>
    </section>
  );
};
```

Every time the component was viewed by the client, a callback will be triggered

## TODO:

- [ ] Port to TS
- [ ] Apply some cool CSS to `example`
- [ ] Write TESTS!
- [ ] Deploy example to GH pages!
- [ ] Configure Github Actions
