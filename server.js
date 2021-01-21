const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const programs = require('./programs.json');
app.use(express.static(path.join(__dirname, 'build')));

app.get('/programs', cors(), (req, res) =>{
    res.header("Content-Type", 'application/json');
    res.json(programs)
});

// Serve static assets if in production (For deployment to keroku etc.)
// if(process.env.NODE_ENV === 'production'){
    
//     app.use(express.static('clientapp/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'clientapp', 'build', 'index.html'));
//     });
// }

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});