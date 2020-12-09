var seeteawhy = function () {
  //-----------------------数组-------------------------
  //将数组（array）拆分成多个 size 长度的区块，
  //并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，
  //那么最后剩余的元素将组成一个区块。

  //定义l为数组长度，如果剩余长度大于size，循环执行拆分操作，如果小于size，剩余元素为最后一个数组
  /*
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
  */

  //将原数组截成length/size段，slice进新数组
  function chunk(array, size) {
    const length = array == null ? 0 : array.length
    
    if (!length || size < 1) {
      return []
    }
    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))
    while (index < length) {
      result[resIndex++] = array.slice(index,(index += size)) 
    }
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

  //先处理边缘情况，再用slice切
  function drop(array, n = 1) { 
    if (n < 0) n = 0
    let length = array == null ? 0 : array.length
    if (length < n || length < 1) return []
    let result = array.slice(n)
    return result
  }

  //先处理边缘情况，再用slice从后往前切
  function dropRight(array, n = 1) {
    if (n < 0) n = 0
    let length = array == null ? 0 : array.length
    if (length < n || length < 1) return []
    let result = array.slice(0, length - n)
    return result
  }

  //遍历start到end，令数组元素为value
  function fill(array, value, start = 0, end = array.length) {
    const length = array == null ? 0 : array.length
    if (start < 0) {
      start = 0
    }
    if (end > length) {
      end = length
    }
    if (length < 1 || end < start) return []
    for (let i = start; i < end; i++){
      array[i] = value
    }
    return array
  }

  //遍历最外层数组，找出2层及以上的元素，将外层元素和展开数组后的元素push到新数组
  function flatten(array) {
    let result = []
    for (let i = 0; i < array.length; i++){
      if (typeof (array[i]) == 'number') {
        result.push(array[i])
      } else { //suppose they are objects
        for (let j = 0; j < array[i].length; j++){
          result.push(array[i][j])
        }
      }
    }
    return result
  }

  //遍历数组，把每个键值对加到新建到对象，返回对象
  function fromPairs(array) {
    let newobj = {}
    for (let i = 0; i < array.length; i++){
      newobj[array[i][0]] = array[i][1]
    }
    return newobj
  }






  

  //返回对象
  return {
    compact,
    chunk,
    drop,
    dropRight,
    fill,
    flatten,
    fromPairs
  }
}()