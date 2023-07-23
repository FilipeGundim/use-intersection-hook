# use-intersection-hook

# How to use

Simply import `use-intersection-hook` on your component, then call this on that way:

```jsx
import useIntersectionObserver from "use-intersection-observer";

const Example = () => {
  const { createObserverRef, disconnectObserver } = useIntersectionObserver();

  React.useEffect(() => {
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

every time the component was viewed by the client, a callback will be triggered

## TODO:

- [ ] Port to TS
- [ ] Apply some cool CSS to `example`
- [ ] Write TESTS!
- [ ] Deploy example to GH pages!
- [ ] Configure Github Actions
