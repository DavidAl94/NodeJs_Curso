const empleados = [
    {
        id:1,
        nombre:'David'
    },
    {
        id:2,
        nombre:'Laura'
    },{
        id:3,
        nombre:'Juan'
    },
];


const salarios =[
    {
        id:1,
        salario:1500
    },
    {
        id:2,
        salario:1000
    }
];


const getEmpleado = (id)=>{
    
    
    return new Promise((resolve,reject)=>{
        const empleado = empleados.find(e=>e.id===id)?.nombre;
        (empleado) ? resolve(empleado) : reject(`Empleado con id ${id} no existe`); 
        
    });
}

const getSalario = () =>{
    return new Promise((resolve,reject)=>{
        const salario = salarios.find(s=>s.id===id)?.salario;
        (salario) ? resolve(salario) : reject(`Salario con id ${id} no existe`); 
        
    });
}

const getInfoUsuario = async(id)=>{

    const empleado = await getEmpleado(id)
    return empleado;
}





const id=1;

getInfoUsuario(id)
    .then(msg => console.log(msg));