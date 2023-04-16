console.log('hola estoy andando bien')

class Tarea {
    constructor(titulo, tareas){
    this.titulo1 = titulo;
    this.tareas = tareas
    this._taskList = []
    }
    get taskList(){
        return this._taskList
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
    task.value=''
})

let verArray = []
function imprimirTareas(variable) {
    let hola = misTareas.map((elementox) => {
        let taskListItems = elementox._taskList.map((task) => {
            if (task.trim() !== '') {
                return `<li>${task}</li>`;
            } else {
                return '';
            }
        }).join('');

        // Comprobar si hay tareas o elementos en la lista de tareas antes de imprimir
        if (elementox.tareas !== '' || taskListItems !== '') {
            let html = `<div class="tareas"> <h2>${elementox.titulo1}</h2>`;

            if (elementox.tareas !== '') {
                html += `<ul> <li>${elementox.tareas}</li></ul>`;
            }

            if (taskListItems !== '') {
                html += `<ul>${taskListItems}</ul>`;
            }

            // Agregar botón "Agregar Tareas"
            html += `<button class="btn-agregar" data-titulo="${elementox.titulo1}">Agregar Tareas</button>`;
            html += `</div>`;
            pizarra.innerHTML += html;
        }
    });


const btnAdd = document.getElementById('task_Add'); // Obtener referencia al botón "Agregar Tarea"
btnAdd.addEventListener('click', function() {
    event.preventDefault();

    let task = document.getElementById('tasks').value; // Obtener el valor de la nueva tarea

    if (!task || task == '') {
        alert('Debe agregar una tarea');
    } else {
        let tareaActual = misTareas[misTareas.length - 1]; // Obtener la última tarea creada

        if (tareaActual) {
            tareaActual._taskList.push(task); // Agregar la nueva tarea a la lista de tareas de la última tarea creada
            imprimirTareas(tareaActual); // Actualizar la vista con la nueva tarea agregada
        }
    }

    document.getElementById('tasks').value = ''; // Limpiar el campo de entrada de tarea
});

    // Agregar evento de clic al botón "Agregar Tareas"
    let btnsAgregar = document.getElementsByClassName('btn-agregar');
    for (let i = 0; i < btnsAgregar.length; i++) {
        btnsAgregar[i].addEventListener('click', function() {
            let titulo = this.getAttribute('data-titulo');
            let tarea = prompt(`Ingrese una nueva tarea para "${titulo}"`);
            if (tarea && tarea !== '') {
                let tareaExistente = misTareas.find(t => t.titulo1 === titulo);
                tareaExistente._taskList.push(tarea);
                imprimirTareas();
            }
        });
    }
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
function intentandoImprimir() {
    let misTareas = JSON.parse(localStorage.getItem('misTasks'));
    if (misTareas != null) {
        misTareas.forEach((tarea) => {
            let tareaHTML = document.createElement('div');
            tareaHTML.classList.add('tareas');
            let taskListItems = tarea._taskList.map((t) => `<li>${t}</li>`).join('');
            tareaHTML.innerHTML = `
                <h2>${tarea.titulo1}</h2>
                <ul>
                    ${tarea.tareas ? `<li>${tarea.tareas}</li>` : ''}
                    ${taskListItems}
                </ul>
                <button class="btn-agregar" data-titulo="${tarea.titulo1}">Agregar Tareas</button>
            `;
            pizarra.appendChild(tareaHTML);
        });
    } else {
        console.log('No hay ninguna tarea en el local storage');
    }
}
intentandoImprimir()

////debo setear la lista de mis tareas en cuanto se envian hacia el local storage

