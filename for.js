//document.write('Hola');

//Estructura del ciclo For
/*for (Inicio; condicion; actualizacion) {
    //codigo
}*

/*Inicio:  con una variable
condicion: mientras se cumpla esta condicion el codigo se estara repitiendo
actualizacion: el codigo despues de que se ejecute va a ejecutar lo que se tenga en la actualizacion
*/

//los numero seran 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ya que "i" inicia en 0 y le estamos diciendo que se detenga cuando sea menor a 10
/*for (var i = 0; i < 10; i++) {
    document.write(i);
    document.write('<br>');
}*/

//los numero seran 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ya que se detiene cuando se cumple la condicion de que sea menor o igual a 10
/*for (var i = 0; i <= 10; i++) {
    document.write(i);
    document.write('<br>');
}*/

//los numero seran 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
/*for (var i = 10; i >= 0; i--) {
    document.write(i);
    document.write('<br>');
}*/

//recorrer un arreglo con ciclo for 
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        /*for (var i = 0; i <= 11; i++) { // o asi: for (var i = 0; i < meses.length; i++) {}
            document.write(i+1 + '.' + meses[i]);
            document.write('<br>');
        }*/

        for (mes in meses) {
            document.write(meses[mes]);
            document.write('<br>');
        }