let blogArray = JSON.parse(localStorage.getItem('saveLastPost')) || []

  // Save related form data as an object
function saveLastPost(e){
e.preventDefault()
console.log(e)

console.log(blogArray)
const username = document.getElementById('username');
const title = document.getElementById('title');
const context = document.getElementById('context');

  if (!username.value || !title.value || !context.value) {
  return; 
  }

  const lastPost = {
    username:username.value,
    title:title.value,
    context:context.value,
  }
  blogArray.push(lastPost)
  console.log(lastPost)
   // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('saveLastPost', JSON.stringify(blogArray));
  location.href="./blog.html"
}


summit.addEventListener ("click", saveLastPost)