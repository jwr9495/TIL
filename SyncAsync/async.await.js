async function getInfo() {
  const user = await getUser(1);
  const repo = await getRepo(user.githubID);
  const commit = await getCommit(repo.commitID);
  console.log(commit);
}
//getInfo();

//IIFE
(async function getInfo() {
  try {
    const user = await getUser(1);
    const repo = await getRepo(user.githubID);
    const commit = await getCommit(repo.commitID);
    console.log(commit);
  } catch (error) {
    console.log(error);
  } finally {
    // disconnectDB
    console.log("disconnectDB ....");
  }
})();

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
