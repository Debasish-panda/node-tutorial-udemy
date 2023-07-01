const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//const publicDirectory = path.join(__dirname, '../public') //define path for express config
const viewsPath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set("views", viewsPath)
hbs.registerPartials(partialPath)



 //app.use(express.static(publicDirectory)) //setup static directory to server
// app.get('', (req, res)=>{
//     res.send('Hello express')
// })

app.get('', (req, res)=>{
    res.render('index', {
        title: 'testing app for hbs'
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'THis is about us page'
    })
})

// app.get('', (req, res)=>{
    // res.send('<h1> Hello express </h1>')
//     res.send({
//         name:"debasish",
//         age:23,
//         sex:"male"
//     })
// })

app.get('/help', (req, res)=>{
    if(!req.query.search){
        return res.send({
            error: "You have to give something in search"
        })
    }
    console.log(req.query);
    res.send('Help page')
})
app.get('/help/*', (req, res)=>{
    res.send("Help do not have the page")
})
app.get('*', (req, res)=>{
    res.render('404', {
        errorMessage: "this page not found"
    })
})

app.listen(3000, ()=>{
    console.log('listed on 3000 port')
})

