import { useEffect, useRef } from "react";

export const useAfterMountEffect = (
  cb: () => void | (() => void),
  deps?: any[]
) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const unsubscribe = cb();

    return () => unsubscribe?.();
  }, deps);
};
