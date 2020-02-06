//Inheritance
class Father {
    constructor(key1, key2) {
        this.key1 = key1;
        this.key2 = key2;
        this.names = []; // "protected" is similar to private but it has a special capability which allows me to access this property in case I want this from inhereted class.
    }
    addNames(anyone) {
        this.names.push(anyone);
    }
}
class Inheriting extends Father {
    // extends "class name" allows me to inherit the things contained in the class. *notice. only one calss is possible to be used as father
    // Then, how can I call the constructor of Father calss first. It is realized by using "super()"
    constructor(priority, newArray) {
        //I make the second array which will be run after executing super().
        super(priority, "position need string according to key2:string"); //If I set the super(); then it means I would execute the base class("father")'s constructor with the parameters.
        this.newArray = newArray;
    }
}
const inheritWork = new Inheriting("d1", [
    "have to be the form which is array accroding to <this.newArray = newArray>"
]);
inheritWork.addNames("add this index");
console.log(inheritWork); // {key1 : d1, key2: d2, names: ['add this index'],newArray:[have to be .........<this.newArray = newArray]>}
//Then, what if I add another class extension?
class Inheriting2 extends Inheriting {
}
const inheritWork2 = new Inheriting2("FatherFather", ["MotherMother"]);
inheritWork2.addNames("add this index2");
console.log(inheritWork2); // It follows the structure of constrcutor of class Inheriting
class Inheriting3 extends Father {
    constructor(id, reports) {
        super(id, "yes"); //process Father constructor with "id"parameter and 'yes' first
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    } // execute addReport to access and add index inside private reports array
    printReports() {
        console.log(this.reports); //['text'];
    }
}
const accounting = new Inheriting3("no", []);
accounting.addReport("add this index3");
accounting.printReports(); // ['add this index3']
// But, considering the Inheriting object, I wan to add it's own method in terms of "names"
class Inheriting4 extends Father {
    constructor(id, reports) {
        super(id, "yes"); //process Father constructor with "id"parameter and 'yes' first
        this.reports = reports;
    }
    addNames2(name) {
        if (name === "Max") {
            return; // I don't want to add Max again.
        }
        this.names.push(name);
    } // Though there is method in Father class from which accounting2 inherit the method,"addNames()" I can override a new method. Again, if "names" inside father class has private, I cannot access and change names.
    addReport(text) {
        this.reports.push(text);
    } // execute addReport to access and add index inside private reports array
    printReports() {
        console.log(this.reports); //['text'];
    }
}
const accounting2 = new Inheriting4("yesno", []);
accounting2.addReport("it works");
accounting2.addNames2("Max"); // it makes return without resistering "Max"
accounting2.addNames2("addMam"); // names:['addMam']
console.log(accounting2);
// getter and setter
//easy example
class privated {
    constructor(th) {
        this.te = th;
    }
    get approach() {
        // but, By putting "get apporach" as the pathway of private te, I can get the value of private te from the outside of class
        return this.te;
    }
}
const qqqqq = new privated("ok");
console.log(qqqqq.approach); // like this
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//advanced getter case
class getter extends Father {
    constructor(id, reports) {
        super(id, "what is getter?");
        this.reports = reports;
        this.needAllowance = reports[0]; // call the first index of reports array, then put this in the needAllowance.
    }
    get mostREcentReport() {
        if (this.needAllowance) {
            return this.needAllowance; //Notice. getter must have a return.
        }
        throw new Error("No report");
    }
    addReport(text) {
        this.reports.push(text);
        this.needAllowance = text;
    }
}
const getterTest = new getter("test", []);
//console.log(getterTest.mostREcentReport);  ==> it makes an error because there is no value in reports array.
getterTest.addReport("does it work?");
console.log(getterTest.mostREcentReport); // then it returns 'dose it work?' // Notice, when it is getter, although it looks like a method, I can use this like one property so no parentheses
console.log(getterTest);
/////////////////////////////////////////////////////////////////////////////////
//setter => By contrast, setter can change the private property's value from the outside.
class getter2 extends Father {
    constructor(id, reports) {
        super(id, "what is getter?");
        this.reports = reports;
        this.needAllowance = reports[0];
    }
    get mostREcentReport() {
        if (this.needAllowance) {
            return this.needAllowance;
        }
        throw new Error("No report");
    }
    set mostREcentReport(value) {
        if (!value) {
            throw new Error("pass in a valid value");
        }
        this.addReport(value); // than, I can change the context of index of reports array. refer to the outside
    }
    addReport(text) {
        this.reports.push(text);
        this.needAllowance = text;
    }
}
const getterTest2 = new getter2("test", []);
getterTest2.addReport("does it work?");
getterTest2.mostREcentReport = "I add new index"; // I can do this from the outside of class with dot notation though needAllowance is private.
console.log(getterTest2);
//# sourceMappingURL=project7.js.map