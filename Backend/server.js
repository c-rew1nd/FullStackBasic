import express from 'express'
const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

app.get('/api/products',(req, res) => {
    const products = [
        {
            id: 1,
            name : "smart-phone"
        },
        {
            id: 2,
            name : "smart-Tv"
        },
        {
            id: 3,
            name: "smart-fridge"
        }
    ];
    res.send(products);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at https://localhost:${port}`)
});