function calculateNumber(a, b) {
  const a_data = Math.round(a);
  const b_data = Math.round(b);

  return a_data + b_data;
}

module.exports = calculateNumber;
