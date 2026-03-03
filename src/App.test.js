// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LearnPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LearnPulse/i);
    expect(titleElement).toBeInTheDocument();
});
