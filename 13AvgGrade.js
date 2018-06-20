var students = [['David', 80],
                ['Vinoth', 77],
                ['Divya', 88],
                ['Ishitha', 95],
                ['Thomas', 68]
            ];

var Totalmarks = 0;

for (var i=0; i < students.length; i++) {
        Totalmarks += students[i][1];
        var AvgMarks = (Totalmarks/students.length);
}

console.log(("Average marks: " + (Totalmarks)/students.length));

if (AvgMarks < 60){
          console.log("Grade : F");      
    } 
else if (AvgMarks < 70) {
                console.log("Grade : D"); 
    } 
else if (AvgMarks < 80) {
                console.log("Grade : C"); 
    }
else if (AvgMarks < 90) {
                console.log("Grade : B"); 
    }
else if (AvgMarks < 100) {
                console.log("Grade : A"); 
    }
