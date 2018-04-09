const app = "I don't do much.";


const token = c6ecba581c152bde9ebf8d23a846c831181af7dc
fetch('https://api.github.com/nkalkstein/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
