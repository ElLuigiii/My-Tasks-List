console.log('hola estoy andando bien')
//import Scrollbar from 'smooth-scrollbar';

class Tarea {
    constructor(titulo, tareas){
    this.titulo1 = titulo;
    this.newTask1 = tareas
    this._taskList = []
    }
    get taskList(){
        return this._taskList
    }
    agregarTarea(nueva_tarea){
        this._taskList.push(nueva_tarea)
    }
}
//how to make the div have scrollbar only if has too many elements?

const title = document.getElementById('task_Title')
const task = document.getElementById('tasks')
const btnCreate = document.getElementById('task_Create')
const btnAdd = document.getElementById('more_Task')
const pizarra = document.getElementById('div_Tasks')
//Scrollbar.init(document.querySelector('.my-scrollbar'))

let listaTemporal = []
btnAdd.addEventListener('click', function(){
    event.preventDefault()
    let variable = task.value
    if (!task.value  || task.value == ''){
        alert('debe agregar una tarea')
    } else {
        listaTemporal.push(variable)
    }
    task.value=''
})

let verArray = []
function imprimirTareas(variable){
    let hola = misTareas.map((elementox) => {
        pizarra.innerHTML+=`<div class= "tareas"> <h2>${elementox.titulo1}</h2> <ul> <li>${elementox.newTask1}</li>
        <li>${elementox._taskList}</li> </ul>`
    })

}

const misTareas = []
function crearListaTareas(var1, var2){
    let newTarea = new Tarea(var1, var2)
    if(var1.length > 0 && var1.value != '' && var2.length > 0 && var2.value != '' && listaTemporal.length === 0 ) {
        misTareas.push(newTarea)
    }else if (var1.length > 0 && var1.value != '' && listaTemporal.length > 0) {
        listaTemporal.forEach((eleme =>{
                     newTarea._taskList.push(eleme)
                 }))
                 misTareas.push(newTarea)
    }else if ( !var1 || var1.value == '') {
        alert('Debe ingresar el titulo')
    } else if (!var2 || var2.value == '' && listaTemporal.length == 0) {
        alert('debe ingresar tarea')
    }
    imprimirTareas(newTarea)

    //misTareas.push(newTarea)
}

btnCreate.addEventListener('click',function (){
    event.preventDefault()
    crearListaTareas(title.value, task.value)
    //imprimirTareas()
    let dataStorage = JSON.parse(localStorage.getItem('misTasks'))
    if( dataStorage == null){
        localStorage.setItem('misTasks', JSON.stringify(misTareas))
    }else{
        let newDataStorage = misTareas.concat(dataStorage)
        localStorage.setItem('misTasks', JSON.stringify(newDataStorage))
    }
    misTareas.length = 0
    listaTemporal.length = 0
    title.value= ''
    task.value=''
})

let lsd = JSON.parse(localStorage.getItem('misTasks'))
function intentandoImprimir(){
    if(lsd != null){
        console.log('deberia imprimirse algo en tareas')
        lsd.forEach((eleme =>{
            let templateTasks = `<div class= "tareas"> <h2>${eleme.title}</h2> <p>${eleme._taskList}</p>
            <p>${eleme._taskList}`
            pizarra.innerHTML+=`<div class= "tareas"> <h2>${eleme.titulo1}</h2> <ul> <li>${eleme.newTask1}</li>
            <li>${eleme._taskList}</li> </ul>`
        }))
    }else{
        console.log('no hay niguna tarea en el local storage')
    }
    //how to make the div have scrollbar only if this has to many elements?

}
intentandoImprimir()

////debo setear la lista de mis tareas en cuanto se envian hacia el local storage

