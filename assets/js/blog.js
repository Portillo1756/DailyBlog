let number = JSON.parse(localStorage.getItem('saveLastPost'))
console.log(number)

function showPrevious() {
    if (number!=null){

        for(let i=0; i<number.length; i++){
             const headTag=document.createElement("div")
            headTag.setAttribute("class", "card-body")
            
            const divTag=document.createElement("div")
            divTag.setAttribute("class", "card")

            const usernamePTag=document.createElement("h5")
            usernamePTag.textContent = number[i].username
            headTag.append(usernamePTag)

            const titlePTag=document.createElement("h4")
            titlePTag.textContent = number[i].title
            headTag.append(titlePTag)
            
            const contextPTag=document.createElement("h3")
            contextPTag.textContent = number[i].context
            headTag.append(contextPTag)
            document.body.append(divTag)
            divTag.append(headTag)
}
        }}
         
   
showPrevious()