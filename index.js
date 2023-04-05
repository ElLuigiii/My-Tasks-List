console.log('hola estoy andando bien')

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

const title = document.getElementById('task_Title')
const task = document.getElementById('tasks')
const btnCreate = document.getElementById('task_Create')
const btnAdd = document.getElementById('more_Task')
const pizarra = document.getElementById('div_Tasks')

let listaTemporal = []
btnAdd.addEventListener('click', function(){
    event.preventDefault()
    let variable = task.value
    if (!task.value  || task.value == ''){
        alert('debe agregar una tarea')
    } else {
        listaTemporal.push(variable)
    }
})

let verArray = []
function imprimirTareas(arrayTareas){
    verArray = arrayTareas.map(elemento1=>{
        resultadoFinal = {titulo: elemento1.titulo, tareas: elemento1.tareas}
        return verArray.push(resultadoFinal)
    })
}

const misTareas = []
function crearListaTareas(var1, var2){
    let newTarea = new Tarea(var1, var2)
/*
SI var1 NO ES 0, Y VARIABLE2 NO ES 0 CREAMOS LA TAREA(HACEMOS newTArea._tasklList.push(element) - con FOREACH)
SI VARIABLE1.LENGTH ES MAYOR QUE 0 Y EN listaTemporal.length ES MAYOR QUE 0 CREAMOS LA TAREA
SI VARIABLE1 ES MAYOR QUE 0 Y VARIABLE2 ES MAYOR UE 0 CREAMOS LA TAREA
SI var1 y var2 stán vacios no hacemos nada
*/
    if(var1.length > 0 && var1.value != '' && var2.length > 0 && var2.value != '' && listaTemporal.length === 0 ) {
        misTareas.push(newTarea)
    }else if (var1.length > 0 && var1.value != '' && listaTemporal.length > 0) {
        listaTemporal.forEach((eleme =>{
                     console.log(eleme)
                     newTarea._taskList.push(eleme)
                 }))
                 misTareas.push(newTarea)
    }else if ( !var1 || var1.value == '') {
        alert('Debe ingresar el titulo')
    } else if (!var2 || var2.value == '' && listaTemporal.length == 0) {
        alert('debe ingresar tarea')
    }
    misTareas.push(newTarea)
}
/*VOY A PONER LO UE ESTA EN EL local storage EN UNA VARIABLE x
 TENGO UE JUNTAR LO DE MIS TAREAS CON LA VARIABLE X EN OTRA VARIABLE y
 LA VARIABLE y LA VOY A USAR PARA SETEAR mistaks EN EL local storage
*/
function setLocalStorage(nuevasTareas){
    let dataStorage = JSON.parse(localStorage.getItem("misTasks"))
    // if (dataStorage.length == null){
    //     localStorage.setItem('misTasks', JSON.stringify(nuevasTareas))
    // }else if ( dataStorage.length >= 1){
    //     let newDataStorage = nuevasTareas.concat(dataStorage)
    //     localStorage.setItem('misTasks', JSON.stringify(newDataStorage))
    // }
    // console.log(dataStorage)
    // localStorage.setItem('misTasks', JSON.stringify(dataStorage))
    
}

function borrarLocalStorage(){
    localStorage.removeItem('misTasks')
}


btnCreate.addEventListener('click',function (){
    event.preventDefault()
    crearListaTareas(title.value, task.value)
    //función que recorre el arreglo de misTareas e imprime los valores correctos
    let myNewTasks= []
    myNewTasks= misTareas.map(function(elem){
        let objFinal= { titulo: elem.titulo1, tareas: elem.newTask1}
        return objFinal
    })
    imprimirTareas(myNewTasks)
    setLocalStorage(misTareas)
    console.log(misTareas.taskList)
})

