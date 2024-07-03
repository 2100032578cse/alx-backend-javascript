/**
 * @author Uwizeyimana Sandrine <https://github.com/2100032578cse>
 * Retrieves a list of students.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
