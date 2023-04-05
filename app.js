import express from "express";
const app = express();

const notebooks = [
    {"id":1, "marca":"Asus"},
    {"id":2, "marca":"HP"}
]

app.get('/',(req,res)=>{
    res.status(200).send('API Loja');
})
app.get('/note',(req,res)=>{
    res.status(200).json(notebooks);
})

export default app;