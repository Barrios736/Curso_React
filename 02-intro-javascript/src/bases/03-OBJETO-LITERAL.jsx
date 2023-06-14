const persona = {
nombre: 'tony',
apellido:'ramirez',
edad: 45,
direccion: {
    ciudad:'new york',
    zip:555555555555,
    lat:14.578455,
    lng:31.45474,

}

};

console.table(persona);
//la froma en la que se clonan los objetos en javascrip es utilizando ... ya que si reasignamos loq ure hacemos es que estamos solo copiando la referencia por tanto en la mutacion con react nos daria un problema 
const persona2={...persona};
persona2.nombre='peter';

console.log(persona);
console.log(persona2);

