import React from 'react';
import {render} from '@testing-library/react';
import App from './app';

describe('app', () => {
  it('Renders without error', () => {
    render(<App />);
  });
});
