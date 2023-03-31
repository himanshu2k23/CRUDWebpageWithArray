const express = require('express');
const app = express();
const { v4: uuid } = require('uuid');
const path = require('path');
const methodOverride = require('method-override');

const comments = [
    {
        id: uuid(),
        username: "Jhon",
        comment: "I have a dream and a hope it comes true"
    },
    {
        id: uuid(),
        username: "Doe",
        comment: "I wish that the sky up abova"
    }
];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
// app.set('view',path.join(__dirname,'views'));     


app.get('/comments', (req, res) => {
    console.log({comments})
    res.render(path.join(__dirname, 'views/comments.ejs'), { comments });
});
app.get('/comments/new', (req, res) => {
    res.render(path.join(__dirname, 'views/post.ejs'));
})

app.post('/comments', (req, res) => {
    //console.dir(req.body);
    const { username, comment } = req.body;
    console.log({ username, comment })
    comments.push({ username, comment, id: uuid() });
    console.log({comments})
    res.redirect('/comments');
});

app.listen(3001, () => {
    console.log("ON PORT 3001!")
})