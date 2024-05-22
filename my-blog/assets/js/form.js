// Access toggle switch HTML element

const sun = document.getElementById('sun')
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const summit = document.querySelector('#summit')

let mode = 'dark';

// Listen for a click event on toggle switch
// themeSwitcher.addEventListener('click', function () {
//   // If mode is dark, apply light background
//   if (mode === 'dark') {
//     mode = 'light';
//     container.setAttribute('class', 'light');
//   }
//   // If mode is light, apply dark background
//   else {
//     mode = 'dark';
//     container.setAttribute('class', 'dark');
//   }
// });

// // created a function to have the screen light and the 'sun icon' showing 
// IF (mode === "light") {
//   then display the SUN icon
// } 

// // created a function to have the screen dark and the 'moon icon' showing
// if (mode == "dark") {
//   then display the MOON icon 
// }

const username = document.querySelector('#email');
const title = document.querySelector('#title');
const context = document.querySelector('#context');

  // Save related form data as an object
function saveLastPost(){
if (!username || !title || !context) {
return; 
}
  const lastPost = {
    username:username.value,
    title:title.value,
    context:context.value,
  }
  console.log(lastPost)
   // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('saveLastPost', JSON.stringify(lastPost));
  location.href="./blog.html"
}

summit.addEventListener ("click", saveLastPost )