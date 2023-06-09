// SEGUNDA PRE-ENTREGA

/* Creo un array con objetos (notebooks en este caso)
y les agrego el ID, su marca y modelo, su precio
su almacenamiento y su memoria ram */

const notebooks = [{
    id: 1,
    marca: "Asus",
    modelo: "Ultra Oled 15",
    precio: 721100,
    almacenamiento: "512GB-SSD",
    memoria: "8GB",
  },
  {
    id: 2,
    marca: "Asus",
    modelo: "Vivobook",
    precio: 400000,
    almacenamiento: "256GB SSD",
    memoria: "8GB",
  },
  {
    id: 3,
    marca: "Dell",
    modelo: "Inspiron 3515",
    precio: 500000,
    almacenamiento: "256GB SSD",
    memoria: "8GB",
  },
  {
    id: 4,
    marca: "Asus",
    modelo: "Zeebook",
    precio: 620000,
    almacenamiento: "256GB SSD",
    memoria: "8GB",
  },
  {
    id: 5,
    marca: "Acer",
    modelo: "Nitro 5",
    precio: 650000,
    almacenamiento: "1TB SSD",
    memoria: "8GB",
  },
  {
    id: 6,
    marca: "Apple",
    modelo: "Macbook Pro",
    precio: 1000000,
    almacenamiento: "256GB SSD",
    memoria: "8GB",
  },
  {
    id: 7,
    marca: "Lenovo",
    modelo: "V-series IIL",
    precio: 273999,
    almacenamiento: "340GB SSD",
    memoria: "8GB",
  },
  {
    id: 8,
    marca: "MSI",
    modelo: "Msi Thin GF65",
    precio: 600000,
    almacenamiento: "1TB SSD",
    memoria: "8GB",
  },
  {
    id: 9,
    marca: "Dell",
    modelo: "Alienware",
    precio: 2530873,
    almacenamiento: "512GB SSD",
    memoria: "16GB",
  }
  ]

/* Creo una funcion para poder filtrar el precio, asi cuando
el usuario ingrese el minimo que puede gastar le aparezcan
los productos en ese rango de precios. */

function filtrarPorPrecio(precio){
    const filtrados = notebooks.filter((note)=>note.precio <= precio);
    return filtrados;
}

/* Le pido al usuario que me ingrese el valor
 minimo que puede gastar con un prompt y lo parseo */

let precioMinimo = parseFloat(prompt('Ingresa el valor minimo que desee buscar / 0-para salir'));

/* Creo un ciclo while para que el usuario pueda
filtrar varias veces y pongo que si el precio minimo
es distinto de 0 (Nan) le salga un alert que 
le diga que ingrese datos validos.
y si los datos que ingresa son numeros validos, va a pasar
al else y va a hacer que le filtre  y le muestre en una tabla
 las notebooks segun el precio que ingreso */

while(precioMinimo != 0){
    if(isNaN(precioMinimo)){
        alert('Ingrese datos validos');
    }else{
        const noteFiltrados = filtrarPorPrecio(precioMinimo);
        console.table(noteFiltrados);
    }
    precioMinimo = parseFloat(prompt('Ingresa el valor minimo que desee buscar / 0-para salir'));
}


/* Asi agregue variables, funciones, array con objetos
 y un metodo de filtradoa como pide la consigna. */