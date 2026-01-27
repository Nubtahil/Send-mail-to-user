const express = require("express")
const app = express()
const port = 3000
const nodemailer = require("nodemailer")
const path = require("path")

// middle-ware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set("view engine","ejs")

const transpoter = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"nubtahilmustafa@gmail.com",
        pass:"nbeflicexbwficyg"
    }
})

 
app.get("/", (req,res)=>{
res.render("mailpage")
})
 
app.post ("/send-email",async (req,res)=>{
 const {to ,subject ,message} = req.body;

// const template = fs.readFile("./views/mailpage.ejs")
// const html = ejs.render(template,{name : "john"})
 
 try{
    const info = await  transpoter.sendMail({
    from:'"nubtahil mustafa" <nubtahilmustafa@gmail.com>',
    to:to,
    subject:subject,
    text:message,
    attachments:[
        {
            filename:"data.pdf",
            path: path.join(__dirname,"files","data.pdf")
        }
    ]             
    //html:"html"
 })
 res.status(200).json({message:"email sent successfully",info})
 }
 catch(err){
res.status(500).json({message: "error in sending email",err})
 }
}) 

 

app.listen(3000, ()=>{
    console.log(`server is jumping on port ${port}`)
})