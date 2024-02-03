const university={
    Name:"SEC",
    Dept:['CSE', 'EEE', 'CE'],

    Address:{
     
        Code:2030,
        Division:{
            divName:'Sylhet',

        }

    }

}

console.log(university.Address.Division.divName);

// shows the values of an object using values
const values=Object.values(university.Address);
console.log(values);

// show the property of an object using keys
const keysNumber=Object.keys(university);
console.log(keysNumber);