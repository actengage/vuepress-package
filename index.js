const path = require('path');

module.exports = (context) => {
    return {
        extendMarkdown: md => {
            md.use(require('./markdown')(context));
        }
    }
};