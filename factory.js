class Factory{
    constructor(location, owner){
        this.location = location;
        this.owner = owner;
        //Default for a factory is 0 vehicles
        this.vehicles = [];
    }

    //createVehicle is not a function
    createVehicle(vehicle){
        this.vehicles.push(vehicle)
    }
    //It paints the matching vehicle the specified color
    paintVehicle(vin, paintColor){
        //index of the vehicle with that vin
        let vIndex = this.vehicles.findIndex(v => v.vin === vin)
        this.vehicles[vIndex].paint(paintColor)
    }
    //When called lists all vehicles in factory
    listVehicles(){
        return this.vehicles
    }
}



//     constructor(location, owner, listVehicles){
//         this.location = location;
//         this.owner = owner;
//         this.listVehicles = listVehicles;
//     }
    
//     createVehicle(vehicle){
//         return(vehicle)
//     }
//     listVehicles(vehicle){
//         return(createVehicle)
//     }
//     paintVehicle(vin, paintColor){
//         return(vin, paintColor)
//     }
// }
// let newFactory = new Factory()
// newFactory.createVehicle(new Vehicle("Chevy", "Silverado",2019, 11234,"98081"))
// newFactory.createVehicle(new Vehicle("Ford", "Lightning",2017, 44221,"98554"))

// //f.createVehicle(new Vehicle("Chevy", "Silverado",2019, 11234,"98081"))
// newFactory.paintVehicle("98081", "red")
// newFactory.paintVehicle("98081", "red")

// console.log("newFactory", newFactory)