class Vehicle {
    constructor(make, model, year, price, vin){
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.vin = vin;
        this.color = undefined;
    }

    //Paint Method
    paint(color){
        this.color = color
    }

    drive(){
        return this.year + " " + this.make + " " + this.model + " drives"
    }
}



//     paint(col){
//         this.color = col;
//     }
//     drive(){
//         return(this.year, " ", this.make, " ", this.model, " drives")
//     }
// }
// const newVariable = new Vehicle("make", "model", "599", "vin", "blue")
// newVariable.paint("blue")

// console.log(newVariable)

// const vDrive = new Vehicle("Ford", "F-150", 2015, 19000, "1234") 
// // 'it should print out this `2015 Ford F-150 drives`

// vDrive.drive()