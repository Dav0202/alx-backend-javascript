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
  console.log(`Number of student: ${NUMBER_OF_STUDENTS}`);

  const data_dict = {};
  for (const i in get_student) {
    if (i !== 0) {
      if (!data_dict[get_student[i][3]]) data_dict[get_student[i][3]] = [];

      data_dict[get_student[i][3]].push(get_student[i][0]);
    }
  }

  delete data_dict.field;

  for (const key of Object.keys(data_dict)) {
    console.log(
      `Number of students in ${key}: ${data_dict[key].length}. List: ${data_dict[key].join(', ')}`,
    );
  }
}

module.exports = countStudents;
