let sampleDbResRows = [
  {month: 4, year: 2024},
  {month: 5, year: 2024},
  {month: 6, year: 2024},
]
// [[2024, 4], [2024, 5], [2024, 6]]

function convertToRowsWeHave(dbResRows) {
  return dbResRows.map(row => [row.year, row.month])
}

const test = convertToRowsWeHave(sampleDbResRows)

console.log(test)