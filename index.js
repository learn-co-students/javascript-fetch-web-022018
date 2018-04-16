const app = "I don't do much.";
const token = '6a34ff8643361d471501fe1c137200f96e9b47c7'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
