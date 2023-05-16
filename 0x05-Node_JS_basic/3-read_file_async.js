const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const response = [];
      let msg;

      const req = data.toString().split('\n');

      let get_student = req.filter((item) => item);

      get_student = get_student.map((item) => item.split(','));

      const NUMBER_OF_STUDENTS = get_student.length ? get_student.length - 1 : 0;
      msg = `Number of students: ${NUMBER_OF_STUDENTS}`;

      response.push(msg);

      const data_dict = {};
      for (const i in get_student) {
        if (i !== 0) {
          if (!data_dict[get_student[i][3]]) data_dict[get_student[i][3]] = [];

          data_dict[get_student[i][3]].push(get_student[i][0]);
        }
      }

      delete data_dict.field;

      for (const key of Object.keys(data_dict)) {
        msg = `Number of students in ${key}: ${
          data_dict[key].length
        }. List: ${data_dict[key].join(', ')}`;

        response.push(msg);
      }
      resolve(response);
    });
  });
}

module.exports = countStudents;
