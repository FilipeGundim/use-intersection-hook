import { renderHook } from "@testing-library/react";
import useIntersectionObserver from ".";

describe("useIntersectionObserver hook", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  })
  it("Should return handle ref observer", () => {
    const { result } = renderHook(() => useIntersectionObserver());
    const { createObserverRef } = result.current;

    const callBack = jest.fn(() => {});
    const handleRef = createObserverRef(callBack);

    expect(handleRef).toBeDefined();
  });
});
