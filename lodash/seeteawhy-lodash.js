var seeteawhy = function () {
  
  //将数组（array）拆分成多个 size 长度的区块，
  //并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，
  //那么最后剩余的元素将组成一个区块。
  //定义l为数组长度，如果剩余长度大于size，循环执行拆分操作，如果小于size，剩余元素为最后一个数组
  function chunk(array, size) {
    let l = array.length
    let result = []
    let temp = []
    while (l > size) {
      for (let i = 0; i < size; i++){
        temp.push(array[0])
        
        array.shift()
      }
      result.push(temp) 
      l -= size
      temp = []
    } 
    result.push(array)
    return result
  }
  
  
  
  
  //创建一个新数组，包含原数组中所有的非假值元素：遍历老数组，push新数组真值
  function compact(ary) {
    let newArray = []
    for (let i = 0; i < ary.length; i++){
      if (ary[i]) {
        newArray.push(ary[i])
      }
    }
    return newArray;
  }
  return {
    compact,
  }
}()