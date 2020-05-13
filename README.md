# Vuepress Template Constants

The purpose of this plugin is to provide a way to define constants that are
parsed before markdown and template components are rendered. This allows dynamic
variables, like package.json version numbers, to be inserted into code examples,
and parsed BEFORE anything is rendered.

## Installation

NPM

    npm install vuepress-plugin-template-constants --save-dev

Yarn

    yarn add vuepress-plugin-template-constants

## Basic Usage

``` js
// .vuepress/config.js

module.exports = {
    plugins: [
        ['vuepress-plugin-template-constants', {
            first: 'Benjamin',
            last: 'Franklin',
            founder: true,
            parents: {
                father: 'Josiah Franklin',
                mother: 'Abiah Folger'
            },
            dates: [
                'October 18, 1785',
                'November 5, 1788'
            ]
        }]
    ]
};
```

*Lodash Templates are used to parse variables.*.

``` js
<%= first %> // outputs: Benjamin
<%= last %> // outputs: Franklin
<%= founder ? 'Yes' : 'No' %> // outputs: Yes
<%= parents.mother %> // outputs: Abiah Folger
<%= parents.dates[1] %> // outputs: November 5, 1788
```

## Including Package.json Constants

``` js
// .vuepress/config.js

module.exports = {
    plugins: [
        ['vuepress-plugin-template-constants', {
            pkg: require(path.resolve('package.json'))
        }]
    ]
};
```

```
https://cdn.jsdelivr.net/npm/some-library-goes-here@<%= pkg.version %>/dist/SomeLibraryGoesHere.min.js
```

