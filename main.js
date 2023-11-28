class Point {
    x;
    y;
    z;
    constructor(x,y,z){
        this.x = x
        this.y = y
        this.z = z
    }

};

const point = new Point(1,2,3);

console.log(`Point: X=${point.x} Y=${point.y} Z=${point.z}`);

class People{
    #email;
    #name;
    #age;
    constructor(name,email,age){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (isNaN(age) ||!isNaN(name) || !emailRegex.test(email)) throw new Error("Error")
        this.#name = name
        this.#email = email
        this.#age = age
    }
    get getName(){
        return this.#name;
    }
    set setName(name){
        if(!isNaN(name))throw new Error("Error name")
        this.#name = name;
    }

    get getAge(){
        return this.#age;
    }
    set setAge(age){
        if(isNaN(age))throw new Error("Error age")
        this.#age = age;
    }

    get getEmail(){
        return this.#email;
    }
    set setEmail(email){
        this.#Checkemail(email)

        this.#email = email;
    }

    #Checkemail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) throw new Error("Error email")
    }

    static HelloWord(){
        return "HelloWord"
    }
}

const people = new People("Misha","mishalazarihsak@gmail.com",19);

console.log(`Person: age=${people.getAge} name=${people.getName} email=${people.getEmail}`);

console.log(People.HelloWord());

try{
    people.setEmail = "mishalazarishak@.com"
    console.log(people.getEmail);
}catch(e){
    console.log(e.message);
}

try{
    people.setAge = 20;
    console.log(people.getAge);
}catch(e){
    console.log(e.message);
}

try{
    people.setName=20;
    console.log(people.getName);
}catch(e){
    console.log(e.message);
}