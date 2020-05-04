import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Travel from './Travel';

test('save button on travel page', () => {
    const {getByText} = render(<Travel/>);
    const rightClick = { button: 2 }
    fireEvent.click(getByText('Salvar'), rightClick)
});
