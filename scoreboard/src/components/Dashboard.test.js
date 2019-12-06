import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('should contain a button for out', () => {
    const { getByText } = render(<Dashboard />)
    getByText(/out/i)
  })