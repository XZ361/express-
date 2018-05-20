exports.calc=function(number){
    var arr=[];
    for(var i=0;i<number;i++){
        if(number%i==0){
            arr.push(i);
        }
    }
    return arr;
}