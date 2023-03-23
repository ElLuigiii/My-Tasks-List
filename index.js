
console.log('hola estoy andando bien')

class Tarea {
    constructor(titulo, tareas){
    this.titulo1 = titulo;
    this.newTask1 = tareas
    }
}

const misTareas = []

const title = document.getElementById('task_Title')
const task = document.getElementById('tasks')
const btnCreate = document.getElementById('task_Create')
const btnAdd = document.getElementById('more_Task')
const pizarra = document.getElementById('div_Tasks')
btnAdd.addEventListener('click', function(){
    console.log('va quedando')
})
let verArray = []
function imprimirTareas(arrayTareas) {
    verArray= arrayTareas.map(function(elemento){
        let resultado= {titulo: elemento.titulo1, tareas: elemento.newTask1}
        //console.table(verArray)
        return resultado
    })
    //console.table(myNewTasks)
    // for (let index = 0; index < myNewTasks.length; index++) {
    //      pizarra.innerHTML=`${myNewTasks[index].titulo1} y ${myNewTasks[index].newTask1}`
    // }
}



function crearListaTareas(var1, var2){
    let newTarea = new Tarea(var1, var2)
    //newTarea.push(misTareas)mar
    //console.log(misTareas)
    //console.log('antes')
    misTareas.push(newTarea)
    //console.log('mis tareas despues')
   //console.table(misTareas)
   console.log('abajo otras')
   console.table(newTarea)

}
let myNewTasks= []
btnCreate.addEventListener('click',function (){
    event.preventDefault()
    crearListaTareas(title.value, task.value)
    myNewTasks= misTareas.map(function(elem){
        let objFinal= { titulo: elem.titulo1, tareas: elem.newTask1}
        return objFinal
    })
    //imprimirTareas(misTareas)
    //console.table(myNewTasks)
   // document.getElementById('div_Tasks').innerHTML = myMap
})



