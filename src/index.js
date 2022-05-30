/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 29/05/2022 - 19:15:13
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/05/2022
    * - Author          : mario
    * - Modification    : 
**/

const express = require('express')
const cors = require('cors')
// require('dotenv').config()

// const env = process.env
const PORT = 3333
const HOST = 'http://localhost'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {

    // const { createCanvas, loadImage } = require('canvas')
    // const canvas = createCanvas(200, 200)
    // const ctx = canvas.getContext('2d')

    // // Write "Awesome!"
    // ctx.font = '30px Impact'
    // // ctx.rotate(0.1)
    // ctx.fillText('Awesome!', 50, 100)

    // // Draw line under text
    // // var text = ctx.measureText('Awesome!')
    // // ctx.strokeStyle = 'rgba(0,0,0,0.5)'
    // // ctx.beginPath()
    // // ctx.lineTo(50, 102)
    // // ctx.lineTo(50 + text.width, 102)
    // // ctx.stroke()

    // // Draw cat with lime helmet
    // loadImage('examples/images/lime-cat.jpg').then((image) => {
    //   ctx.drawImage(image, 0, 0, 200, 200)

    //   console.log('<img src="' + canvas.toDataURL() + '" />')
    // })


    // ==========================================================


    // const { createCanvas, loadImage } = require('canvas')
    // const canvas = createCanvas(400, 400)
    // const ctx = canvas.getContext('2d')
    // const { Image } = require('canvas')
    // const fs = require('fs')

    // // From a buffer:
    // fs.readFile('examples/images/squid.png', (err, squid) => {
    //   if (err) throw err
    //   const img = new Image()
    //   img.onload = () => { console.log(canvas.toDataURL()); ctx.drawImage(img, 0, 0); }
    //   img.onerror = err => { throw err }
    //   img.src = squid
    //   console.log(Buffer.from(squid).toString('base64'))
    // })


    // ==========================================================

    let { x, y } = req.query
    x = parseInt(x)
    y = parseInt(y)

    const { createCanvas, loadImage } = require('canvas')
    const canvas = createCanvas(x, y)
    const ctx = canvas.getContext('2d')

    console.log({x, y})

    loadImage('examples/images/lime-cat.jpg').then((image) => {
        
        ctx.drawImage(image, 0, 0, x, y)

        // console.log('<img src="' + canvas.toDataURL() + '" />')

        // Retangulo Preenchido
        ctx.fillStyle = 'red'
        ctx.fillRect(20, 20, 150, 100)
        ctx.fillStyle = 'blue'
        ctx.fillRect(200, 20, 150, 100)

        // Retangulo não Preenchido
        ctx.lineWidth = 5
        ctx.strokeStyle = 'blue'
        ctx.strokeRect(20, 200, 150, 100)
        ctx.lineWidth = 5
        ctx.strokeStyle = 'red'
        ctx.strokeRect(200, 200, 150, 100)

        // Limpar Retangulo
        ctx.clearRect(30, 25, 120, 40)

        // Filtro de Texto
        ctx.font = '30px Arial'
        ctx.fillStyle = 'purple'
        ctx.fillText('Hello, World!', 200, 145)

        // Filtro de Texto
        ctx.lineWidth = 1
        ctx.strokeStyle = 'black'
        ctx.strokeText('Hello, World!', 200, 185)

        // console.log(canvas.toDataURL())
        res.send(`
            <img src="${canvas.toDataURL()}"></img>
        `)

    })
})

app.listen(PORT, () => console.log(`\n> Server is running at ${HOST}:${PORT}`))