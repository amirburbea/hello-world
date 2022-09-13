import { render, screen } from '@testing-library/react';
import { App } from './index';

test('renders text', () => {
  const text = 'Hello World';
  render(<App text={text}/>);

  const helloWorld = screen.getByText(text);
  expect(helloWorld).toBeInTheDocument();
});
