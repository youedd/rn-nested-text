import React from 'react';
import { TextProps } from 'react-native';
declare type TextsProps = Record<string, TextProps> | undefined;
export interface NestedTextProps extends TextProps {
    children: string;
    textProps?: TextsProps;
}
declare const NestedText: React.FC<NestedTextProps>;
export default NestedText;
