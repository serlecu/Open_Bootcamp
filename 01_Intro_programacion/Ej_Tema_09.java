/*
Crea una clase Persona con las siguientes variables:

- La edad
- El nombre
- El teléfono

Una vez creada la clase, crea una nueva clase Cliente 
que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.

Crea ahora un objeto de la clase Cliente que debe 
tener como propiedades la edad, el telefono, el nombre y el credito, 
tienes que darles valor y mostrarlas por pantalla.

Una vez hecho esto, haz lo mismo con la clase Trabajador
 que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
*/

public class Main{
    public static void main(){
        Cliente cliente = new Cliente();
        Trabajador trabajador = new Trabajador()
        
        cliente.setNombre("Paula");
        cliente.setEdad(40);
        cliente.setTelefono("+34888777555")
        cliente.setCredito(100);

        trabajador.setNombre("Marta");
        trabajador.setEdad(38);
        trabajador.setTelefono("+34111222333")
        trabajador.setSalario(100);

        System.out.println(cliente.getNombre);
        System.out.println(cliente.getEdad);
        System.out.println(cliente.getTelefono);
        System.out.println(cliente.getCredito);

        System.out.println(trabajador.getNombre);
        System.out.println(trabajador.getEdad);
        System.out.println(trabajador.getTelefono);
        System.out.println(trabajador.getSalario);

    }
}


class Persona{
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

class Cliente extends Persona{
    private int credito;

    public int getCredito(){
        return this.credito;
    }
    public void setCredito(int credito){
        this.dredito = credito;
    }
}

class Trabajador extends Persona{
    private int salario;

    public int getSalario(){
        return this.salario;
    }
    public void setSalario(int salario){
        this.salario = salario;
    }
}