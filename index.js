const app = "I don't do much.";
const token = "09fc3087d56157a4643a672a7021a5064585d20a"

fetch('https://api.github.com/user/repos', {headers: { Authorization: `token ${token}`}})
  .then(res=> res.json())
  .then(json=> console.log(json))
