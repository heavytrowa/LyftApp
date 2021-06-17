const express = require('express')
const app = express()

app.use(express.json())

app.post('/test', function(req, res){
    var val = '';
    for(var i in req.body.string_to_cut){
        if((i + 1) % 3 != 0) continue;
        val += req.body.string_to_cut[i];
    }
    res.json({return_string : val});
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})