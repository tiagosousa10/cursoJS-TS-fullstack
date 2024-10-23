const {html} = require('./base')

console.log(html)
console.log(html.match(/<.+>.+<\/.+>/g)) //greedy - max possivel
console.log(html.match(/<.+?>.+?<\/.+?>/g)) //greedy - min possivel