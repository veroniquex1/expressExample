import express from 'express'

// create an express app
const app = express()
const port = +process.env.PORT || 4000

// router
app.get('/', (req, res) => {
        res.json({
            status: res.statusCode,
            message: 'Home'      
        })

}) 

app.get('/about', (req, res) => {
        res.json({
            status: res.statusCode,
            message: 'About'      
        })
}) 

app.all('*', (req, res) => {
        res.json({
            status: 404,
            message: '404: Page not found'      
        })
}) 

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
}) // start listening on the specified port or defaulting to 4000
