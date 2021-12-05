export class Todo{

    static fromJson({id,tarea,completado,creado,finishDate}){
        const tempTodo = new Todo(tarea,finishDate);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;
        tempTodo.finishDate = finishDate;
        return tempTodo;
    }

    constructor (tarea,finishDate){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
        this.finishDate = finishDate;
    }
}