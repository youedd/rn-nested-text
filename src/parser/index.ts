import BaseParser from './parser.js'

export interface TextGroup {
  tag: string
  children: Array<string | TextGroup>
}

export interface IParser {
  parse: (input: string) => Array<string | TextGroup>
}

export const Parser: IParser = BaseParser as IParser
