let number = JSON.parse(localStorage.getItem('saveLastPost'))
console.log(number)

function showPrevious() {
    const headTag=document.createElement("div")
    headTag.setAttribute("class", "card-body")
    
    const divTag=document.createElement("div")
    divTag.setAttribute("class", "card")

    const usernamePTag=document.createElement("h5")
    usernamePTag.textContent = number.username
    headTag.append(usernamePTag)

    const titlePTag=document.createElement("h4")
    titlePTag.textContent = number.title
    headTag.append(titlePTag)
    
    const contextPTag=document.createElement("h3")
    contextPTag.textContent = number.context
    headTag.append(contextPTag)
    document.body.append(divTag)
    divTag.append(headTag)
}
showPrevious()

if (localStorage.getItem('saveLastPost')==null){
for(let i=0; i<saveLastPost.length; i++){


 }}


// divTag.setAttribute