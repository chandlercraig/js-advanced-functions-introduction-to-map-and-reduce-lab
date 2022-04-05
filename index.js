// Your code here
function mapToNegativize(src){
  let arr = []
  for (let i = 0; i < src.length; i++ ) {
    arr.push(-1 * src[i])
  }
  return arr
}


function mapToNoChange(src){
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i])
  }
  return r
}


function mapToDouble(src){
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(2 * src[i])
  }
  return r
}


function mapToSquare(src){
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i] * src[i])
  }
  return r
}


function reduceToTotal(src, strtPt){
  let total = 0
  if (strtPt) {total = strtPt}
  for (var i in src){
    total += src[i]
  }
  return total
}

function reduceToAllTrue(src){
  let r = src.every(el => el ? true : false);
  return r
}

function reduceToAnyTrue(src){
  const belowThreshold = (currentValue) => currentValue ? true : false;
  return src.some(belowThreshold);
}

