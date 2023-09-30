const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.txt");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("Hello world");
        res.end();
    }else if(req.url === "/form"){
        res.setHeader("Content-Type","text/html");
        res.write("<form action='/submit' method='POST'><input name='inputData'/> <input name='inputData'/> <button>Submit</button></form>");
        res.end();
    }else if(req.url === "/submit"){
        let data = "";
        let pData;
        req.on("data" , (chunks) => data +=chunks);
        req.on("end" , ()=>{
            fs.readFile(filePath,'utf-8',(err,oldData)=>{
                const newData = oldData +"\n" +data;
                fs.writeFile(filePath,newData,()=>{
                    console.log("Saved");
                });
            });
            // console.log(data)
            // pData = data.split('&');
            // console.log(pData);
        });
        res.write("Data recieved");
        res.end();
    } else {
        res.write("Something went wrong");
        res.end();
    }
    
});
server.listen(3000);