import { Parser } from '../src/parser'

it('should parse empty text', () => {
  expect(Parser.parse('')).toEqual([])
})

it('should parse simple text', () => {
  expect(Parser.parse('this is a test !')).toEqual(['this is a test !'])
})

it('should parse styled text', () => {
  expect(Parser.parse('<b>this is a test !</b>')).toEqual([
    { tag: 'b', children: ['this is a test !'] }
  ])

  expect(Parser.parse('< b   >this is a test !</  b  >')).toEqual([
    { tag: 'b', children: ['this is a test !'] }
  ])
})

it('should parse mixed text', () => {
  expect(Parser.parse('this is a <b> test !</b>')).toEqual([
    'this is a ',
    { tag: 'b', children: [' test !'] }
  ])

  expect(Parser.parse('this is a< b   > test !</  b  >')).toEqual([
    'this is a',
    { tag: 'b', children: [' test !'] }
  ])

  expect(Parser.parse('this is a< b   > test </  b  >!')).toEqual([
    'this is a',
    { tag: 'b', children: [' test '] },
    '!'
  ])

  expect(Parser.parse('<c>this</c> is a< b   > test </  b  >!')).toEqual([
    { tag: 'c', children: ['this'] },
    ' is a',
    { tag: 'b', children: [' test '] },
    '!'
  ])
})

it('should parse nested styled text', () => {
  expect(Parser.parse('this is a <b> <c>nested</c> test !</b>')).toEqual([
    'this is a ',
    {
      tag: 'b',
      children: [' ', { tag: 'c', children: ['nested'] }, ' test !']
    }
  ])

  expect(
    Parser.parse(
      `<b>root</b> : 
=> <root>this is a <b> <c>nested</c> test !</b></root>`
    )
  ).toEqual([
    { tag: 'b', children: ['root'] },
    ` : 
=> `,
    {
      tag: 'root',
      children: [
        'this is a ',
        {
          tag: 'b',
          children: [' ', { tag: 'c', children: ['nested'] }, ' test !']
        }
      ]
    }
  ])
})

it('should throw error on start/end tags missmatch', () => {
  try {
    Parser.parse('<b>this is a test !</c>')
    // eslint-ignore-next-line
  } catch (error: unknown) {
    const { message } = error as Error
    expect(message).toBe('Invalid closing tag </c>')
  }

  try {
    Parser.parse('<b>this <c>is a test !</b></c>')
    // eslint-ignore-next-line
  } catch (error: unknown) {
    const { message } = error as Error
    expect(message).toBe('Invalid closing tag </b>')
  }
})
