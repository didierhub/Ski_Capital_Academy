require("dotenv").config()
const express=require("express")

const App=express()


App.listen(process.env.PORT,()=>{
    console.log("listening on PORT",process.env.PORT)
})