//import {Pson} from "./person.js";
//import {Person as Pson} from "./person.js";
import Pson from "./person.js";
class Hero extends Pson{
    firstname="Default value";
     lastname="Default value";
     _secret="My Secret Mission";
    // static version=1001;
     constructor(fname,lname,cityname){
         super(cityname);
         this.firstname=fname;
         this.lastname=lname;

     }
 fullname(){
     return this.firstname+" "+this.lastname;
 }
 get secret(){
     return this._secret;
 }
 set secret(mysecret){
     this._secret=mysecret;
 }
};
export {Hero};