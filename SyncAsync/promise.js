const promise = new Promise((resolve, reject) => {
  // Async work...
  resolve("success");
  reject("fail");
});

//promise.then(result => console.log(result)).catch(error => console.log(error));

// const getAccount = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = Math.floor(Math.random() * 100);
//     if (number % 2 === 1) resolve({ account: 1, balance: 1000 });
//     else reject(new Error("can not accessed account"));
//   }, 2000);
// });

//getAccount.then(result => console.log(result)).catch(err => console.error(err));

function getUser(id) {
  console.log("find user ....");
  const users = [{ id: 1, githubID: "bing" }, { id: 2, githubID: "kim" }];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id === id);
      if (user) resolve(user);
      else reject(new Error("can not find user"));
    }, 2000);
  });
}

function getRepo(githubID) {
  console.log("find Github repo ....");
  const repos = [
    { githubID: "bing", commitID: 1 },
    { githubID: "kim", commitID: 2 }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const repo = repos.find(repo => repo.githubID === githubID);
      if (repo) resolve(repo);
      else reject(new Error("can not find repo"));
    }, 2000);
  });
}
function getCommit(commitID) {
  console.log("find commit ....");
  const commits = [
    { commitID: 1, contents: "first commit" },
    { commitID: 2, contents: "second commit" }
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const commit = commits.find(commit => commit.commitID === commitID);
      if (commit) resolve(commit);
      else reject(new Error("can not find commit"));
    }, 2000);
  });
}
const test = getUser(1)
  .then(user => getRepo(user.githubID))
  .then(repo => getCommit(repo.commitID))
  .then(commit => console.log(commit))
  .catch(err => console.log(err));

console.log(test);
