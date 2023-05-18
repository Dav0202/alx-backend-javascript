function calculateNumber(type, a, b) {
  const a_data = Math.round(a);
  const b_data = Math.round(b);

  if (type === 'SUBTRACT') {
    return a_data - b_data;
  }

  if (type === 'DIVIDE') {
    if (b_data === 0) {
      return 'Error';
    }
    return a_data / b_data;
  }

  return a_data + b_data;
}

module.exports = calculateNumber;
