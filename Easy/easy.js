// Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

const student = [
    {lastname: "Vang",
    firstname: "Joseph",
    age: 23
    },

    {lastname: "Vang",
    firstname: "Khu",
    age: 23
    },

    {lastname: "Chan",
    firstname: "Jackie",
    age: 40
    }

];

//for statement creates a loop that consists of three optional expression
// example on mdn for: (let i = 0; i < 9; i++) { str = str + i;}
// for(var i = 0; i < student; i++) 


console.log( `Hello, my name is ${student[0].firstname} ${student[0].lastname} and I'm ${student[0].age} years old`
);
// Change [#] to 1,2 to change the name