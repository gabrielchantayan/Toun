import 'dotenv/config' 
import express from "express"
import cors from 'cors'
import routes from './routes/index.js'

const app = express(),
port = process.env.PORT || 3009;





app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   next();
// });

app.use('/api/config', routes.config);



app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});