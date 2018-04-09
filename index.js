const app = "I don't do much.";

const token = "c5e09c8124395a4e1d1fb7b782cf43d3e6be83ae";

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
