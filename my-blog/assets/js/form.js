// // Access toggle switch HTML element
// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("sun");
// }


// if (localStorage.getItem('saveLastPost')==null){}
//   for(let i=0; i<saveLastPost.length; i++){}
  // Save related form data as an object
function saveLastPost(e){
e.preventDefault()
console.log(e)
let blogarray= JSON.parse(localStorage.getItem('saveLastPost')) || []
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
  blogarray.push(lastPost)
  console.log(lastPost)
   // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('saveLastPost', JSON.stringify(blogarray));
  location.href="./blog.js"
}


summit.addEventListener ("click", saveLastPost)