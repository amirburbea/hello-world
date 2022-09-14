import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Stoplight, StoplightProps } from './stoplight';

const Root = () => {
  const [timings, setTimings] = useState<StoplightProps | undefined>();

  useEffect(() => {
    async function loadProps() {
      const timings = await generateTimings();
      setTimings(timings);
    }

    const interval = setInterval(loadProps, 10000);
    return () => clearInterval(interval);
  }, []);

  return <>{timings ? <Stoplight {...timings} /> : null}</>;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);

async function generateTimings(): Promise<
  StoplightProps
> {
  return {
    red: Math.floor(Math.random() * 1000),
    yellow: Math.floor(Math.random() * 1000),
    green: Math.floor(Math.random() * 1000),
    schedule: ['red', 'green', 'yellow',],
  };
}
