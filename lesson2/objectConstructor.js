// var name = 'Anik hasan'
// var age = 30;
// var cgpa = 3.1
// var lang = ['Bangla', 'Hindi', 'English']


var student  = {
  name : 'Anik hasan',
 age :30,
 cgpa : 3.1,
  lang : ['Bangla', 'Hindi', 'English']
}

console.log(student.age);


// constructor

function Student(name,age,cgpa,lang) {
    this.name=name
    this.age=age,
    this.cgpa=cgpa,
    this.lang= lang
}

var student1= new Student('Shima', 29, 3.2, 'bangla','hindi')

console.log(student1.age);