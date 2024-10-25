import express from "express";
import bodyParser from "body-parser";
import motorRoute from "./routes/motor.js";
import mahasiswaRoute from "./routes/mahasiswa.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/mahasiswa", mahasiswaRoute);
app.use("/motor", motorRoute);

app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("Jodi Nur Farkhani");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
