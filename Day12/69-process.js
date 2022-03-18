// console.log(process.argv);
//console.log(process.argv[2]);
/*let EventEmitter=require("events");
let myEmitter=new EventEmitter();
setTimeout(function(){
    myEmitter.emit("mani");
},2000);
myEmitter.on("mani",function(){
    console.log("Event Happened");
});*/

let EventEmitter=require("events");
let myEmitter=new EventEmitter();
process.nextTick(function(){
    myEmitter.emit("mani");
})
myEmitter.on("mani",function(){
    console.log("Event Happened");
});
console.log("MCA Student");
for(let i=0 ;i<=10 ; i++){
    console.log(i);
}


