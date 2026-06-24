// CARREGA AS VARIÁVEIS DE AMBIENTE ANTES DE QUALQUER COISA
require('dotenv').config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcrypt");
const pool = require("./db.js");

const app = express();

    const listOrigins = [
        "http://localhost:8081",
        "http://localhost:5501",
        "http://127.0.0.1:5501",    
        "https://FireDW.github.io"
    ];

    app.use(cors({
        origin: listOrigins,
        credentials: true,
        methods: ["GET","POST","PUT","DELETE","OPTIONS"],
        allowedHeaders: ["Content-Type","Authorization"]
    }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    name: 'cafecentral.sid',
    cookie : {
        httpOnly : true,
        maxAge: 1000*60*60
    }
};

if(process.env.NODE_ENV === "production"){
    app.set("trust proxy", 1);
    sessionConfig.cookie.sameSite = "none";
    sessionConfig.cookie.secure = true;
} else {
    sessionConfig.cookie.sameSite = "lax";
    sessionConfig.cookie.secure = false;
};

app.use(session(sessionConfig));

app.get("/",(req,res) => {
    res.send("API CafeCentral Mobile funcionando");
})

app.post("/cadastro", async (req,res) => {
    try{
        const{nome_usuario, email_usuario, senha_usuario} = req.body
        console.log(req.body);
        
        if(!nome_usuario || !email_usuario || !senha_usuario){
            return res.status(400).json({erro: "Preencha todos os campos!"})
        }

        const [rows] = await (await pool).execute(
            "SELECT id_usuario FROM tb_usuario WHERE email_usuario=?", [email_usuario]
        );

        if(rows.length > 0){
            return res.status(409).json({erro: "E-mail já cadastrado!"})
        };

        const senhaHash = await bcrypt.hash(senha_usuario, 10);

        const sql = `INSERT INTO tb_usuario
                    (nome_usuario,email_usuario,senha_usuario)
                    VALUES (?,?,?)`
                    
        await (await pool).execute(sql,[nome_usuario,email_usuario,senhaHash])

        res.json({mensagem: "Usuário cadastrado com sucesso"})

    } catch(erro) {
        console.log(erro);
        res.status(500).json({erro: "Erro ao cadastrar usuário!"})
    }
})

app.post("/login", async (req,res) => {
    try {
        const {email_usuario,senha_usuario} = req.body || {};

        if(!email_usuario || !senha_usuario) {
            return res.status(400).json({erro: "Preencha todos os campos"})
        };

        const sql = `SELECT * FROM tb_usuario
                    WHERE email_usuario=?`

        const [resultado] = await (await pool).execute(sql, [email_usuario])
        
        if (resultado.legth === 0){
            return res.status(401).json({mensagem: "Usuario ou senha invalidos!"})
        };

        const usuario_usuario = resultado[0]

        const senhaCorreta = await bcrypt.compare(senha_usuario,usuario_usuario.senha_usuario)

        if(!senhaCorreta) {
            return res.status(401).json({erro: "Senha Invalida!"})
        };

        res.json({mensagem: "Login realizado com sucesso!"});

    } catch(erro) {
        console.log("Erro no login", erro)
        res.status(500).json({erro: "Erro ao cadastro"})
    }
})

app.post("/contato",async (req,res)=>{
    try{
        const {nome_mensagem, email_mensagem, mensagem_mensagem} = req.body

        if(!nome_mensagem || !email_mensagem || !mensagem_mensagem){
            return res.status(400).json({erro: "Preencha todos os campos"});
        }

        const sql = `INSERT INTO tb_mensagem(nome_mensagem,email_mensagem,mensagem_mensagem)
                    VALUES(?,?,?)`
                    
        await (await pool).execute(sql,[nome_mensagem,email_mensagem,mensagem_mensagem])
        res.json({mensagem: "Mensagem enviada com sucesso!"});

    } catch(erro){
        res.status(500).json({erro:"Erro ao enviar mensagem"});
    }
})

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000");
})
