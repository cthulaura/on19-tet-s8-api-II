const express = require("express")
const app = express()
const port = 3000;
const listaProdutos = require("./model/produtos.json")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Olá Mundo!")
})

app.get("/produtos", (req,res) => {
    const filtroID = req.query.id

    const listarProdutos = listaProdutos.filter((item) => {
        if(filtroID) {
            return item.id.toLowerCase() === filtroID.toLowerCase();
        }
        return item
    })
})

app.get("/produtos", (req, res) => {

    res.json(listaProdutos)
})

app.post("/produtos/:id", (req, res) => {
    const id = req.params.id
    const filtroId = listaProdutos.filter((item) => item.id == id)
    res.json(filtroId)
})

app.post("/produtos", (req, res) => {
    const corpo = req.body 

    listaProdutos.push(corpo)

    res.json(listaProdutos);
})

app.listen(port, () => {
    console.log("Api está ESCUTANDO na porta 3000")
})

