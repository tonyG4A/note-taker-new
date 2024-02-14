const express = require('express');
const routes = require('./routes');
const PORT = process.env.port || 3001;
const app = express();

// set the port
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Sever running on http://localhost:${PORT}`);
});