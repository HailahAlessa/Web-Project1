const express = require("express")
const path = require("path")
const app = express()
const router = express.Router();

// const hbs = require("hbs")
const LogInCollection = require("./mongodb")
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tt/tempelates')
const publicPath = path.join(__dirname, '../tt/public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


router.get('/public/ho.html', (req, res)=> {

    res.sendFile(__dirname + '/public/ho.html');
});

// hbs.registerPartials(partialPath)
app.use('/', router);

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/home.hbs', (req, res) => {
    res.render('home')
})


 app.get('/login.hbs', (req, res) => {
    res.render('login')
})

app.get('/signup.hbs', (req, res) => {
    res.render('signup')
})

app.get('/Q1.hbs', (req, res) => {
    res.render('Q1')
})
app.get('/Q2.hbs', (req, res) => {
    res.render('Q2')
})
// app.get('/Q3.hbs', (req, res) => {
//     res.render('Q3')
// })

app.get('/color1.hbs', (req, res) => {
    res.render('color1')
})
app.get('/color2.hbs', (req, res) => {
    res.render('color2')
})
app.get('/color3.hbs', (req, res) => {
    res.render('color3')
})

app.get('/greeting.hbs', (req, res) => {
    res.render('greeting')
})

app.get('/language.hbs', (req, res) => {
    res.render('language.hbs')
})




app.post('/signup', async (req, res) => {
    

    const data = {
        name: req.body.name,
        password: req.body.password
    }

await LogInCollection.insertMany([data])
res.render("home")
/*
   try{
    if (checking.name === req.body.name && checking.password===req.body.password) {
        res.send("user details already exists")
    }
    else{
        await LogInCollection.insertMany([data])
    }
   }
   catch{
    res.send("wrong inputs")
   }

    res.status(201).render("home", {
        naming: req.body.name
    })*/
})


app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.render("err")
        }


    } 
    
    catch (e) {

        res.render("err")
        

    }


})



app.listen(port, () => {
    console.log('port connected');
})