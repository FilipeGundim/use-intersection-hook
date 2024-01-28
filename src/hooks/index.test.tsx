import React from "react";
import { renderHook } from "@testing-library/react";
import { useIntersectionObserver } from ".";

describe("useIntersectionObserver hook", () => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn,
    unobserve: () => null,
    disconnect: () => null,
  });

  beforeEach(() => {
    window.IntersectionObserver = mockIntersectionObserver;
  });
  it("Should return handle ref observer", () => {
    const { result } = renderHook(() => useIntersectionObserver());
    const { observe } = result.current;

    const callBack = jest.fn(() => {});
    const handleRef = observe(callBack);

    expect(handleRef).toBeDefined();

    const e = (<div>hello world</div>) as unknown as HTMLElement;
    handleRef(e);

    expect(mockIntersectionObserver).toBeCalled();
  });
});
