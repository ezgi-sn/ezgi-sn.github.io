const insertAction=document.querySelector('.insert');
const list=document.querySelector('.itemz');
const search=document.querySelector('.search input');

//insert new element to html page function
const templateGenerator= (newAction) =>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="text-content">${newAction}</span>
        <i class="fas fa-trash"></i>
    </li>
    `;
    list.innerHTML+=html;   
}

//add action listener to the inserter 
insertAction.addEventListener('submit', e=>{
    e.preventDefault();
    const newAction=insertAction.insert.value;

    if(newAction.length){
    templateGenerator(newAction);
    insertAction.reset();
    }
})

//when clicked the check button, remove parent element from the html page
list.addEventListener('click', e=>{
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.remove();
    }
})
//search functions
console.log(list.children[1]);
const checkAction=(Action)=>{
    Action=Action.toLowerCase();
    for(i=0; i<list.children.length;i++){
        if(!list.children[i].innerText.toLowerCase().includes(Action)){ 
            list.children[i].classList.add('hide');
        }
        else{
            list.children[i].classList.remove('hide');
        }
    }
} 

search.addEventListener('keyup',()=>{
    const temp=search.value;
    checkAction(temp);
})
