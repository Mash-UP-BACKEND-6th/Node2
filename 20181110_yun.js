
const fetch = require('node-fetch');
const { parseString } = require('xml2js');

let busStopNumbers = [];
let busStopName= '홍대입구역';
busStopName = encodeURI(busStopName);

const busStopKey = 'ZToJL71tb0BfKZ6CzMa%2FYCbxw5sVQQks%2F%2BEhWi0%2B29s7PdXcQGYxJGChT%2FRysDxAZWmhSQRT3D6WT90GqkwJJA%3D%3D';
const busStopNumberUri = `http://ws.bus.go.kr/api/rest/stationinfo/getStationByName?ServiceKey=${busStopKey}&stSrch=${busStopName}`;
fetch(busStopNumberUri)
    .then(res => res.text()) // XML
    .then(xml => parseString(xml, (err, result) => {
      if(err){
        console.log(err);
        return;
      }
      result.ServiceResult.msgBody[0].itemList.forEach(element => {
        // console.log(element.arsId)
        busStopNumbers.push(element.arsId);
        
      });
    }))
    .then(json => {
      const busTime = (busStopNumbers).map((element) => {
      const time = `http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid?ServiceKey=${busStopKey}&arsId=${element}`;
      fetch(time)
        .then()
      })
    })
    .catch(err => console.log(err));




// const soyeon = {
//   age: 25
//   gender: 'female',
// }

// console.log(soyeon.age);

// const { age } = soyeon;


// .then(res => res.text())
// .then(function(res){
//   return res.text();
// })