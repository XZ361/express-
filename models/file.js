var fs=require("fs");
//保存
exports.save=function(number,result){
    fs.writeFile("./data/"+number+".txt",JSON.stringify(result));
}
//读取方法,读取是异步的，不能通过return来返回，必须通过回调函数来穿
exports.read=function(number,callback){
   fs.readFile("./data/"+number+".txt",function(err,data){
        if(err){
            callback(-1);
            return;
        }
        callback(JSON.parse(data));
   })
}