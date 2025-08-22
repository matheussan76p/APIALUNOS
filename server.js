// importa a biblioteca 
const express = require('express'); // framework web

// app a  aplicação express 
const app = express(); 

const PORT = 3000 

app.use(express.json());
const alunos = [
    {
    id:1, nome: "Matheus Pereira", cor: "azul", idade: 17
    }, 
    {
    id: 2, nome: "João Vitor", cor: "preto", idade: 17
    },
    {
    id: 3, nome: "Felipe Mello", cor: "verde", idade: 16
    }
]
app.get(''/'',(req,res)=>{
    res.json({
        mensagem:'Hello Word'
    })
})

app.get("/aluno/:id", (req, res)=>{

    const id = Number(req.params.id)
    console.log('valor recebido$')

    const aluno = alunos.filter( (aluno) => aluno.id === id)
    if(aluno.lenght >= 1){
        res.status(200).json(aluno)
    }else{
        res.status(404).json({ msg: "Aluno não encontrado"})
    }
    })



app.get('/alunos', (req,res)=>{
    res.json(ALUNOS); 
})

app.get("/alunos/:cor", (req, res) => {
    const cor = req.params.cor.toLowerCase();
    console.log(`Cor recebida: ${cor}`);
    const alunosFiltrados = ALUNOS.filter(
        (aluno) => aluno.cor.toLowerCase() === cor
    );
    if (alunosFiltrados.lenght > 0){
        res.status(200).json(alunosFiltrados)
    }else[ 
        res.status(404).json({ msg: "Nenhum aluno encontrado com essa cor"})
    ]
})

app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`)
})
