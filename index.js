const app = "I don't do much.";

const token = '9a6939ff85afad0fcb4008734a85d67161d28d31'
fetch('https://api.github.com/s-kinch/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
