(this["webpackJsonppraveenoruganti-courses"]=this["webpackJsonppraveenoruganti-courses"]||[]).push([[31],{600:function(n,e,o){"use strict";o.r(e),e.default=' In CSS, selectors are patterns used to select the element(s) you want to style.\n\n![screenshot of the app](https://praveenoruganti.github.io/courses/images/css/css_selectors.png)\n\n**HTML**\n\n```html\n<h1>First Heading</h1>\n<h2 id="h2">Second Heading</h2>\n<h3 class="h3">Third Heading</h3>\n<h4>Fourth Heading</h3>\n<div>\n    <p>Child Selector</p>\n    <h5>Five Heading </h5>\n</div>\n<div>\n    <h6>Six Heading</h6>\n</div>\n<a href="https://www.google.com" target="_blank">Google</a>\n```\n\n**CSS**\n\n```jsx\n/* Universal selector */\n* {\n  background-color: limegreen;\n}\n\n/* Element selector */\nbody {\n  margin: 0;\n}\n\n/* Grouping selector */\nh1,\nh4 {\n  color: blue;\n}\n\n/* Id selector */\n#h2 {\n  color: brown;\n}\n\n/* Class selector */\n.h3 {\n  color: khaki;\n}\n\n/* Descendent selector */\ndiv h6 {\n  color: grey;\n}\n\n/* Child selector */\ndiv > p {\n  color: yellow;\n  font-weight: bold;\n}\n\n/* Pseudo class selector */\na:hover {\n  color: red;\n}\n\n/* Pseudo element selector */\np::first-letter {\n  color: black;\n}\n\n/* Attribute selector */\na[target="_blank"] {\n  text-transform: uppercase;\n}\n\n```\n\nYou can check out the [Demo](https://praveenoruganti.github.io/courses/demo/css/Selectors/)\n '}}]);