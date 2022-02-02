import React from 'react';
import { TextProps } from 'react-native';
declare type TextsProps = Record<string, TextProps> | undefined;
export interface NestedTextProps extends TextProps {
    children: string;
    textProps?: TextsProps;
}
declare type NestedTextComponent = React.FC<NestedTextProps> & {
    defaultTextProps: Record<string, TextProps>;
};
declare const NestedText: NestedTextComponent;
export default NestedText;
