const template = require('lodash.template');
const templateSettings = require('lodash.templateSettings');
const StateInline = require('markdown-it/lib/rules_inline/state_inline');

function parseTokens(context) {
    return tokens => {
        for(let token of tokens) {
            if(token.children) {
                parseTokens(context)(token.children);
            }
            else {
                token.content = template(token.content)(context);
            }
        }
    };
}

module.exports = (context = {}) => {
    return function(md) {
        // md.inline.ruler.push('pkg', state => {
            // console.log(1, state);
        // });

        md.core.ruler.push('pkg', state => {
            parseTokens(context)(state.tokens);
        });

        // md.block.ruler.after('code', 'pkg', state => {
            // state.src = parse(context)(state.src);
        // });
    };
}


        /*
        try {
            const replacement = template(state.src)(context);
``
            if(replacement !== undefined) {
                state.src = replacement;

                // state.src = state.src.replace(new RegExp(state.src, 'g'), replacement);
            }
        }
        catch (e) {
            //
        }
        */

        /*
        let start = 0, end = 0;

        while(end < state.src.length) {
            start = state.src.indexOf('<%');
            end = state.src.indexOf('%>');

            console.log(start, end);
        }

        // console.log(start, end, state.src.length);
        
        /*
        const pos = state.pos || 0;
        const posMax = state.posMax || state.src.length;

        let start = pos;

        while(start < posMax) {
            // console.log(state.src[start].charCodeAt(start));

            // If <%
            if(state.src.charCodeAt(start) === 0x0003C ||
               state.src.charCodeAt(start + 1) === 0x0003D) {
                        
                let matches = false, stop = pos;

                while (stop < posMax) {
                    stop++;

                    if( state.src.charCodeAt(stop) === 0x00025 && 
                        state.src.charCodeAt(stop + 1) === 0x0003E) {
                        matches = true;
                        stop += 2;
                        break;
                    }
                }

            }

            start++;
        }
        */

        /*

        // If %
        if(state.src.charCodeAt(pos + 1) !== 0x00025) {
            return false;
        }

        // If =
        if(state.src.charCodeAt(pos + 2) !== 0x0003D) {
            return false;
        }

        let matches = false, stop = pos;

        while (stop < posMax) {
            stop++;

            if( state.src.charCodeAt(stop) === 0x00025 && 
                state.src.charCodeAt(stop + 1) === 0x0003E) {
                matches = true;
                stop += 2;
                break;
            }
        }

        if(!matches) {
            return false;
        }

        const src = state.src.slice(pos, stop);

        const replacement = template(src)(context);

        console.log(replacement);

        if(replacement !== undefined) {
            state.src = state.src.replace(new RegExp(src, 'g'), replacement);
        }
        */