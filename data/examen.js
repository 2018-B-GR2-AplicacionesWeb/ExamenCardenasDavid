const fs = require('fs');
const rxjs = require('rxjs');

function leerArchivo() {
    return new Promise((resolve, reject) => {
        fs.readFile('people.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                console.log("error")
            }
            else {
                resolve({
                    mensaje: 'BDD leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}


leerArchivo().then(lectura =>{
    console.log("Pregunta 1: Tipos de gender")
    lectura.bdd.map(valor =>{

       console.log(valor.gender)
   })
});
leerArchivo().then(lectura =>{
    console.log("Pregunta 2: Tipos de eye_color")
    lectura.bdd.map(valor =>{

        console.log(valor.eye_color)
    })
});
leerArchivo().then(lectura =>{
    console.log("Pregunta 3: Tipos de skin_color")
    lectura.bdd.map(valor =>{

        console.log(valor.skin_color)
    })
});
leerArchivo().then(lectura =>{
    console.log("Pregunta 4: Tipos de hair_color")
    lectura.bdd.map(valor =>{

       console.log(valor.hair_color)
    })
});

leerArchivo().then(lectura =>{
    lectura.bdd.map(valor =>{

        console.log(valor.gender)
        if(dictGender.has(valor.gender)){
            dictGender.set(valor.gender,valor.gender)

        }
        else{
          dictGender.set(valor.gender, valor.gender)
           }


    })
    console.log("Pregunta5")
    console.log(dictGender)
});

leerArchivo().then(lectura =>{
    lectura.bdd.map(valor =>{

        if(dictEyeColor.has(valor.eye_color)){
            dictEyeColor.set(valor.eye_color,valor.eye_color)

        }
        else{
            dictEyeColor.set(valor.eye_color, valor.eye_color)
        }


    })
    console.log("Pregunta5")

    console.log(dictEyeColor)
});

leerArchivo().then(lectura =>{
    lectura.bdd.map(valor =>{

        if(dictHairColor.has(valor.hair_color)){
            dictHairColor.set(valor.hair_color,valor.hair_color)

        }
        else{
            dictHairColor.set(valor.hair_color, valor.hair_color)
        }

    })
    console.log("Pregunta5")

    console.log(dictHairColor)
});

leerArchivo().then(lectura =>{
    lectura.bdd.map(valor =>{

        if(dictSkinColor.has(valor.skin_color)){
            dictSkinColor.set(valor.skin_color,valor.skin_color)

        }
        else{
            dictSkinColor.set(valor.skin_color, valor.skin_color)
        }

    })
    console.log("Pregunta5")

    console.log(dictSkinColor)
});

class Dictionary {
    constructor () {

    this.items = {}
}

    has (key) {
        return this.items.hasOwnProperty(key)
    }

    set (key, value) {
        this.items[key] = value
    }

    remove (key) {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }

        return false
    }

    get (key) {
        return this.has(key) ? this.items[key] : undefined
    }

    values () {
        const values = []
        for (let key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key])
            }
        }
        return values
    }

    size () {
        return Object.keys(this.items).length
    }

    keys () {
        const keys = []
        for (let key in this.items) {
            keys.push(keys)
        }
        return keys


    }

    getItems () {
        return this.items
    }
}

const dictGender = new Dictionary();
const dictHairColor = new Dictionary();
const dictEyeColor = new Dictionary();
const dictSkinColor = new Dictionary();

let acumuladorMass = 0;
let acumuladorHeight = 0;

leerArchivo().then(valor => {
    valor.bdd.forEach((valor)=>{

        if((valor.mass!="unknown")){
            acumuladorMass += parseInt(valor.mass)
}

            acumuladorHeight += parseInt(valor.height)
 })

        const respuesta6 = {
            massTotal:acumuladorMass,
            heightTotal: 2000
        }
        console.log("Respuesta 6 ", respuesta6)
    })

leerArchivo().then(lectura =>{

    lectura.bdd.map(valor =>{

        if(valor.vehicles == ""){
            bandera=true;

        }


    })
    if (bandera = true){
        console.log("No todos usan vehicles")
    }
    else{
        console.log("Todos usan vehicles")
    }
});
leerArchivo().then(lectura =>{

    lectura.bdd.map(valor =>{

        if(valor.starships == ""){
            bandera=true;

        }


    })
    if (bandera = true){
        console.log("No todos usan starships")
    }
    else{
        console.log("Todos usan starships")
    }
});

const dicNombres = new Dictionary();
dicNombres.set("A" , false)
dicNombres.set("B" , false)
dicNombres.set("C" , false)
dicNombres.set("D" , false)
dicNombres.set("E" , false)
dicNombres.set("F" , false)
dicNombres.set("G" , false)
dicNombres.set("H" , false)
dicNombres.set("I" , false)
dicNombres.set("J" , false)
dicNombres.set("K" , false)
dicNombres.set("L" , false)
dicNombres.set("M" , false)
dicNombres.set("N" , false)
dicNombres.set("O" , false)
dicNombres.set("P" , false)
dicNombres.set("Q" , false)
dicNombres.set("R" , false)
dicNombres.set("S" , false)
dicNombres.set("T" , false)
dicNombres.set("U" , false)
dicNombres.set("V" , false)
dicNombres.set("W" , false)
dicNombres.set("X" , false)
dicNombres.set("Y" , false)
dicNombres.set("Z" , false)
leerArchivo().then(nombrePersonaje => {
    nombrePersonaje.bdd.forEach(valor => {
        const vectorNombres = valor.name.split('');




        if(dicNombres.has(vectorNombres[0])){
            dicNombres.set(vectorNombres[0],true)

        }
        else{
            dicNombres.set(vectorNombres[0], false)
        }


    });
    console.log("Respuesta6")
    console.log(dicNombres);
});
const dictFilms = new Dictionary();
let films = 0;

leerArchivo().then(nombrePersonaje => {
    nombrePersonaje.bdd.map(valor => {

        if(dictFilms.has(valor.nombre)){

            films = films +1
            dictFilms.set(valor.nombre, films )

        }
        else{
            dictFilms.set(valor.nombre, 0)
        }


    });
    console.log("Respuesta6")
    console.log(dictFilms);
});


