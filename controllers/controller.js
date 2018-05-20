var math=require("../models/math.js");
var file=require("../models/file.js");

exports.showIndex=function(req,res){
    res.render("index",{

    })
}
exports.showRes=function(req,res){
    var number=req.params.number;
    //记录时间T1
    var T1=new Date();
    //包工头命令文件读取数据,这是一个异步函数
    file.read(number,function(result){
        if(result==-1){
            //命令小兵计算，这是一个同步函数
            var result=math.calc(number);
            file.save(number,result);
        }
        //时间T2
    var T2=new Date();

        res.render("result",{
            "number":number,
            "result":result,
            "during":T2-T1
        })
    });

    
   
}