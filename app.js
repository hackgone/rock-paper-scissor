const express = require("express");
const app = express();

app.get("/game/start",function (req,res) {
  let a=new Array(4);
  for(var i=0;i<a.length;i++){
    a[i]=new Array(4);
  };
  for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
      a[i][j]=0;
    }
  }
  for(var f=0;f<50;f++){
    let p=[];

    var val=['r','p','s'];
    for(var limit=0;limit<4;limit++){
      p[limit]=val[Math.floor(Math.random()*3)];
    }
    //for(var i=0;i<4;i++){
      //console.log(p[i]);
    //}

    for(var i=0;i<4;i++){
      for(var j=0;j<4;j++){
        if(i===j){
          a[i][j]=0;
        }
        else if (p[i]==='r') {
          if (p[j]==='p') {
            if(a[i][j]<=0){
              a[i][j]=0;
            }else {
              a[i][j]-=1;
            }
          }
          else{
            a[i][j]+=1;
          }
        }
        else if (p[i]==='p') {
          if (p[j]==='s') {
            if(a[i][j]<=0){
              a[i][j]=0;
            }else {
              a[i][j]-=1;
            }
          }
          else {
            a[i][j]+=1;
          }
        }
        else if (p[i]==='s') {
          if(p[j]==='r'){
            if(a[i][j]<=0){
              a[i][j]=0;
            }else {
              a[i][j]-=1;
            }
          }
          else {
            a[i][j]+=1;
          }
        }
      }
    }
    for(var i=0;i<4;i++){
      for(var j=0;j<4;j++){
        console.log(a[i][j]);
      }
      console.log('\n');
    }
  }

});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
