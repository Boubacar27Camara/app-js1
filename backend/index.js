const express = require("express"); // fait appele a librairy express
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 3000;

// connexion a la DB
connectDB();

const app = express();

// app.get('/post', (req, res) =>{
//     res.json({ message: "Voici les donnees" });
// });

// Middleware qui permet de traiter les donnees de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

//Lancer le serveur 
app.listen(port, () => console.log("Le serveur a demarre au port " + port));
