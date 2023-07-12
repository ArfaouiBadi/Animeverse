const express=require("express")
const cors=require("cors")




//require("./config/db")
const app=express()
const port=3001
app.use(cors())
app.use(express.json())


app.listen(port, () => console.log(`🟢 server started on port ${port}`))
