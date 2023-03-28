function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }

  const studentCity = students.filter((student) => student.location === city);

  const studentsGrade = studentCity.map((student) => {
    const gradeFilter = newGrades.filter(
      (newGrade) => newGrade.studentId === student.id,
    );

    let grade;

    if (gradeFilter[0]) {
      grade = gradeFilter[0].grade;
    } else {
      grade = 'N/A';
    }

    return {
      ...student,
      grade,
    };
  });

  return studentsGrade;
}

export default updateStudentGradeByCity;
