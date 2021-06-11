const express = require('express')
const cors = require('cors');
const app = express()
const port = 8000

// Enabling all cors for assignment
app.use(cors());

// Parse incoming JSON Req
app.use(express.json());

// Storing entire list of items to show on landing page and Liked Page ( Based on Liked Flag ) in an array.
// Ideally would come from a DB
const allItems = [
    {
        'id': '001',
        'productName': 'Microsoft',
        'productDescription': 'Xbox Series X 1TB Console',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1605814581/N40635116A_1.jpg'
    },
    {
        'id': '002',
        'productName': 'Apple',
        'productDescription': 'iPhone 12 with Facetime 128 GB',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1622203894/N41247173A_1.jpg'
    },
    {
        'id': '003',
        'productName': 'Lenovo',
        'productDescription': 'Legion 5 AMD Ryzen 5 RTX 3060 1TB',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1602744564/N41177345A_1.jpg'
    },
    {
        'id': '004',
        'productName': 'Sony',
        'productDescription': 'PlayStation 5 1TB Console',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg'
    },
    {
        'id': '005',
        'productName': 'Samsung',
        'productDescription': 'S21 Ultra 128 GB with Dual Sim and 5G',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1610367037/N43500468A_1.jpg'
    },
    {
        'id': '006',
        'productName': 'TCL',
        'productDescription': 'TCL 70 Inch 4K HDR QLED TV with Android',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1620202543/N43813909A_1.jpg'
    },
    {
        'id': '007',
        'productName': 'Apple',
        'productDescription': 'Apple Watch Series 6 44mm Space Grey',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1605898678/N40559283A_1.jpg'
    },
    {
        'id': '008',
        'productName': 'Nintendo',
        'productDescription': 'Nintendo Switch Console Extended Battery',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1596038235/N32253351A_2.jpg'
    },
    {
        'id': '009',
        'productName': 'Canon',
        'productDescription': 'Canon EOS 2000D DSLR Camera',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1595929577/N33956022A_1.jpg'
    },
    {
        'id': '010',
        'productName': 'Apple',
        'productDescription': 'iPad Pro 2020 2nd Gen - 256 GB Space Grey',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1585167551/N36143984A_1.jpg'
    },
    {
        'id': '011',
        'productName': 'Sony',
        'productDescription': 'Sony WH-1000XM4 Premium Headphones',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1605814023/N39679792A_1.jpg'
    },
    {
        'id': '012',
        'productName': 'JBL',
        'productDescription': 'Flip-5 Portable Bluetooth Speaker',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1565241665/N29003133A_1.jpg'
    },
    {
        'id': '013',
        'productName': 'HP',
        'productDescription': '27 Inch Full HD IPS Monitor',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1537004783/N17076595A_1.jpg'
    },
    {
        'id': '014',
        'productName': 'Bose',
        'productDescription': 'Bose Soundbar 700 White',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1542955043/N19200515A_1.jpg'
    },
    {
        'id': '015',
        'productName': 'Xiaomi',
        'productDescription': 'Xiaomi Robot Vaccum Cleaner with Mop',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1603457366/N39309396A_1.jpg'
    },
    {
        'id': '016',
        'productName': 'YeeLight',
        'productDescription': 'Smart LED Bulb with Multi Color',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1556344971/N24562179A_1.jpg'
    },
    {
        'id': '017',
        'productName': 'Rockstar Games',
        'productDescription': 'GTA-5 Xbox Premium Edition',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1502807889/N11991972A_1.jpg'
    },
    {
        'id': '018',
        'productName': 'Xiaomi',
        'productDescription': 'Mi Pro 2 Electric Scooter',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1605899178/N39770138A_1.jpg'
    },
    {
        'id': '019',
        'productName': 'Sony',
        'productDescription': 'PlayStation 5 1TB Console',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg'
    },
    {
        'id': '020',
        'productName': 'Samsung',
        'productDescription': 'S21 Ultra 128 GB with Dual Sim and 5G',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1610367037/N43500468A_1.jpg'
    },
    {
        'id': '021',
        'productName': 'TCL',
        'productDescription': 'TCL 70 Inch 4K HDR QLED TV with Android',
        'productImg': 'https://z.nooncdn.com/products/tr:n-t_240/v1620202543/N43813909A_1.jpg'
    },
]


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
    res.send(allItems.filter(item => item.liked))
});


/*
Route to handle POST reqs from /home page to store favourites. 
Returns FavItems Count
*/
app.post('/', (req, res) => {
    allItems.forEach(item => {
        if( item.id === req.body.id){
            item.liked = true;
        }
    })
    res.send(allItems)
});

/*
Route to handle DELETE reqs from / page to delete favourites 
Returns Updated FavItems Count
*/
app.delete('/favs', (req, res) => {
    allItems.forEach(item => {
        if( item.id === req.body.id){
            item.liked = false;
        }
    })
    res.send(allItems.filter(item => item.liked))
});


// App Listening for incoming reqs on LocalHost - http://127.0.0.1:8000/
app.listen(port, () => {
    console.log(`Server listening on http://127.0.0.1:${port}/`)
});

module.exports = app