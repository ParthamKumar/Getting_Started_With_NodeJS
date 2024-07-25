const fs = require('fs')

// const txt = fs.readFileSync('demo.txt','utf-8')
// console.log(txt)

const t1 = performance.now()

fs.readFile('demo.txt','utf-8',(err,txt)=>{
    console.log(txt)
})

const t2 = performance.now()

console.log("Time Diff",t2-t1)