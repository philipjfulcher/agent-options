import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ReactLib1 from './react-lib1';

describe('ReactLib1', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<ReactLib1 />);
    expect(baseElement).toBeTruthy();
    await screen.findByRole('heading')

    expect(screen.getByRole('heading')).toHaveTextContent(Math.random() > 0.5 ? 'Welcome' : 'Flaky error')
  });
});
