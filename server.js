import 'dotenv/config' 
import express from "express"
import cors from 'cors'
import routes from './routes/index.js'
import initialize from './utils/initializeServer.js'


initialize().then( () => main())

function main (){
    const app = express(),
    port = process.env.PORT || 3009;

    app.use(cors());

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // app.use((req, res, next) => {
    //   next();
    // });

    app.use('/api/config', routes.config);
    app.use('/api/locale', routes.locale);
    app.use('/api/themes', routes.themes);


    app.listen(port, () => console.log("Backend server live on " + port));

    app.get("/", (req, res) => {
        res.send({ message: "We did it!" });    
    });
}