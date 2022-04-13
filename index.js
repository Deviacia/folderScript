// Project settings
const dirExport = './banners'
const templates = [
    {w: 300, h: 300},
    {w: 200, h: 420},
    {w: 300, h: 420},
    {w: 600, h: 420}
]

// Script
const fs = require('fs')

// Creating banners directory
const createDir = () => {
    fs.mkdir(dirExport, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("New directory successfully created.")
        }
    })

    templates.forEach((item, index) => {
        fs.mkdir(`./${dirExport}/${item.w}x${item.h}`, function(err) {
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
        templates.forEach((item, index) => {
          fs.writeFile(`./${dirExport}/${item.w}x${item.h}/index.html`, data.replace(/{width}/g, item.w).replace(/{height}/g, item.h), () => {})
        })
    })
}

createDir()
createFiles()