import express from "express";
import cors from "cors";

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/" , (req , res) => {
    console.log(req.body);

    if (Object.keys(req.body).length===1) {
        res.status(200).send({name:req.body.name , semesterGPA:0 , modules:[]});
    } else {
        res.status(200).json(0);
    }
});

function test() {
    console.log("hari hari wada");
};

app.listen(PORT , test());