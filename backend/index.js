const express = require("express");
const helmet = require("helmet");
const sequelize = require("./db.js");

const app = express();
app.use(helmet());
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const allowedHeaders = [
    "Accept",
    "Accept-Language",
    "Content-Language",
    "Content-Type",
    "Authorization",
    "verify-token"
  ];

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", allowedHeaders.join(", ")); // Join the headers with a comma and space
  next();
});

app.use(gameRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.error("Erro ao iniciar o servidor:", err);
  } else {
    console.log(`Servidor está rodando na porta ${PORT}`);
  }
});

sequelize.sync().then(
  () => {
    console.log("Conectado ao banco de dados");
  },
  (error) => {
    console.error("Erro ao conectar ao banco de dados");
  }
);