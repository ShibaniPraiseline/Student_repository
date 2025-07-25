const attendanceList=[]

// func to mark attendance
function markAttendance(name){
    attendanceList.push(name);
    console.log(`${name} has been marked present.`);
}

//Example: mark attendance when form is submitted
document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const studentName = this.student.value.trim();
    if (studentName === "") {       
    markAttendance(studentName);
    alert(`${studentName} attendance marked successfully!`);
    this.reset(); // Reset the form after submission
    }
});