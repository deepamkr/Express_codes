//to send the html as response by mentioning the path
app.get('',(req,res)=>{
    //res.send('<h1>EXPRESS JS</h1>')
    res.sendFile(path.join(__dirname,'public','index.html'))
})