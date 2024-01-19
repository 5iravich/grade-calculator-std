//const products = [];
const fs = require('fs');
const path = require('path');
const p = path.join(
        path.dirname(process.mainModule.filename),
        "data",
        "grades.json"
    );

const getProductsFromFile = (cb)=>{
    fs.readFile(p, (err, fileContent)=>{
        if(err){
            console.log(err);
            cb([]);
        } else{cb(JSON.parse(fileContent));}
    }); 
}

module.exports = class Product{
    constructor(subjectid,subjectname,subjectcredit,grade){
        this.subjectid = subjectid;
        this.subjectname = subjectname;
        this.subjectcredit = subjectcredit;
        this.grade = grade;
    }

    save(){
        getProductsFromFile(grades => {
            grades.push(this);
            fs.writeFile(p, JSON.stringify(grades),(err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
         getProductsFromFile(cb);
    }
};
// --------------------------------------

// const gradeValues = {
//   "A": 4.0,
//   "B+": 3.5,
//   "B": 3.0,
//   "C+": 2.5,
//   "C": 2.0,
//   "D+": 1.5,
//   "D": 1.0,
//   "F": 0.0,
// };

// const num = p.length
//   const transcrip = document.querySelector(".transcript")
  
//   function updateTran(){
//     for(let i =0 ; i<num-2;i++){
       
//     let newRow = document.createElement("div");
//     let newCode = document.createElement("div");
//     let newSubject = document.createElement("div")
//     let newGrade = document.createElement("div")
//     let newCredit = document.createElement("div")
//     newRow.classList.add("transcript__row");
//     newCode.classList.add("transcript__code")
//     newSubject.classList.add("transcript__subject")
//     newGrade.classList.add("transcript__grade")
//     newCredit.classList.add("transcript__credit")
    
//     newRow.appendChild(newCode)
//     newRow.appendChild(newSubject)
//     newRow.appendChild(newGrade)
//     newRow.appendChild(newCredit)
    
//     transcrip.appendChild(newRow)
//     }
//   }
//   updateTran()
  
//   let allCode = p.map((obj) => obj.code)
//   console.log(allCode)
//   const transcript__code = document.querySelectorAll(".transcript__code")
//   for(let i = 0 ; i<num ; i++){
//     transcript__code[i].textContent = allCode[i]
//   }
//   const transcript__subject = document.querySelectorAll(".transcript__subject")
//   let allSubject = p.map((obj) => obj.subject)
//   for(let i = 0 ; i<num; i++){
//     transcript__subject[i].textContent = allSubject[i]
//   }
  
//   const transcript__grade = document.querySelectorAll(".transcript__grade")
//   let allGrade = p.map((obj) => obj.grade)
//   for(let i = 0 ; i<num; i++){
//     transcript__grade[i].textContent = allGrade[i]
//   }
  
//   const transcript__credit = document.querySelectorAll(".transcript__credit")
//   let allCredit = p.map((obj) => obj.credit)
//   for(let i = 0 ; i<num; i++){
//     transcript__credit[i].textContent = allCredit[i]
//   }
  
  
//   const total__value = document.querySelector(".total__value")
//   let sumCre = allCredit.reduce((a,b) => a+b,0)
//   total__value.textContent = sumCre

//   let numGrade = allGrade.map((x) => {
//     if (x === 'A') {
//       return 4;
//     } else if (x === 'B+') {
//       return 3.5;
//     } 
//     else if (x === 'B') {
//       return 3;
//     } 
//     else if (x === 'C+') {
//       return 2.5;
//     } 
//     else if (x === 'C') {
//       return 2.0;
//     } 
//     else if (x === 'D+') {
//       return 1.5;
//     } 
//     else if (x === 'D') {
//       return 1;
//     } 
//     if (x === 'F') {
//       return 0;
//     }
//   });
  
//   function gradeCal (grade,credit) {
//     const gpa = document.querySelector(".gpa__value")
//     let sumCal = 0;
//     for(let i =0; i<num ;i++){
//      sumCal = sumCal+(grade[i] * credit[i]) 
//      console.log(sumCal)
//     }
//     gpa.textContent = (sumCal/sumCre).toFixed(2)

//     if(gpa.textContent<2){
//       document.body.style.backgroundColor = "#F28444";
//     }
//   }
//   gradeCal(numGrade,allCredit)
