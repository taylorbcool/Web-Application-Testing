import React from 'react';
import { render } from '@testing-library/react';
import BottomRow from './BottomRow';

test('should display number of balls', () => {
    const { getByText } = render(<BottomRow />)
    getByText(/balls/i)
  })