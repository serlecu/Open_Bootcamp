/*
Primera parte:
- Crear una función con tres parámetros que sean números que se suman entre sí.
- Llamar a la función en el main y darle valores.

Segunda parte:
- Crear una clase coche.
- Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
- Una función que incremente el número de puertas que tiene el coche.
- Crear un objeto miCoche en el main y añadirle una puerta.
- Mostrar el número de puertas que tiene el objeto.
*/

public static void main(string[] args){
    sumatriple(1,2,3);

    var miCoche = new Coche;
    miCoche.anadirPuerta(1);

    System.out.print(miCoche.numPuertas);
}

public static int sumatriple(int a,int b, int c){
    return a + b + c;
}

class Coche{
    var numPuertas int;

    public void anadirPuerta(int n){
        numPuertas += n;
    }
}

