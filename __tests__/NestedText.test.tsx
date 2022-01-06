import React from 'react'
import { render } from '@testing-library/react-native'
import NestedText from '../src/NestedText'

it('should render simple text', () => {
  const { toJSON } = render(<NestedText>This is a Test</NestedText>)
  expect(toJSON()).toMatchSnapshot()
})
