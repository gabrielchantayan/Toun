import 'dotenv/config' 
import express from "express"
import cors from 'cors'
import routes from './routes/index.js'
import initialize from './utils/initializeServer.js'


initialize().then( () => main())

function main (){
    const app = express(),
    port = process.env.SERVER_PORT || 3010;
    
    app.use(cors());
    app.options('*', cors())

    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });



    app.use(express.json());

    app.use(express.static('public'))

    app.use(express.urlencoded({ extended: true }));

    // app.use((req, res, next) => {
    //   next();
    // });
    
    app.use('/api/apps', routes.apps);
    app.use('/api/bookmarks', routes.bookmarks);
    app.use('/api/config', routes.config);
    app.use('/api/locale', routes.locale);
    app.use('/api/search', routes.search);
    app.use('/api/themes', routes.themes);
    app.use('/api/login', routes.login);



    app.listen(port, () => console.log("Backend server live on " + port));

    app.get("/", (req, res) => {
        res.sendFile('index.html', { root: './public' });   
    });
}