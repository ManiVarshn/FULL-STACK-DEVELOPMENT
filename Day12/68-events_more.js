//schedule an event to be called
let EventEmitter=require("events");
let myEmitter=new EventEmitter();
myEmitter.on("mani",function(){
    console.log("Event Happened");
});
setTimeout(function(){
    myEmitter.emit("mani");
},2000);