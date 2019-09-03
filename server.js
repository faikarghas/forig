const express       = require('express');
const next          = require('next');
const compression   = require('compression')
const cookieParser = require('cookie-parser');

require('dotenv').config()
const port      = process.env.PORT || 3013;
const dev       = process.env.NODE_ENV !== 'production';
const app       = next({dev});
const handle    = app.getRequestHandler();


// const sitemapOptions = {
//     root: __dirname + '/static/sitemap/',
//     headers: {
//         'Content-Type': 'text/xml;charset=UTF-8'
//     }
// };

app.prepare()
.then(()=>{
    const server = express()
    server.use(compression());
    server.use(cookieParser());


    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err =>{
        if (err) throw err
        console.log(`> Ready on ${port}`);
    })
})
.catch(ex=>{
    console.error(ex.stack);
    process.exit(1)
})