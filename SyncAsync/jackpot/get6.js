const request = require("request");
//const http = require("http");

function getLottoData(drwNo) {
  const url = `http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`;

  return new Promise((resolve, reject) => {
    request.get(url, (err, res, body) => {
      const lottoData = JSON.parse(body);
      const realNumbers = [];
      let bnusNo = 0;
      for (const [key, value] of Object.entries(lottoData)) {
        if (key.includes("drwt")) realNumbers.push(value);
        else if (key === "bnusNo") bnusNo = value;
        realNumbers.sort((a, b) => a - b);
      }
      resolve({ bnusNo, realNumbers });
    });
  });
}
module.exports = getLottoData;
/*
const obj = {
  name: "song",
  gender: "male"
};
const arr = ["apple", "banana", "orange"];
for (const fruit of arr) {
  console.log(fruit);
}

console.log(Object.entries(obj));
*/
