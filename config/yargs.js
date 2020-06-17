const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripcion de la tarea por hacer",
};

const completado = {
  default: true,
  alias: "a",
};

const argv = require("yargs")
  .command("crear", "Crea tarea nueva", { descripcion })
  .command("listar", "Listar las tareas por hacer")
  .command("actualizar", "Actualiza estado de tarea", {
    descripcion,
    completado,
  })
  .command("borrar", "borrar tarea", { descripcion })
  .command("completas", "Muestra las tareas completas")
  .help().argv;

module.exports = {
  argv,
};
