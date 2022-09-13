import { FunctionComponent } from 'react';
import './styles.css';

export interface AppProps {
  text: string;
}

export const App: FunctionComponent<AppProps> = ({ text }) => (
  <div className="container">
    <span>{text}</span>
  </div>
);
