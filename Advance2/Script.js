class User{
    constructor(fName,midName, lName,  credit){
        this.fName = fName;
        this.lName = lName;
        this.midName = midName;
        this.credit = credit;
    }
        // console.log("Class Started")
    getFullName(){
        return this.fName + this.lName +" is My Name";}
    editName(newName){
        const myName = newName.split(' ')
        this.fName = myName[0]
        this.lName = myName[2]
        this.midName = myName[1] }
    getMiddleName(){
        return this.midName +" is my middle Name"
    }}
const john = new User('Dany','Paul', 'Rupes', 90);
john.editName('Johnny Sam Anderson');
console.log(john.getMiddleName())

// const sam = new User();
// console.log(sam)
