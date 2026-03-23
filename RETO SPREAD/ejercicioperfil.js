let perfilBasico = {
    nombre : "Ana",
    apellido: "Gutierrez",
    email: "anagutierrez1234@gmail.com",
    ciudad: "Bucaramanga",
    pais: "Colombia"

};

let perfilExtendido = {
    email: "anagutierrez1234@gmail.com",
    telefono: "3128696845",
    ciudad : "Medellin",
    pais: "Colombia",
    ocupacion: "Abogada"
};

let perfilFinal = {
    ...perfilBasico,
    ...perfilExtendido
};

let  {nombre, ciudad} = perfilFinal;  //destructuración

console.log("perfilBasico:", perfilBasico);
console.log("perfilExtendido:", perfilExtendido);
console.log("perfilFinal:", perfilFinal);

console.log("Usuario: " + nombre + " " + perfilBasico.apellido + " — Ubicación: " + ciudad);
