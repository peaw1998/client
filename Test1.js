person = {
    math: { name: "Math", credit: 3, grade: 4.00 },
    physics: { name: "Physics", credit: 2.5, grade: 2.00 },
    chem: { name: "Chemistry", credit: 2, grade: 2.50 }
}
var total = 0
var totalCredit = 0
sumGrade = (sub) => {
    total = total + sub.grade * sub.credit

}
sumCredit = (sub) => {
    totalCredit = totalCredit + sub.credit

}


for (key in person) {
    //for (k in person) {
        console.log(key + ": " + person[key])
    //}
    sumGrade(person[key])
    sumCredit(person[key])

    // if (key == 'math') {
    //     for (k in person.math) {
    //         console.log(k + ": " + person.math[k])
    //         }
    // sumGrade(person.math) 
    // sumCredit(person.math)        
    // }
    // else if (key == 'physics') {
    //     for (k in person.math) {
    //         console.log(k + ": " + person.math[k])
    //         }
    // sumGrade(person.physics)      
    // sumCredit(person.physics)         
    // }
    // if (key == 'chem') {
    //     for (k in person.math) {
    //         console.log(k + ": " + person.math[k])
    //         }
    // sumGrade(person.chem)   
    // sumCredit(person.chem)            
    // }    
}
console.log("GPA = " + total / totalCredit)

