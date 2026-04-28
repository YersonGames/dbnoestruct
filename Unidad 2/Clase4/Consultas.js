/*Buscar un valor*/

{especie:"Perro"}
db.mascotas.find({especie:"Perro"}) //Consultar datos de la mascota por especie

db.mascotas.find(
    {especie:"Perro"},
    {nombre:1,raza:1,_id:0}
    )


//Consultar datos de la mascota por nombre del dueño
db.mascotas.find(
    {"dueño.nombre":"Brayan"},
    {nombre:1,especie:1,_id:0}
    ) 


//Buscar un valor especifico de un documento dentro de otro subdocumento
db.mascotas.find({"dueño.direccion.calle":"9 de julio"})

db.mascotas.find(
    {"dueño.direccion.calle":"9 de julio"},
    {nombre:1,especie:1,_id:0}
    )


/*Consulta para cambiarnos o crear de Base de datos*/
//use NombreDB

//cls > limpiar consola

// Operaciones CRUD > CREATE(insert) READ(find) UPDATE DELETE
//One - Many

//INSERT
db.mascotas.insertOne(

    {
        "nombre": "Caty",
        "especie": "Conejo",
        "raza": "Blanca",
        "edad": "1 años",
        "sexo": "H",
        "peso": "1.2 kilos",
        "dueño": {
            "nombre": "Valentina",
            "contacto": "+56973640192",
            "direccion": {
                "calle": "San Bernardo",
                "numero": 5322
            }
        }   
    }

)

db.mascotas.insertMany(
    [
        {
            "nombre": "Guppy",
            "especie": "Gato",
            "raza": "Bobtail",
            "edad": "3 años",
            "sexo": "M",
            "peso": "3 kilos",
            "dueño": {
                "nombre": "Isaac",
                "contacto": "+569738919345",
                "direccion": {
                    "calle": "Los notros",
                    "numero": 894
                }
            }
        },
        {
            "nombre": "Cricket",
            "especie": "Perro",
            "raza": "Akita",
            "edad": "1 año",
            "sexo": "H",
            "peso": "4 kilos",
            "dueño": {
                "nombre": "Jamilton",
                "contacto": "+56989427165",
                "direccion": {
                    "calle": "San Lucas",
                    "numero": 1520
                }
            }
        }
    ]

)

//UPDATE

//Actualiza el primero que encuentre
db.mascotas.updateOne(
    {especie:"Gato"},
    {$set: 
        {especie: "Editado"}}
    )

//Actualiza todos que encuentre
db.mascotas.updateMany(
    {especie:"Gato"},
    {$set: 
        {especie: "Editado"}}
    )

db.mascotas.updateMany(
    {especie:"Editado"},
    {$set: 
        {especie: "Gato"}}
    )

//DELETE

//Borra el primero que encuentre
db.mascotas.deleteOne(
    {nombre:"Guppy"}
)

//Borra todos que encuentre
db.mascotas.deleteMany(
    {especie:"Gato"}
)

// $lt > menos que
// $lte > menor o igual
// $and
// $or
// $gt > mayor que
// $gte > mayor o igual
// $regex > buscar valores entre cadenas de caracteres
// $na
// $not
// $eq > igual