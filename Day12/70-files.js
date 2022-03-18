var fs=require ("fs");
//fs.writeFileSync("create_temp_file_synchronusly.txt","ManiVarshney");
/*fs.writeFile("create_temp_file_asynchronusly.txt","Student at Ajay Kumar Garg Engineering College",function(error){
    if(error){
        console.log("Error Detected");
     }
     else{
         console.log("No Error.File Created");
     }
 });*/
 //console.log(fs.readFileSync("read_temp_synchronously.txt",).toString())
 //console.log(fs.readFileSync("read_temp_synchronously.txt",)+" ")
 //console.log(fs.readFileSync("read_temp_synchronously.txt","utf-8"));
 /*fs.readFile("read_temp_synchronously.txt","utf-8",function(error,data){
     if(error){
         console.log("Error",error);
     }
     else{
         console.log(data);
     }

 })*/
 //Watch file is always asnchronus
 fs.watchFile("read_temp_asynchronously.txt",function(){
     console.log("File Changed");
 })
 setTimeout(function(){
    fs.appendFileSync("read_temp_asynchronously.txt","\nHello There","utf-8");
 },4000);
 