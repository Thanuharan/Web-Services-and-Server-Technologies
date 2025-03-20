console.log("\nnumArray")
let num = [15,23,33,42]
/*for(var i=0;i<4;i++)
{
	console.log(num[i])
}*/

num.forEach((n) =>{
	console.log(n)
})

//find the Max number in the array using foreach
var max=0;
num.forEach((n) =>{
	/*if(n>max)
	{
	    max=n;
	}*/
	(max<n)&&(max=n)
})
console.log("Maximum is "+max);

//print the nested array
let numbers=[
            [12,45,67],
			[24,95,54]
			]
console.log(numbers)

numbers.forEach((n) =>{
	n.forEach((i) =>{
	    console.log(i)
    })
})

console.log("\nStringArray")
let std= ["wera","Helsa","Poori","Delan"]
for(var i=0;i<4;i++)
{
	console.log(std[i])
}

let arr=[1,2,3,4,5,6]
console.log("\nNumbers that give target 7")
arr.forEach((n) =>{
	for(var i=0;i<6;i++)
    {
	   let v=n+i;
	   if(v==7)
	   {
		  console.log(n+" and "+i)
	   }
    }
})

console.log("\nNumbers that in both arrays ")
let a=[4,5,6,3,7]
let b=[8,3,2,1,5]
a.forEach((n) =>{
	b.forEach((i) =>{
	(n==i)&&(console.log(i))
})
})

/*let c=[4,8,3,4,3,2,1,8,4]
console.log("\nFrequently used number")
c.forEach((n) =>{
for(var i=0;i<9;i++)
 {
	for(var j=0;j<9;j++)
    {
	   let count=0;
	   if(i==n)
	   {
		  count++;
	   }
    }
 }
})*/

//Array Operation
//push and pop
console.log("\nArray Operation push and pop")
arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

console.log("\nReverse the Array")
arr2=['aira','birdie','diya']
console.log(arr2)
let reversedArray = [];
while (arr2.length > 0) {
    reversedArray.push(arr2.pop());
}
console.log(reversedArray);	
	
//JSON
//{key:value}
let student = {regno:'2021/ict/104',name:'Haran',age:23,course:'IT',skills:['Java','JS','C++']}
console.log(student)
console.log(student.name)
let Stupids=[
{regno:'2021/ict/104',name:'Haran',age:23,course:'IT',skills:['Java','JS','C++']},
{regno:'2021/ict/102',name:'Rajeev',age:24,course:'IT',skills:['PHP','JS','CSS']},
{regno:'2021/ict/106',name:'Vishnu',age:23,course:'IT',skills:['HTML','JS','C++']}
]
console.log(Stupids)

//Define 10 student JSON
//Store it in an array
let students = [
  { name: "Manoj", gender: "Male", course: "IT", gpa: 3.5 },
  { name: "Mani", gender: "Female", course: "IT",gpa: 3.8 },
  { name: "Sathu", gender: "Female", course: "Math", gpa: 3.9 },
  { name: "Rajeev", gender: "Male", course: "IT", gpa: 3.2 },
  { name: "Vishnu", gender: "Female", course: "IT", gpa: 4.0 },
  { name: "Nixon", gender: "Male", course: "Math", gpa: 2.8 },
  { name: "Nikky", gender: "Female", course: "Math", gpa: 3.6 },
  { name: "Thanu", gender: "Male", course: "IT", gpa: 3.3 },
  { name: "Haran", gender: "Male", course: "Math", gpa: 3.7 },
  { name: "Thaksi", gender: "Male", course: "IT", gpa: 3.1 }
];

//Find the female students
let femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);

//Find the students who are following IT course
let itStudents = students.filter(student => student.course === "IT");
console.log("IT Students:", itStudents);

//Find the max and GPA average
let Gpas = students.map(student => student.gpa);
let maxGpa = Math.max(...Gpas);
let averageGpa = Gpas.reduce((sum,gpa) => sum + gpa, 0) / Gpas.length;

console.log("Max GPA:", maxGpa);
console.log("Average GPA:", averageGpa.toFixed(2));