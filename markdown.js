const template = require('lodash.template');

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
        md.core.ruler.push('pkg', state => {
            parseTokens(context)(state.tokens);
        });
    };
}