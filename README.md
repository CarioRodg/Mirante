==============================
SEQUENCIA PARA CRIAR O PROJETO
==============================
Criar o arquivo package
npm init

//Instalar o nodemon para renicializar o server, sempre que houver alteração no codigo
npm install -g nodemon --save

//De preferencia rode o projeto usando nodemon
nodemon ./src/index.js

//Instalar o Neo4J
npm install neo4j-driver

============================
COMO RODAR O PROJETO BAIXADO
============================

//Instale todas as dependencias do projeto atraves do
npm install

//Rode o projeto usando o nodemon 
nodemon ./src/index.js
