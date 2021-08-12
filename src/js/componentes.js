import { Todo } from "../classes";
import { todoList } from "../index";

//referencia HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => { 
	   const htmlTodo = `
	   <li class="${(todo.completado)?'completed': ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type=" ${ (todo.completado)?'checked': ''}" checked>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
		</li>
		`;
	
    const div = document.createElement('div');
	div.innerHTML = htmlTodo;    
	divTodoList.append(div.firstElementChild);
    
	return div.firstElementChild;
}

//eventos
txtInput.addEventListener('keyup', (evento) => {
	if (evento.keyCode === 13 && txtInput.value.length > 0){
		const nuevoTodo = new Todo(txtInput.value);  
		todoList.nuevoTodo(nuevoTodo);
    	
		crearTodoHtml(nuevoTodo);    
		txtInput.value = '';
		todoList.countPendientes();
	}
})

divTodoList.addEventListener('click', (evento) => {
	//obtiene un input, button o label
	const nombreElemento = evento.target.localName;
	const todoElemento = evento.target.parentElement.parentElement;
	const todoId = todoElemento.getAttribute('data-id');

	if (nombreElemento.includes('input')){
	    todoList.marcarCompletado(todoId);
		todoElemento.classList.toggle('completed');
		todoList.countPendientes();
	}else if (nombreElemento.includes('button')){
		todoList.eliminarTodo(todoId);
		divTodoList.removeChild(todoElemento);
	}
})

btnBorrar.addEventListener('click', ()=>{

			for (let i=divTodoList.children.length-1;i>=0; i--){
		
		const e= divTodoList.children[i];
		if(e.classList.contains('completed')){
			divTodoList.removeChild(e);     
		}
	}
});

	ulFiltros.addEventListener('click', (evento)=>{

	
	const filtro = evento.target.text;
	if(!filtro){return;}

	anchorFiltros.forEach(elem=>elem.classList.remove('selected'));
	evento.target.classList.add('selected')

	for(const elemento of divTodoList.children){
		elemento.classList.remove('hidden')
		const completado=elemento.classList.contains('completed');
		
		switch(filtro){
			case 'Pendientes':
				if(completado){
					elemento.classList.add('hidden')
				}
				break;
				case 'Completados':
					if(!completado){
						elemento.classList.add('hidden')
					}
				break
		}
	}
});

//destroyButton.addEventListener('click', ()=>{console.log('ya casii')})