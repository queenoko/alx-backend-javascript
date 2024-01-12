var stud1 = {
    firstName: "Femi",
    lastName: "Emem",
    age: 23,
    location: "Nigeria"
};
var stud2 = {
    firstName: "Franklin",
    lastName: "Lawson",
    age: 29,
    location: "Akwa state"
};
var studentList = [stud1, stud2];
var student_table = document.createElement('table');
var student_body = document.createElement('tbody');
studentList.forEach(function (objectList) {
    var tableName = document.createElement('tableName');
    var tableRow = document.createElement('tableRow');
    var tableLocation = document.createElement('tableLocation');
    tableName.textContent = objectList.firstName;
    tableLocation.textContent = objectList.location;
    tableRow.appendChild(tableName);
    tableRow.appendChild(tableLocation);
    student_body.appendChild(tableRow);
});
student_table.appendChild(student_body);
document.body.appendChild(student_table);
