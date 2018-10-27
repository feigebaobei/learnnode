let a = [1,4,2,54,6,7,3]
let b = [5,2,5,4,3,2,7,9]
function mergeArr (a, b) {
  a = a.sort((x, y) => x - y)
  b = b.sort((x, y) => x - y)
  console.log(a)
  console.log(b)
  let i = 0,
    j = 0,
    iLen = a.length,
    jLen = b.length,
    tempArr = []
  while (i < iLen && j < jLen) {
    if (a[i] > b[j]) {
      tempArr.push(b[j])
      j++
    } else {
      tempArr.push(a[i])
      i++
    }
  }
  if (i >= iLen) {
    tempArr = tempArr.concat(b.slice(j, jLen))
  } else {
    tempArr = tempArr.concat(a.slice(i, iLen))
  }
  console.log(tempArr)
  return tempArr
}
mergeArr(a, b)