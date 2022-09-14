import { FunctionComponent, useEffect, useState } from 'react';
import './styles.css';

export type Color = 'red' | 'yellow' | 'green';

export interface StoplightProps {
  red: number;
  green: number;
  yellow: number;
  schedule: [Color, Color, Color];
}

export const Stoplight: FunctionComponent<StoplightProps> = (props) => {
  const { schedule, red, green, yellow } = props;
  const [color, setColor] = useState(schedule[0]);

  useEffect(() => {
    let ms = color == 'red' ? red : color == 'green' ? green : yellow;
    let timeout = setTimeout(() => {
      const index = schedule.indexOf(color) + 1;
      const next = index === schedule.length ? 0 : index;
      setColor(schedule[next]);
    }, ms);
    return () => clearTimeout(timeout);
  }, [red, green, yellow, color, schedule]);

  return (
    <div style={{ border: '1px solid red' }}>
      {(['red', 'yellow', 'green'] as Color[]).map((item) => (
        <div
          key={item}
          style={{ background: item, opacity: color === item ? 1 : 0.25, borderRadius: '4px' }}
        >
          {props[item]}
        </div>
      ))}
    </div>
  );
};
