let number = JSON.parse(localStorage.getItem('saveLastPost'))
console.log(number)


function showPrevious() {
    const divTag=document.createElement("div")
    divTag.setAttribute("class", "card")

    const headTag=document.createElement("div")
    headTag.setAttribute("class", "card-body")

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

divTag.setAttribute