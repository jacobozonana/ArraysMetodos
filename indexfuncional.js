let data = [12, 22, 10, 2, 9]

let doubles = data.map(function(elements){
    return elements * 2
})
console.log(`Datos Originales`, data)
console.log(`Datos al doble`, doubles)

let dobles = new Array()

let dobs = data.forEach(function(elems){
    dobles.push(elems * 2)
})
console.log(dobles)


let ages = [33, 12 ,19, 18, 9]
let underAged = ages.filter((elements)=>{
    return elements <18
})
console.log(underAged)

underAged.sort()
console.log(underAged)

let alumnos = [`Alberto`, `Juan`, `Beto`, `Eddy`]
alumnos.sort()
console.log(alumnos) 









