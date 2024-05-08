const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const fs = require('fs');

app.use(cors());
app.use(express.json());

app.post("/api/postComment", (req, res) => {
    if(fs.existsSync("comments.json")){
        let commentsJson = fs.readFileSync("comments.json", "utf-8");
        let comments = JSON.parse(commentsJson);
        comments.comments.push(req.body);
        console.log(comments)
        commentsJson = JSON.stringify(comments);
        fs.writeFileSync('comments.json', commentsJson, (err)=>console.log(err));
        res.send(200);
    }else{
        console.log(JSON.stringify(req.body));
        const obj = {comments:[]};
        obj.comments.push(req.body);
        fs.writeFileSync("comments.json", JSON.stringify(obj), {flag:'a+'}, (err)=>console.log(err));
        res.send(200);
    }
});

app.post("/api/makeOrder", (req, res) => {
    if(fs.existsSync("orders.json")){
        let ordersJson = fs.readFileSync("orders.json", "utf-8");
        let orders = JSON.parse(ordersJson);
        orders.orders.push(req.body);
        ordersJson = JSON.stringify(orders);
        fs.writeFileSync('orders.json', ordersJson, (err)=>console.log(err));
        res.send(200);
    }else{
        console.log(JSON.stringify(req.body));
        const obj = {orders:[]};
        obj.orders.push(req.body);
        fs.writeFileSync("orders.json", JSON.stringify(obj), {flag:'a+'}, (err)=>console.log(err));
        res.send(200);
    }
});

app.listen(PORT, () => console.log("server running on port "+PORT));