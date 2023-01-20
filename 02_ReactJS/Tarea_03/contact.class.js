export class Contact{
    name = '';
    surname = '';
    email = '';
    isOnline = false;

    constructor(name, surname, email, isOnline){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.isOnline = isOnline;
    }
}