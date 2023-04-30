const express = require("express");
const DBConnect = require("./Config/DBConnect");
const DataRoute = require("./Routes/DataRoute");
const app = express();
DBConnect()

app.use(express.json());
app.use("/api/v3/app", DataRoute)

const Port = 8080;
app.listen(Port, () => {
    console.log(`Server Run On ${Port}`);
})