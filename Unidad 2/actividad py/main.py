#pip install pymongo
from pymongo import MongoClient

def connectMongo():
    url = "mongodb://localhost:27017"
    #objeto clase pymongo
    clientMongo = MongoClient(url)

    #nombre base de datos > inacap
    baseDatos = clientMongo['inacap']
    #nombre coleccion > alumnos
    coleccion = baseDatos['alumnos']

    return coleccion

coleccion = connectMongo()

#find
def listarAlumnos():
    pass
#insertOne > insert_one; insertMany > insert_many
def agregarAlumnos():
    nombre = input("Ingrese el nombre: ").title()
    apellido = input("Ingrese el apellido: ").title()
    coleccion.insert_one({"nombre":nombre,"apellido": apellido})
    print(f"Se inserto correctamente el alumno {nombre} {apellido}")

#updateOne > update_one; updateMany > update_many
def actualizarAlumnos():
    nombreup = input("Ingrese el nombre del alumno a actualizar: ").title()
    nombrenew = input("Ingrese el nuevo nombre: ").title()
    apellidonew = input("Ingrese el nuevo apellido: ").title()
    coleccion.update_one({"nombre":nombreup},{"$set":{"nombre": nombrenew,"apellido":apellidonew}})

#deleteOne > delete_one; deleteMany > delete_many
def eliminarAlumno():
    nombre = input("Ingrese el nombre del alumno a eliminar: ").title()
    coleccion.delete_one({"nombre": nombre})
    print("El alumno se ha eliminado correctamente")

eliminarAlumno()