//Seleção de elemntos
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const editForm = document.querySelector("#editForm");
const editInput = document.querySelector("#editInput");
const cancelEditBTN = document.querySelector("#cancelEditBTN");

let oldInputValue;

//Funções
const saveTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);


/* Criando Botões */

const doneBTN = document.createElement("button");
doneBTN.classList.add("finishTodo");
doneBTN.innerHTML = "<i class='fa-solid fa-check'></i>";
todo.appendChild(doneBTN)

const editBTN = document.createElement("button");
editBTN.classList.add("editTodo");
editBTN.innerHTML = "<i class='fa-solid fa-pen'></i>";
todo.appendChild(editBTN)

const removeBTN = document.createElement("button");
removeBTN.classList.add("removeTodo");
removeBTN.innerHTML = "<i class='fa-solid fa-xmark'></i>";
todo.appendChild(removeBTN)

todoList.appendChild(todo)
todoInput.value=''
todoInput.focus();

};

//editar todo
const toggleForms = ()=>{
  editForm.classList.toggle('hide')
  todoForm.classList.toggle('hide')
  todoList.classList.toggle('hide')
}

// função que salva a edição

const updateTodo =(text) =>{
  const todos = document.querySelectorAll('.todo')
   todos.forEach((todo) =>{
    let todoTitle = todo.querySelector('h3')
    if(todoTitle.innerText === oldInputValue){
      todoTitle.innerText = text;
    }
   })
}

//Eventos

//01 - Adiconar Tarefa
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log("Enviou o from")
  const inputValue = todoInput.value;

  if (inputValue) {
    //console.log(inputValue)
    saveTodo(inputValue);
  }
});

//04 - Atribuindo funções aos botões
document.addEventListener('click',(e) =>{
  const targetEl = e.target
  const parentEl = targetEl.closest('div')

  if(targetEl.classList.contains('finishTodo')){
    //console.log('clicou para finalizar')
    parentEl.classList.add('done')
  }
  if(targetEl.classList.contains('removeTodo')){
    parentEl.remove();
  }

  //editar tarefa
  let todoTitle;
  if(parentEl && parentEl.querySelector('h3')){
    todoTitle = parentEl.querySelector('h3').innerText
  }

  if(targetEl.classList.contains('editTodo')){
    toggleForms();
    editInput.value = todoTitle
    oldInputValue = todoTitle
  }
  
})

//cancelar edição
cancelEditBTN.addEventListener('click', (e) =>{
  e.preventDefault();
  toggleForms();
})

//salvar edição

editForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  const editInputValue = editInput.value

  if(editInputValue){
    updateTodo(editInputValue)
  }

  toggleForms();
  
})