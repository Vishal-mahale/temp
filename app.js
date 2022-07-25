
const sayhi = (name) => {

    console.log(`hello there ${name}`);

}

module.exports = sayhi

const names = require('./names')
const sayhi = require('./app')

const vari = require('./6-alternative-flavour')
require('./7file')



const os = require('os')
const user = os.userInfo()
console.log(user);

console.log(`The system uptime is ${os.uptime()} seconds`)
console.log(os.homedir());
console.log(os.platform());
console.log(os.version());

const currentOs = {
    name :os.type(),
    release:os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOs);




const path = require("path");

console.log(path.sep);
const filepath = path.join('/content','subfolder','text.txt')

console.log(filepath);

const base = path.basename(filepath)

console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absolute);




const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/text.txt','utf8');
const second = readFileSync('./content/first.txt','utf8');

console.log(first,second);

writeFileSync(
    './content/second.txt',
    `this is second file: ${first},${second}`,
    {flag :'a'}
    );


    /*
    const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{

    if(err){
        console.log("error occured");
        return
    }
    console.log(result);

    const first = result;

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log("Error while reading");
            return
        }
        const second = result;
        console.log(second);

        writeFile('./content/third.txt',`${first},${second}`,
        (err,result)=>{
            if(err)
            {
                console.log(err);
            }
            console.log(result);

        }
        )

       
        

    })
})

*/

/*const http = require('http')
const server = http.createServer((req,res)=>{

    if(req.url === '/')
    {
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is oue short history')
    }
    res.end(`<h1>contact page is not available</h1><p>we cant find  page</p>`)
})

server.listen(5000) */