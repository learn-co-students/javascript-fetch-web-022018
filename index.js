const app = "I don't do much.";

const token = '1b901ad4b1ebd7127bce6e2e21b48da3108a403d
'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
