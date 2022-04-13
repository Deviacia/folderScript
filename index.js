// Project settings
const dirSrc = './banners'
const templates = [
    {w: 300, h: 300},
    {w: 200, h: 420}
]

// Project settings END
// 
// Script

const fs = require('fs')

// Creating banners directory
const createDir = () => {
    fs.mkdir(dirSrc, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("New directory successfully created.")
        }
    })

    templates.forEach((item, index) => {
        fs.mkdir(`./${dirSrc}/${item.w}x${item.h}`, function(err) {
            if (err) {
              console.log(err)
            } else {
              console.log("New directory successfully created.")
            }
          })
    })
}

// Creating files and including them in separate directory
const createFiles = () => {
    fs.readFile("template/index.html", {encoding: 'utf-8'}, (err, data) => {
        // console.log(data)
        const dataWidth = '{width}'
        const dataHeight = '{height}'

        templates.forEach((item, index) => {
          fs.writeFile(`./${dirSrc}/${item.w}x${item.h}/index.html`, data, () =>{})
        })
    })
}

const changeIndex = (data) => {
    
}

// createDir()
// Now we need to change index files for independent
createFiles()