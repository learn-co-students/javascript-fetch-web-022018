const app = "I don't do much.";


const token = 
fetch('https://api.github.com/nkalkstein/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
