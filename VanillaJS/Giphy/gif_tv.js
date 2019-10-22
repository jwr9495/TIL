// contents를 찾아서 3초마다 돌아가면서 보여주면 됩니다.
// 힌트: setInterval
// 상위 화면에 영역의 그림이 3초마다 바뀌도록

// 0, 1, 2, 3 중 랜덤한 인덱스를 선택해서 찔러줍니다.
const contents = ["cat", "happy", "ah", "kim"];
const keyword = contents[Math.floor(Math.random() * contents.length)];

function searchTv(keyword) {
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open("GET", URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener("load", e => {
    const rawData = e.target.response;
    const parsedData = JSON.parse(rawData);
    pushToTvDOM(parsedData);
  });
}
const tvArea = document.querySelector("#js-tv-area");

function pushToTvDOM(parsedData) {
  tvArea.innerHTML = null;
  const dataSet = parsedData.data;
  let i = 0;

  setInterval(() => {
    const imgURL = dataSet[i].images.fixed_height.url;
    tvArea.innerHTML = `<img src ="${imgURL}" class="img-center"/>`;
    i++;
    if (i >= dataSet.length) i = 0;
  }, 3000); // 주어진 시간안에 반복실행
  //setTimeout()- 주어진 시간안에 한번실행
}
document.addEventListener("DOMContentLoaded", searchTv);
/* 부가설명 */
/*
function test() {
  return "a";
}
document.addEventListener("DOMContentLoaded", test); //test[ok] ()=>test(keyword)[no] 함수를 호출해야됨, 실행시킨 결과를 가져오는것이 아님을 유념.
*/
// 1. contents에 있는 검색어를 모두 찔러서 다 결과를 받아놓는다.
// 2. 받아놓은 애를 3초마다 변경해서 보여준다.
