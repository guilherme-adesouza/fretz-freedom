import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders initial page render', () => {
    const {getByText} = render(<App/>);
    const title = getByText(/FRETZ & FREEDOM/i);
    expect(title).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Login')
});
