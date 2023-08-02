// Lista de contactos con datos predefinidos
const listaDeContactos = [
    "Juan Pérez",
    "María Rodríguez",
    "Carlos López"
  ];
  
  // Función para añadir un nuevo contacto a la lista
  function agregarContacto(nombreCompleto) {
    listaDeContactos.push(nombreCompleto);
    console.log("Contacto agregado: " + nombreCompleto);
  }
  
  // Función para borrar un contacto existente de la lista
  function borrarContacto(nombreCompleto) {
    const indice = listaDeContactos.indexOf(nombreCompleto);
    if (indice !== -1) {
      listaDeContactos.splice(indice, 1);
      console.log("Contacto borrado: " + nombreCompleto);
    } else {
      console.log("El contacto no existe en la lista.");
    }
  }
  
  // Función para imprimir en consola los contactos presentes en la lista
  function imprimirContactos() {
    console.log("Lista de contactos:");
    listaDeContactos.forEach(contacto => {
      console.log(contacto);
    });
  }
  
  // Agregar un nuevo contacto
  agregarContacto("Laura Gómez");
  
  // Imprimir la lista de contactos
  imprimirContactos();
  
  // Borrar un contacto
  borrarContacto("María Rodríguez");
  
  // Imprimir la lista de contactos actualizada
  imprimirContactos();
  