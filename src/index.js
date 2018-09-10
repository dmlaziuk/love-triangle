/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  return Math.floor(preferences
    .map((value, index) => preferences[preferences[value - 1] - 1] === index + 1)
    .filter(value => value)
    .length / 3);
};
