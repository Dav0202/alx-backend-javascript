const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const data = [];
      let msg;

      const content = data.toString().split('\n');

      let get_student = content.filter((item) => item);

      get_student = get_student.map((item) => item.split(','));

      const NUMBER_OF_STUDENTS = get_student.length ? get_student.length - 1 : 0;
      msg = `Number of students: ${NUMBER_OF_STUDENTS}`;
      console.log(msg);

      data.push(msg);

      const fields = {};
      for (const i in get_student) {
        if (i !== 0) {
          if (!fields[get_student[i][3]]) fields[get_student[i][3]] = [];

          fields[get_student[i][3]].push(get_student[i][0]);
        }
      }

      delete fields.field;

      for (const key of Object.keys(fields)) {
        msg = `Number of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;

        console.log(msg);

        data.push(msg);
      }
      resolve(data);
    });
  });
}

module.exports = countStudents;
