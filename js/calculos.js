//https://dolarapi.com/docs#/operations/get-dolar-blue

//variables

const urlBlue = 'https://dolarapi.com/v1/dolares/blue';
const fecha = document.getElementById('fecha');
const compra = document.getElementById('compra');
const venta = document.getElementById('venta');
const btn = document.getElementById('btn');
const option = document.getElementById('option');



fetch(urlBlue, {
    header: 'Accept: application/json'
})
.then(res => res.json())
.then((data) => {

    //console.log(data)

    //Fecha de actualizacion traida de API
    date = new Date(`${data.fechaActualizacion}`)
    fecha.innerText = `Fecha de actualizacion = ${date.toLocaleString()}`

    //Valores Dolar blue traidos de API
    compra.innerText = `Compra = $ ${data.compra}`
    venta.innerText = `Venta = $ ${data.venta}`

    // Accion de boton en Conversor
    btn.addEventListener('click', ()=>{

        let monto = parseFloat(document.getElementById('monto').value);
        if (monto > 0) {
            if (option.value == 1) {
                console.log(option.value);
                let resultado =  monto/`${data.venta}`
                document.getElementById('resultado').value = resultado.toFixed(3);
            } if (option.value == 2) {
                let resultado = monto*`${data.venta}`
                document.getElementById('resultado').value = resultado.toFixed(2);
            }
             
        }
    })
})





