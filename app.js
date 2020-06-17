// const argv = require("yargs").argv;

const argv = require("./config/yargs.js").argv;
const toDo = require("./toDo/toDo.js");
const colors = require("colors");
// console.log(argv);

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = toDo.crear(argv.descripcion);
    console.log("Tarea creada:", colors.green(tarea.descripcion));
    break;
  case "listar":
    let listado = toDo.getListado();
    for (let tarea of listado) {
      console.log("======== Por Hacer =======".green);
      console.log(tarea.descripcion);
      console.log("Completado: ", tarea.completado);
      console.log("==========================".green);
    }
    break;
  case "actualizar":
    let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case "borrar":
    let borrado = toDo.borrar(argv.descripcion);
    console.log("Tarea borrada:".red, argv.descripcion, borrado);
    break;
  case "completas":
    let tareasCompletas = toDo.getTareasCompletas();
    for (let tarea of tareasCompletas) {
      console.log("===============");
      console.log(tarea.descripcion);
      console.log("Completado: ", colors.green(tarea.completado));
    }
    break;
  default:
    console.log("Comando no reconocido".red);
}
