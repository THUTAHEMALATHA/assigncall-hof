const students = [
    { "name": "Alice", "marks": 58 },
    { "name": "Bob", "marks": 85 },
    { "name": "Charlie", "marks": 92 },
    { "name": "David", "marks": 45 },
    { "name": "Emma", "marks": 76 },
    { "name": "Frank", "marks": 63 },
    { "name": "Grace", "marks": 89 },
    { "name": "Hannah", "marks": 95 },
    { "name": "Ian", "marks": 54 },
    { "name": "Jack", "marks": 79 },
    { "name": "Kate", "marks": 67 },
    { "name": "Leo", "marks": 88 },
    { "name": "Mia", "marks": 91 },
    { "name": "Nathan", "marks": 72 },
    { "name": "Olivia", "marks": 82 }
];

function processStudents(studentArray) {
    // 1. Filter students who scored above 60 marks
    const filteredStudents = studentArray.filter(student => student.marks > 60);

    // 2. Sort the filtered array in descending order of marks
    const sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);

    // 3. Map the sorted array to extract only the names
    const studentNames = sortedStudents.map(student => student.name);

    // 4. Return the array of sorted names
    return studentNames;
}

const result = processStudents(students);
console.log(result);