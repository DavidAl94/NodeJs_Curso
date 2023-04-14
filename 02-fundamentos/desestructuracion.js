const deadpool ={
    nombre:'Wade',
    apellido:'Windston',
    poder: 'Regeneracion',
    edad:50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    } 
}

console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroes({nombre,apellido,poder,edad=0}){
       
       console.log(nombre,apellido,poder,edad);  
    }
    

// function imprimeHeroes(heroe){
//    const{nombre,apellido,poder,edad=0} = heroe;
//    console.log(nombre,apellido,poder,edad);  
// }

imprimeHeroes(deadpool);

// const{nombre,apellido,poder,edad=0} = deadpool;
// console.log(nombre,apellido,poder,edad);

const heroes = ['Deadpool','Superman','Batman'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
const [,,h3] = heroes;

console.log(h3);