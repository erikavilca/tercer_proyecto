let arrayProductos = [
  {
    nombre: "palo celeste",
    categoria: "palos",
    precio: 100000,
    stock: 20,
  },
  {
    nombre: "palo negro",
    categoria: "palos",
    precio: 200000,
    stock: 10,
  },
  {
    nombre: "palo de madera",
    categoria: "palos",
    precio: 220000,
    stock: 10,
  },
  {
    nombre: "palo vlack",
    categoria: "palos",
    precio: 190000,
    stock: 10,
  },
  {
    nombre: "palo jr",
    categoria: "palos",
    precio: 150000,
    stock: 30,
  },
  {
    nombre: "bolso negro",
    categoria: "bolsos",
    precio: 90000,
    stock: 15,
  },
  {
    nombre: "funda",
    categoria: "bolsos",
    precio: 40000,
    stock: 20,
  },
  {
    nombre: "bocha colores",
    categoria: "accesorios",
    precio: 3000,
    stock: 40,
  },
  {
    nombre: "bocha blanca",
    categoria: "accesorios",
    precio: 3100,
    stock: 10,
  },
  {
    nombre: "bocha profecional",
    categoria: "accesorios",
    precio: 6000,
    stock: 30,
  },
  {
    nombre: "canillera",
    categoria: "accesorios",
    precio: 20000,
    stock: 25,
  },
];

let local = {
  productos: arrayProductos,
  consultarProducto: function (nombre) {
    let productoEncontrado = this.productos.find(
      (producto) => producto.nombre === nombre
    );
    if (productoEncontrado !== undefined) {
      return productoEncontrado;
    } else {
      console.log("Producto no existe");
    }
  },
  stockRequerido: function (nombre, cantidad) {
    let producto = this.consultarProducto(nombre);
    if (typeof producto === "object") {
      if (producto.stock >= cantidad) {
        producto.stock -= cantidad;
        alert(`¡Usted agrego ${cantidad} ${nombre} al carrito!`);
        console.log(producto);
      }
    }
  },
};
console.log(local.productos);

let productoAConsultar = prompt("¿Que producto va a querer?");
let clienteUno = local.consultarProducto(productoAConsultar);
console.log(clienteUno);

if (typeof clienteUno === "object") {
  let cantidad = Number(prompt(`¿Cuantas unidades le vas agregar?`));
  local.stockRequerido(productoAConsultar, cantidad);
  let total = 0;

  let agregado = confirm(`¿Desea agregar algo mas al carrito?`);
  if (agregado === true) {
    let otroProducto = prompt(`¿Que otro producto agregamos?`);

    let clienteDos = local.consultarProducto(otroProducto);
    console.log(clienteDos);

    let otraCantidad = Number(prompt(`¿Cuantas unidades le vas agregar?`));
    local.stockRequerido(otroProducto, otraCantidad);

    total = clienteUno.precio * cantidad + clienteDos.precio * otraCantidad;
    console.log(`¡Gracias por su compra! Su total a pagar es de ${total}`);
  } else {
    total = cantidad * clienteUno.precio;
    console.log(`¡Gracias por su compra! El total a pagar es de ${total}`);
  }
  total >= 200000? console.log("Envio gratis"): console.log("Costo de envio $10000")
}
