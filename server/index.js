const express = require('express');

const app = express();

app.use(express.json());

//endpoints

const port = 4040;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`)
})