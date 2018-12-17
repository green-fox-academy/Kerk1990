let express = require('express');
let app = express();

app.get('/',(req,res) => res.sendfile(__dirname + '/index.html'));
app.use('/assets',express.static('assets'));

app.listen( 3000);