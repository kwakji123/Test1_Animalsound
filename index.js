const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());      // CORS 설정 적용하기

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/sound/:name', (req, res) => {
    const { name } = req.params;

    if (name == "dog") res.json({'sound' : 'bow-wow'});
    else if (name == "cat") res.json({'sound' : 'miau'});
    else if (name == "pig") res.json({'sound' : 'oink'});
    else res.json({'sound' : 'unknown'});
});

// app.get('/dog', (req, res) => {
//     res.json('Sound : bow-wow');
// });

// app.get('/cat', (req, res) => {
//     res.json('Sound : miau');
// });

app.listen(port, () => {
    console.log('Example app listening on port ${port}');
});