const data = [
    {
        id:1,
        tittle: "Libro Js",
        price: 150,
        category: "Nuevo",
        detail: "Nuevo sin uso"
    },

    {
        id:2,
        tittle: "Libro Js",
        price: 100,
        category: "Usado",
        detail: "Usado"
    },

    {
        id:3,
        tittle: "Libro HTML-CSS-Js",
        price: 200,
        category: "Nuevo",
        detail: "Nuevo sin uso"
    }
]

export default function getItems(){

    return new Promise((resolve, reject) => {
        
        setTimeout(( ) => {
            resolve(data)
        }, 2500);
    })

} 