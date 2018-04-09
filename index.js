const app = "I don't do much.";
const token = '33ae6df63c4eaf16281426b1491c444300194d8a'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
