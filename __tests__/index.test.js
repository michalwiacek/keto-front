/* eslint-env jest */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import IndexPage from '../pages/index.tsx';

test('index page loads normally', async () => {
  const { getByText, findByText } = render(<IndexPage />);

  expect(getByText('Get to where you want to be.')).toBeInTheDocument();
});
