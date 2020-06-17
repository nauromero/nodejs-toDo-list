const fs = require("fs");

let toDoList = [];

const guardarEnDb = () => {
  let data = JSON.stringify(toDoList);
  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw new Error("No se pudo gardar en la DB", err);
  });
};

const cargarDb = () => {
  try {
    toDoList = require("../db/data.json");
  } catch (error) {
    toDoList = [];
  }
};

const crear = (descripcion) => {
  cargarDb();

  let toDo = {
    descripcion,
    completado: false,
  };

  toDoList.push(toDo);
  guardarEnDb();
  return toDo;
};

const getListado = () => {
  cargarDb();
  return toDoList;
};

const getTareasCompletas = () => {
  cargarDb();

  let listadoCompletas = toDoList.filter((tarea) => {
    return tarea.completado === true;
  });
  return listadoCompletas;
};

const actualizar = (descripcion, completado) => {
  cargarDb();
  let index = toDoList.findIndex((tarea) => tarea.descripcion === descripcion);

  if (index >= 0) {
    toDoList[index].completado = completado;
    guardarEnDb();
    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  cargarDb();
  let index = toDoList.findIndex((tarea) => tarea.descripcion === descripcion);

  if (index >= 0) {
    toDoList.splice(index, 1);
    guardarEnDb();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  guardarEnDb,
  getListado,
  actualizar,
  borrar,
  getTareasCompletas,
};
