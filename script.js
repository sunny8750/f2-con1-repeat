/** @format */

 var arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(item=>{
   if(item.marks>=50)
   console.log(item);
    })
    
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  var a =[];
  a = arr.forEach((item) => {
    if(item.marks>=50)
    console.log(item);
  // console.log([`id:${index.id} name:${index.name} age:${index.age} marks:${index.marks}`]);
});
}


function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45}) //taking the  example of given by  acciojob in question
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].marks < 50) {
      arr.splice(i);
      break;
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  var arr2 = [
    { id: 4, name: "abhi", age: "21", marks: 08 },
    { id: 5, name: "aaksh", age: "20", marks: 45 },
    { id: 6, name: "avinash", age: "24", marks: 55 },
  ];
  console.log(arr.concat(arr2))
}
