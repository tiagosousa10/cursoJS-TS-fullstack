import { useEffect, useRef } from 'react';

export function useInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null,
): void {
  const savedCallBack = useRef<C>();

  //Remover the latest callback
  useEffect(() => {
    savedCallBack.current = callback;
  }, [callback]);

  //set up the interval
  useEffect(() => {
    function tick() {
      if (savedCallBack.current) savedCallBack.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
