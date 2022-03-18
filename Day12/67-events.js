let EventEmitter=require("events");
let myEmitter=new EventEmitter();
/*function EventHandler(event){
    console.log("Event Happened",event);

}
myEmitter.addListener("mani",EventHandler);
myEmitter.emit("mani",{time:new Date(),message:"Hello"});*/
function EventHandler1(event){
    console.log("Event Happened 1",event);

}
function EventHandler2(event){
    console.log("Event Handler 2",event);

}
function EventHandler3(event){
    console.log("Event Happened 3",event);

}
myEmitter.addListener("mani",EventHandler1);
myEmitter.on("mani",EventHandler2);
myEmitter.addListener("ManiVarshney",EventHandler3);
console.log(myEmitter.listenerCount("mani"));
console.log(myEmitter.listenerCount("ManiVarshney"));
console.log(myEmitter.eventNames());

myEmitter.emit("mani",{time:new Date(),message:"Hello"});
myEmitter.emit("ManiVarshney",{time:new Date(),message:"Hello Mani Varshney"});


