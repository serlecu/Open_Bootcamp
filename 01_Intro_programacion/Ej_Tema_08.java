/*
Para practicar la encapsulación:

- Crear clase Persona.
- Crear variables las privadas edad, nombre y telefono de la clase Persona.
- Crear gets y sets de cada propiedad.
- Crear un objeto persona en el main.
- Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.
*/

public class Main {
    public static void main(){
        Persona alguien = new Persona;

        alguien.setEdad(24);
        alguien.setNombre("You");
        alguien.setTelefono("00548476927384");

        System.out.println(alguien.getNombre);
        System.out.println(alguien.getEdad);
        System.out.println(alguien.getTelefono);
        
    }
}


public class Persona{
    private int edad;
    private String nombre;
    private String telefono;

    public int getEdad(){
        return this.edad;
    }
    public void setEdad(int edad){
        this.edad = edad;
    }

    public String getNombre(){
        return this.nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public String getTelefono(){
        return this.telefono;
    }
    public void setTelefono(String telefono){
        this.telefono = telefono;
    }
}