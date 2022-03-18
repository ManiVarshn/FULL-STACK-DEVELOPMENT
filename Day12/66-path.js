let path=require("path");
let list=["user","company","product"];
let files=["info.html","history.html","profile.html"];
let url=path.join(list[Math.floor(Math.random()*list.length)],files[Math.floor(Math.random()*files.length)]);
console.log(url);