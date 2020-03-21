import * as express from 'express';

const app = express();

app.get('/feed', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json([
        {
            name: 'John Doe',
            content: 'xyz'
        },
        {
            name: 'John Doe',
            content: 'xyz'
        },
        {
            name: 'John Doe',
            content: 'xyz'
        }
    ])
})

app.listen(5000, () => {
    console.log('Listening at http://localhost:5000')
});