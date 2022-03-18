let os=require("os");
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.totalmem()/1024,"KB");
console.log((os.freemem()/1024)/1024,"MB");
console.log(os.userInfo().username);