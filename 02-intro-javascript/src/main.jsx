// funciones en js
 const saludar = function (nombre){
return `hola, ${nombre}`;


 }

 
console.log(saludar)
const saludar3 = (nombre)=> `hola, ${nombre}`;
const saludar4 = () => `hola mundo`;
//console.log (saludar2('vegeta'));
console.log (saludar3('vegeta'));
console.log (saludar4());



const getUser = () => ({
uid: 'ABC123',
username: 'El_papi1502',
});

const user = getUser();
console.log(user);


const getUsuarioActivo = (nombre) => ({
uid: 'ABC567',
username: nombre

});
const UsuarioActivo = getUsuarioActivo('Fernando');
console.log(UsuarioActivo);