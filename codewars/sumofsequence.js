
const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;
    let temp = 0;
    for (var i=begin; i<=end; i+=step) {
      temp = temp + i;
    }
    return temp
  }
  
  // sequenceSum(2,2,2) === 2
  // sequenceSum(2,6,2) === 12 // 2 + 4 + 6
  // sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
  // sequenceSum(1,5,3) === 5 // 1 + 4
  
  sequenceSum(2,6,2)
  
  // my original solution
  // const sequenceSum = (begin, end, step) => {
  //   // May the Force be with you
  //   // return (begin+step)
  //   let sequence = [];
  
  //   if (begin > end) {
  //     return 0
  //     };
  
  //   const reducer = (accum, currentVal) => accum + currentVal;
  
  //   for (var i=begin; i<=end; i = i+step) {
  //     sequence.push(i)
  //   }
  
  //   let sequenceSum = sequence.reduce(reducer);
  
  //   return sequenceSum
  
  
  // };
  
  // sequenceSum(1,5,3)
  
  
  
  
  // const sequenceSum = (begin, end, step) => {
  //   let temp = 0;
  //   for (let i = begin; i <= end; i += step) {
  //     temp += i;
  //   }
  //   return temp;
  // };
  
  // sequenceSum(2,2,2) === 2
  // sequenceSum(2,6,2) === 12 // 2 + 4 + 6
  // sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
  // sequenceSum(1,5,3) === 5 // 1 + 4