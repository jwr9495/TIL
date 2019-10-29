console.log("code start!");
const user = getUser(1);
/*  wish this form.. 
const user = getUser(1);
const repo = getRepo(user);
const commit = getCommits(repo);
console.log(commit);
    but ... callback form is that */

// user를 찾아서, repo를 찾아서, commit을 찾고 싶어!
const UserCallback = getUserCallback(1, user => {
  console.log("find user ....");
  getRepo(user.githubID, repo => {
    console.log("find repo ....");
    getCommits(repo.commitID, commit => {
      console.log("find commit ....");
      console.log(commit);
    });
    //    console.log(repo);
  });
});
console.log(user);
console.log("code end!");
const users = [{ id: 1, githubID: "bing" }, { id: 2, githubID: "kim" }];

function getUser(id) {
  //DB connection find userID
  let user;
  setTimeout(() => {
    user = users.find(user => user.id === id);
  }, 2000);
  return user;
}

function getUserCallback(id, callback) {
  setTimeout(() => {
    const user = users.find(user => user.id === id);
    callback(user);
  }, 2000);
}
function getRepo(githubID, callback) {
  const repos = [
    { githubID: "bing", commitID: 1 },
    { githubID: "kim", commitID: 2 }
  ];
  setTimeout(() => {
    const repo = repos.find(repo => repo.githubID === githubID);
    callback(repo);
  }, 2000);
}

function getCommits(commitID, callback) {
  const commits = [
    { commitID: 1, contents: "hi" },
    { commitID: 2, contents: "hi" }
  ];
  setTimeout(() => {
    const commit = commits.find(commit => commit.commitID === commitID);
    callback(commit);
  }, 2000);
}
