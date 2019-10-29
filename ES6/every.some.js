//ES5
const computers = [
  { name: "mac-air", ram: 8 },
  { name: "gram", ram: 4 },
  { name: "mac-pro", ram: 16 }
];

let everyComputerAvailable = true;
let someComputersAvailable = false;

for (var i = 0; i < computers.length; i++) {
  const computer = computers[i];

  if (computer.ram < 8) {
    everyComputerAvailable = false;
    break;
  }
  if (computer.ram > 8) {
    someComputersAvailable = true;
    break;
  }
}

//ES6
everyComputerAvailable = computers.every(computer => computer.ram > 8);
someComputersAvailable = computers.some(computer => computer.ram > 8);

//실제로는?
const data = [
  { name: "song", answer: "you pork" },
  { name: "bing", answer: "" },
  { name: "san", answer: "great!" }
];

everyComputerAvailable = data.every(e => e.answer.length > 0);
someComputerAvailable = data.some(e => e.answer.length > 0);

//실습1
const users = [
  { id: 1, submit: true },
  { id: 2, submit: false },
  { id: 3, submit: true },
  { id: 4, submit: true }
];

users.every(e => e.submit);
users.some(e => e.submit);

/*
for (var i = 0; i < users.length; i++) {
  const user = users[i];
}
//모든 사람이 제출했나요? every
//한명이라도 제출 했나요? some
let everyuseranswer = true;
let someuseranswer = false;

everyuseranswer = users.every(user => (user.submit = false));
someuseranswer = users.some(user => (user.submit = true));
*/
//실습2
function some(arr, callback) {
  //every를 사용해서 some을 만들어주세요!
  //실습 1번으로 맞게 구현했는지 확인해 주세요!
  //every : 모든 사람이 제출 했을 때 : true
  //      : 한명이라도 제출하지 않았을 때 : false
  //      : 모든 사람이 제출하지 않았을 때 : false
  //every(e=>!callback(e)): false, false, true
  //!every(e=>!callback(e)): true, true, false;
  //모든사람이 제츨하지 않았나요?
  //some  : 모든 제출 : true
  //      : 한명이라도 제출 : true
  //      : 모든 사람이 제출하지 않음 : false
  return !arr.every(e => !callback(e));
}
some(users, e => e.submit);
