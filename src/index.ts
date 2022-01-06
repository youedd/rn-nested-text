import { Parser, TextGroup } from './parser'

export const parse = (input: string): Array<String | TextGroup> =>
  Parser.parse(input)
