// =========================================
// CONFIGURACIÓN DEL NEGOCIO
// =========================================
const CONFIG = {
    nombre: "Tati Burgers",
    telefono: "5491136242212", // Tu número para pruebas
    moneda: "$",
    envio: {
        costo: 1500, // Costo fijo de envío (opcional)
        activo: true
    }
};

// =========================================
// MENÚ DE PRODUCTOS
// =========================================
const MENU = [
    {
        id: "cat-hamburguesas",
        nombre: "Hamburguesas",
        icono: "🍔",
        productos: [
            {
                id: 101,
                nombre: "Burger Cheese", // Le cambié el nombre para que tenga sentido elegir tamaño
                desc: "Medallón de carne, cheddar y salsa de la casa.",
                precio: 7000, // Precio base (Simple)
                imagen: "assets/images/burgers.jpg",
                opciones: {
                    tipo: "variante",
                    titulo: "Elige el tamaño:",
                    items: [
                        { nombre: "Simple", precio: 0 },
                        { nombre: "Doble", precio: 1000 }, // Suma para llegar a los 8000 aprox
                        { nombre: "Triple", precio: 2000 }  // Suma para llegar a los 9000 aprox
                    ],
                    extras: [
                        { nombre: "Bacon y Cheddar", precio: 1500 },
                        { nombre: "Huevo a la plancha", precio: 700 }
                    ]
                }
            },
              {
                id: 102,
                nombre: "Cuarto de libra", // Le cambié el nombre para que tenga sentido elegir tamaño
                desc: "Cheddar,mostaza,ketchup,cebolla.",
                precio: 7300, // Precio base (Simple)
                imagen: "assets/images/burgers.jpg",
                opciones: {
                    tipo: "variante",
                    titulo: "Elige el tamaño:",
                    items: [
                        { nombre: "Simple", precio: 0 },
                        { nombre: "Doble", precio: 1000 }, // Suma para llegar a los 8000 aprox
                        { nombre: "Triple", precio: 2000 }  // Suma para llegar a los 9000 aprox
                    ],
                    extras: [
                        { nombre: "Bacon y Cheddar", precio: 1500 },
                        { nombre: "Huevo a la plancha", precio: 700 }
                    ]
                }
            }
        ]
    },
    {
        id: "cat-papas",
        nombre: "Papas",
        icono: "🍕",
        productos: [
            {
                id: 201,
                nombre: "Papas con cheddar y Bacon",
                desc: "Abundante porcion de papas fritas con salsa cheddar y trozos de bacon crujiente.",
                precio: 12000,
                imagen: "assets/images/papas_cheddar_bacon.jpg"
            },
        ]
    },
    {
        id: "cat-sandwiches",
        nombre: "Sandwiches",
        icono: "🥪",
        productos: [
            {
                id: 301,
                nombre: "Tati Completo",
                desc: "Milanesa De carne+JyQ+lechuga+tomate.",
                precio: 1800,
                imagen: "assets/images/tati_completo.jpg",
                opciones: {
                    tipo: "cantidad",
                    titulo: "¿Cuántas unidades?"
                }
            },
            {
                id: 302,
                nombre: "Especial Tati",
                desc: "Milanesa de carne+cheddar+huevo+barbacoa",
                precio: 1500,
                imagen: "assets/images/tati_especial.jpg",
                opciones: {
                    tipo: "cantidad",
                    titulo: "¿Cuántas unidades?"
                }
            }
        ]
    }
];