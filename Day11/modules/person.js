/*export class Person{
    cityname="My City";
    constructor(cityname){
        this.cityname=cityname;
    }
}*/
class Person{
    cityname="My City";
    constructor(cityname){
        this.cityname=cityname.toUpperCase();
    }
}
class Human{
    version=1001;
}
//export {Person as Pson}
//export{Person}
export default Person;