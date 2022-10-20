const express = require("express");
const app = express();
app.use(express.json());
app.listen(5000, () => console.log("Server live!!"));
const pool = require("./src/database/database");


app.get("/recive", (req. res) => {
    //console.log("Deu certo a rota");
    const selectTest = async () => {
        const txtBanco = `SELECT * FROM public."Teste"`;
        await pool.query(txtBanco).then((resp) => {
            if(resp.rows) {
                console.table(resp.rows);
            }
        });
    };

    return selectTest();
});