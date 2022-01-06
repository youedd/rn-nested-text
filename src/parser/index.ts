import parser from './parser'
export interface TextGroup {
  tag: string
  children: Array<string | TextGroup>
}

export const Parser: any = {
  parse: (text: string): Array<string | TextGroup> => parser.parse(text)
}
