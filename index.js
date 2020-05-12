const path = require('path');

export default (options, ctx) => ({
    enhanceAppFiles: [
        path.resolve('./enhanceAppFile.js')
    ]
});