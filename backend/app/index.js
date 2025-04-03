const app = require("./app.js");
const { port } = require("./config");

app.listen(() => {
    console.log(`Server uruchomiony na porcie: ${port}`);
})