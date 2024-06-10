const fs = require('fs');
// console.log(fs)
// fs.mkdir(path, mode, callback)
const path = require('path')
// fs.mkdir(path.join(__dirname,'test'), (err)=>{  
//     if(err) {
//         return console.error(err)
//     }
//     console.log('디렉토리 생성완료')
// })


fs.rmdir(path.join(__dirname,'test'), (err)=>{  
    if(err) {
        return console.error(err)
    }
    console.log('디렉토리 삭제완료')
})