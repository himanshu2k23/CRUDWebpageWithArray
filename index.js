const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const path = require('path');

const comments=[
    {
        id:uuid(),
        username: "Jhon",
        comment:"I have a dream and a hope it comes true"
    },
    {
        id:uuid(),
        username: "Doe",
        comment: "I wish that the sky up abova"
    }
];
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine','ejs');
// app.set('view',path.join(__dirname,'views'));     


app.get('/comments',(req,res)=>{
    res.render(path.join(__dirname,'views/comments.ejs'),{ comments });
});

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})