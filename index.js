const express = require('express')
const app = express()
const port = 8000

// Storing entire list of items to show on landing page in an array.
// Ideally would come from a DB
const allItems = []

// Storing User Favs in an array. 
// Ideally would call DB and put it there against user in a real world situation.
let favItems = []

// Parse incoming JSON Req
app.use(express.json());

/*  
Route to handle GET reqs from / (Landing) page. 
Returns the list of all items.
 */
app.get('/', (req, res) => {
    res.send(allItems)
});


/*  
Route to handle GET reqs from /favs page. 
Returns the list of user's favItems.
 */
app.get('/favs', (req, res) => {
    res.send(favItems)
});


/*
Route to handle POST reqs from /home page to store favourites. 
Returns FavItems Count
*/
app.post('/', (req, res) => {
    favItems.push(req.body)
    res.send({ 'favsCount': favItems.length })
});

/*
Route to handle DELETE reqs from / page to delete favourites 
Returns Updated FavItems Count
*/
app.delete('/favs', (req, res) => {
    favItems = favItems.filter(item => req.body.id !== item.id )
    res.send({ 'favsCount': favItems.length })
});


// App Listening for incoming reqs on LocalHost - http://127.0.0.1:8000/
app.listen(port, () => {
    console.log(`Server listening on http://127.0.0.1:${port}/`)
});

module.exports = app