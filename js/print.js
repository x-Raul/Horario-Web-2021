function printDiv(BigContainer) {
    var contenido= document.getElementById(BigContainer).innerHTML;
    var contenidoOriginal= document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOriginal;
}