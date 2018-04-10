const app = "I don't do much.";

const token = 'YOUR_TOKEN_HERE'
const api = 'https://api.github.com/user/repos'

fetch(api,{headers: {Authorization: `token ${token}`}})
  .then(res=>res.json())
  .then(json=>console.log(json))
