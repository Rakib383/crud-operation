
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes.js";


const app = express()


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.use('/contacts',router)
app.get('/',(req,res) => {
   return res.send('<h1>you are in home page</h1>')
})

const PORT = process.env.PORT || 2121

mongoose.connect(`mongodb+srv://rakib:servive21@cluster1.25zkwku.mongodb.net/`)

 .then(()=> {app.listen(PORT,()=> {
    console.log('server is runnig on port ' + PORT )
})})

 .catch(err => console.log(err))





