import React from 'react'
import { render } from '@testing-library/react-native'
import NestedText from '../src/NestedText'

it('should render simple text', () => {
  const { toJSON } = render(<NestedText>This is a Test</NestedText>)
  expect(toJSON()).toMatchSnapshot()
})

it('should render simple text with props', () => {
  const onPressMock = jest.fn()
  const { toJSON } = render(
    <NestedText
      testID='text'
      style={{ color: 'red' }}
      onPress={() => onPressMock()}
    >
      This is a Test
    </NestedText>
  )

  expect(toJSON()).toMatchSnapshot()
})

it('should render nested text ', () => {
  const { toJSON } = render(
    <NestedText>{'This <b>is a <a>Link</a></b>'}</NestedText>
  )

  expect(toJSON()).toMatchSnapshot()
})

it('should render nested text with props', () => {
  const onPressMock = jest.fn()
  const { toJSON } = render(
    <NestedText
      testID='text'
      style={{ color: 'red' }}
      textProps={{
        b: {
          testID: 'bold'
        },
        a: {
          testID: 'link',
          style: { color: 'blue', textDecorationLine: 'underline' },
          onPress: () => onPressMock()
        }
      }}
    >
      {'This <b>is a <a>Link</a></b>'}
    </NestedText>
  )

  expect(toJSON()).toMatchSnapshot()
})
