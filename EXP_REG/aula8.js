const {html2} = require('./base')


// $1 $2 $3 -> Retrovisores \1
// 

//console.log(html2)
//console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g))
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\1>)/g, '$1  HAHA $3 haha $4'))