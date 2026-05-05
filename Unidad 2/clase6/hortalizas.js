//Contar la totalidad de la coleccion
db.frutahortaliza.countDocuments({})
//Consultar la cantidad de documentos asociados al producto Acelga
db.frutahortaliza.countDocuments(
    {
        "Producto": "Acelga"
    }
)
//Consultar cuantos documentos estan asociados al producto Acelga y se comercializan en el Mercado Mayorista Lo Valledor de Santiago
db.frutahortaliza.countDocuments(
    {
        "Producto": "Acelga",
        "Mercado": "Mercado Mayorista Lo Valledor de Santiago"
    }
)
//Consulta anterior con and
db.frutahortaliza.countDocuments(
    {
        $and:
            [
                {
                    "Producto": "Acelga"
                },
                {
                    "Mercado": "Mercado Mayorista Lo Valledor de Santiago"
                }
            ]
    }
)
//Consultar por los documentos asociados a la region 9
db.frutahortaliza.find(
    {
        "ID region": 9
    }
)
db.frutahortaliza.countDocuments(
    {
        "ID region": 9
    }
)

db.frutahortaliza.distinct("Producto",{"ID region":9})

//Buscar el producto Ajo y contar los documentos asociados
db.frutahortaliza.find(
    {
        "Producto": "Ajo"
    }
)
db.frutahortaliza.countDocuments(
    {
        "Producto": "Ajo"
    }
)

//Buscar los productos(documentos) vendidos entre las regiones 4 y 8
db.frutahortaliza.find(
    {
        $and:
        [
            {
                "ID region":{$gte:4}
            },
            {
                "ID region":{$lte:8}
            }
        ]
    }
)

//Buscar los productos que se comercializan despues de la region del maule
db.frutahortaliza.find(
    {
        "ID region": {$gt:7}
    }
)

//Actualizar cualquier documento outilizando su id y cambiar el nombre de la region por actualizado
db.frutahortaliza.updateOne(
    {
        "_id": ObjectId('69fa0a3781ec8a9878f5efdc')
    },
    {
        $set:{"Region": "Actualizado"}
    }
)