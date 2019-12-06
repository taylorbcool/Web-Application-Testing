import React from 'react';
import { render, GetAllBy } from '@testing-library/react';
import Display from './Display';

test("renders scores", ()=>{
    const { getAllByText } = render(<Display />)
    getAllByText(/score/i)
})