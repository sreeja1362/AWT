function display()
{
var key = '83d70b12dcd6e0cd3aa5f92e70dc57e1';
var cityID=document.getElementById("cityName").value;
var unit='metric'
 
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityID+ '&appid=' + key+ '&units=' + unit)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {

    table= document.createElement("TABLE");
    table.border="1";
    row=table.insertRow(-1);
    cellH1=row.insertCell(-1);
    cellH2=row.insertCell(-1);
    cellH3=row.insertCell(-1);
    cellH4=row.insertCell(-1);
    cellH1.innerHTML="DATE";
    cellH2.innerHTML="MIN TEMP";
    cellH3.innerHTML="MAX TEMP";
    cellH4.innerHTML="HUMIDITY";


    data.list.forEach(day => {
      row1=table.insertRow(-1);
      cell1=row1.insertCell(-1)
      cell2=row1.insertCell(-1)
      cell3=row1.insertCell(-1)
      cell4=row1.insertCell(-1)
    cell1.innerHTML=day.dt_txt
    cell2.innerHTML=day.main.temp_min
    cell3.innerHTML=day.main.temp_max
    cell4.innerHTML=day.main.humidity
  })
  var divtab=document.getElementById("div");
    divtab.append(table);
    console.log(data);
})
.catch(function(err) {
  console.log(err);
});
}