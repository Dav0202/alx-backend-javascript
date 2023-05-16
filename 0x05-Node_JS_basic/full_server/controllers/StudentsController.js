import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        const get_student = [];

        let msg;

        get_student.push('This is the list of our students');

        for (const key of Object.keys(fields)) {
          msg = `Number of students in ${key}: ${
            fields[key].length
          }. List: ${fields[key].join(', ')}`;

          get_student.push(msg);
        }
        response.send(200, `${get_student.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }
