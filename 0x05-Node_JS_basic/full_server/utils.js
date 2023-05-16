const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err));
        return;
      }
      const get_data = data.toString().split('\n');

      let get_student = get_data.filter((item) => item);

      get_student = get_student.map((item) => item.split(','));

      const fields = {};
      for (const i in get_student) {
        if (i !== 0) {
          if (!fields[get_student[i][3]]) fields[get_student[i][3]] = [];

          fields[get_student[i][3]].push(get_student[i][0]);
        }
      }

      delete fields.field;

      resolve(fields);

    });
  });
}

export default readDatabase;
