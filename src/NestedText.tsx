import React from 'react'
import { Text, TextProps } from 'react-native'
import { Parser, TextGroup } from './parser'

type TextsProps = Record<string, TextProps> | undefined
export interface NestedTextProps extends TextProps {
  children: string
  textProps?: TextsProps
}

type NestedTextComponent = React.FC<NestedTextProps> & {
  defaultTextProps: Record<string, TextProps>
}

const DEFAULT_TEXT_PROPS: Record<string, TextProps> = {
  i: {
    style: {
      fontStyle: 'italic'
    }
  },
  u: {
    style: {
      textDecorationLine: 'underline'
    }
  },
  b: {
    style: {
      fontWeight: 'bold'
    }
  }
}

const NestedText: NestedTextComponent = ({ children, textProps, ...props }) => {
  const parsed = React.useMemo(() => {
    return Parser.parse(children)
  }, [children])

  return <Text {...props}>{renderNestedText(parsed, textProps)}</Text>
}

const renderNestedText = (
  nestedText: Array<string | TextGroup>,
  textProps: TextsProps = {}
): Array<string | JSX.Element> => {
  return nestedText.map((text, index) => {
    if (typeof text === 'string') {
      return text
    }

    const props = {
      ...NestedText.defaultTextProps[text.tag],
      ...textProps[text.tag]
    }

    return (
      <Text key={index} {...props}>
        {renderNestedText(text.children, textProps)}
      </Text>
    )
  })
}

NestedText.defaultTextProps = DEFAULT_TEXT_PROPS
export default NestedText
