function calcular(){
    const cantidad = document.querySelector('#cantidad').value;
    const color = document.querySelector('#color').value;
    const precio = document.querySelector('#precio').innerHTML;

    document.querySelector('#resumen-total').innerHTML = cantidad * precio;
    document.querySelector('#resumen-cantidad').innerHTML = cantidad;
    document.querySelector('#resumen-color').style.backgroundColor = color;
}