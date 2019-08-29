console.log('appjson.js')
//,y_name,tag_name,aws
parseData = function(awsBit){
  var aws_pos = Object.values(d).filter(x=> x.aws==awsBit)
  x = [];
  y=[];
  text = [];
  
  aws_pos.forEach(element => {
    x.push(element.x)  
    y.push(element.y)
    text.push(element.name)
  });

  var aws = {
   x:x,
   y:y,
   mode:'markers',
   type:'scatter',
   text:text
  }
  
  return aws
}

getVisual = function(x_name,y_name){
  /*
  return a dataframe from data with the above headers with both aws +1 and 0
  */
  aws1 = parseData(1)
  aws0 = parseData(0)
  var data = [aws0,aws1]
  console.log(data)
  Plotly.newPlot('plotlyDiv',data)
  
 

}

fetch('data.json').then(response => {
  return response.json();
}).then(data => {
  d = JSON.parse(data)
  getVisual('x','y')
  
}).catch(err =>{
   console.log('Houston we go a problem')
})