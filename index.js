// Lista de contactos con datos predefinidos como objetos
const listaDeContactos = [
    {
      id: 1,
      nombres: "Juan",
      apellidos: "Pérez",
      telefono: "123456789",
      ubicaciones: {
        ciudad: "Ciudad A",
        direccion: "Calle 123"
      }
    },
    {
      id: 2,
      nombres: "María",
      apellidos: "Rodríguez",
      telefono: "987654321",
      ubicaciones: {
        ciudad: "Ciudad B",
        direccion: "Avenida XYZ"
      }
    }
  ];
  
  // Función para añadir un nuevo contacto a la lista
  function agregarContacto(contacto) {
    listaDeContactos.push(contacto);
    console.log("Contacto agregado:", contacto);
  }
  
  // Función para borrar un contacto existente de la lista por su ID
  function borrarContactoPorId(id) {
    const indice = listaDeContactos.findIndex(contacto => contacto.id === id);
    if (indice !== -1) {
      const contactoBorrado = listaDeContactos.splice(indice, 1)[0];
      console.log("Contacto borrado:", contactoBorrado);
    } else {
      console.log("El contacto con ID", id, "no existe en la lista.");
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
  const nuevoContacto = {
    id: 3,
    nombres: "Laura",
    apellidos: "Gómez",
    telefono: "555555555",
    ubicaciones: {
      ciudad: "Ciudad C",
      direccion: "Calle Principal"
    }
  };
  agregarContacto(nuevoContacto);
  
  // Imprimir la lista de contactos
  imprimirContactos();
  
  // Borrar un contacto por su ID
  borrarContactoPorId(2);
  
  // Imprimir la lista de contactos actualizada
  imprimirContactos();
  