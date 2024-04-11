const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()

app.get('/todos', (req, res) => {
    try{

    } catch(err){
        console.error(err)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))