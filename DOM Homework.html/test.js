let button =document.getElementById("btn");
let content=document.getElementById("content");
// content.innerText="Lets do it" 

button.addEventListener("click",()=>{
    if(content.innerText == "Hello"){
        content.innerText="Goodbye"
    } else {
        content.innerText="Hello"

    }
    
    
})

document.getElementById('remove').addEventListener('click',() => {
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = '';
})

let id = 0;


document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute('id',id++);
    parent.appendChild(newElement);
    document.getElementById('new-text').value = '';
  });
  