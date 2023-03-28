function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const reducer = (arr, item) => arr + item.id;

  const sumIds = students.reduce(reducer, 0);

  return sumIds;
}

export default getStudentIdsSum;
