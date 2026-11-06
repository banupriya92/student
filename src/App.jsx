import React, { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Sangeetha",
      course: "Python Full Stack",
      age: 28,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Nikitha",
      course: "Python Full Stack",
      age: 23,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Yamuna",
      course: "Python Full Stack",
      age: 22,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=200&fit=crop",
    },
  ]);

  const addStudent = () => {
    if (
      studentName.trim() === "" ||
      course.trim() === "" ||
      age.trim() === ""
    ) {
      alert("Please enter all student details");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: studentName,
      course: course,
      age: age,
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=200&fit=crop",
    };

    alert("Form Submitted")
    setStudents([...students, newStudent]);

    // // Clear input fields
    // setStudentName("");
    // setCourse("");
    // setAge("");
  };

  const viewDetails = (student) => {
    alert(
      `Student Details\n\nName: ${student.name}\nCourse: ${student.course}\nAge: ${student.age}`
    );
  };

  return (
    <div className="main-container">
      <h1>Student Management System</h1>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={addStudent}>ADD STUDENT</button>
      </div>

      {/* Student List */}
      <h2>Student list</h2>

      <div className="student-container">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <img src={student.image} alt={student.name} />

            <h3>{student.name}</h3>

            <p>
              <strong>Course : {student.course}</strong>
            </p>

            <p>
              <strong>Age : {student.age}</strong>
            </p>

            <button
              className="view-button"
              onClick={() => viewDetails(student)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;