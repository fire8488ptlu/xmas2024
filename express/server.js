const express = require('express');
const app = express();
// PORT can also get from docker if not default is 5001
const port = process.env.PORT || 5001;
const path = require('path');
const fs = require('fs')
require('dotenv').config();


app.use(express.static(path.join(__dirname, './build')));



//更改url 更改路徑 更改內容

app.get('/*', function (req, res) {
    const filePath = path.join(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) return console.log(err);

        return res.send(data);
    });
});



app.listen(port, () => console.log(`Listening on port ${port}`));