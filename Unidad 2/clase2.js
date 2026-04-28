/* Insertar un registro */
db.alumno.insertOne(
    {
        name: "Jose",
        age: 30
    }
);

/*Buscar un registro*/
db.alumno.findOne(
    {
        name: "Jose"
    }
);

/*actualizar un registro*/
db.alumno.updateOne(
    {
        name: "Jose"
    },
    {
        $set: { age: 31}
    }
);

/* Insertar un registro */
db.alumno.insertOne(
    {
        name: "Jose",
        age: 30,
        direccion: {
            calle: "San martin 228",
            ciudad: "Pemuco",
            estado: "Sa",
            codigoPostal: "12345"

        }
    }
);