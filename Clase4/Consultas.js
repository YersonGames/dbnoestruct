/*Buscar un valor*/

{especie:"Perro"}
db.mascotas.find({especie:"Perro"}) //Consultar datos de la mascota pr especie
db.mascotas.find({"dueño.nombre":"Brayan"}) //Consultar datos de la mascota por nombre del dueño
db.mascotas.find({"dueño.direccion.calle":"9 de julio"}) //Buscar un vlor especifico de un documento dentro de otro subdocumento


/*Consulta para cambiarnos o crear de Base de datos*/
//use NombreDB

//cls > limpiar consola