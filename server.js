const express = require('express')
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/say', async (req,res)=>{
    if(req.query && req.query.keyword){
        
        // https://m44azlg2ug.execute-api.us-east-1.amazonaws.com/Dev/say?keyword=hello
        await axios.get('https://m44azlg2ug.execute-api.us-east-1.amazonaws.com/Dev/say?keyword='+req.query.keyword)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }else {
        res.send("Please add any keyword");
    }
    
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})