const fs = require('fs');

function countStudents(path) {
  let req;

  try {
    req = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  req = req.toString().split('\n');

  let get_student = req.filter((item) => item);

  get_student = get_student.map((item) => item.split(','));

  const NUMBER_OF_STUDENTS = get_student.length ? get_student.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  const fields = {};
  for (const i in get_student) {
    if (i !== 0) {
      if (!fields[get_student[i][3]]) fields[get_student[i][3]] = [];

      fields[get_student[i][3]].push(get_student[i][0]);
    }
  }

  delete fields.field;

  for (const key of Object.keys(fields)) {
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[
        key
      ].join(', ')}`,
    );
  }
}
module.exports = countStudents;
