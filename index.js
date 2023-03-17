// Write your solution in this file!
const employee= {
    name: 'clinton',
    streetaddress:'241 Kasarani'
};

function updateEmployeeWithKeyAndValue(employee,key,value){
        const newemployee = {...employee};
        newemployee[key]=value;
        return newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const employee3={...employee};
    delete employee3[key];
    return employee3;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}