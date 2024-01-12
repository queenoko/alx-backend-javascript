// Student details
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stud1: Student = {
    firstName: 'Femi',
    lastName: 'Emem',
    age: 23,
    location: 'Nigeria'
}

const stud2: Student = {
    firstName: 'Franklin',
    lastName: 'Lawson',
    age: 29,
    location: 'Akwa state'
}

let studentList: Student[] = [stud1, stud2];

const student_table = document.createElement('table');
const student_body = document.createElement('tbody');

studentList.forEach((objectList) => {
    const tableName = document.createElement('tableName');
    const tableRow = document.createElement('tableRow');
    const tableLocation = document.createElement('tableLocation');

    tableName.textContent = objectList.firstName;
    tableLocation.textContent = objectList.location;
    tableRow.appendChild(tableName);
    tableRow.appendChild(tableLocation);
    student_body.appendChild(tableRow);
})

student_table.appendChild(student_body);
document.body.appendChild(student_table);
