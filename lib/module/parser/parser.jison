
/* lexical grammar */
%lex

%%
\<\/(.+?)\>             return 'END_TAG';
\<(.+?)\>               return 'START_TAG';
(.|\n)                  return 'CHAR'
<<EOF>>                 return 'EOF';
/lex

%start content

%% /* language grammar */


content
    : mixedText EOF
        {return $1;}
    ;

mixedText
    : textOrElement mixedText
        {$$ = [$1, ...$2];}
    | %empty
        {$$ = [];}
    ;

textOrElement
    : element
    | text
    ;

element
    : START_TAG mixedText END_TAG
        {
            const tags = [$1, $3].map(tag => tag.replace(/(^\<\/?)|(\>$)/g, '').trim());
            if (tags[0] !== tags[1]) {
                throw new Error('Invalid closing tag ' + $3)
            }

            $$ = { tag: tags[0], children: $2 };
        }
    ;

text 
    : CHAR text
        {$$ = $1 + $2;}
    | CHAR
        {$$ = $1;}
    ;
