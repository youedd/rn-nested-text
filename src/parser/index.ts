import Parser from './parser.js';

export interface TextGroup {
	tag: string;
	children: Array<string | TextGroup>;
}

export interface Parser {
	parse(input: string): Array<string | TextGroup>;
}


export default Parser as Parser;