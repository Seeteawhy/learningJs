var seeteawhy = function () {
  //-----------------------数组-------------------------


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

  function difference(array) { //get same items from other arguments, then kill them
    let l = arguments.length
    let comparison = []
    for (let i = 1; i < l; i++){
      arguments[i].forEach(item => {
        if (array.indexOf(item) >= 0) {
          comparison.push(item)
        }
      })    
    }
    let result = []
    array.forEach(item => {
      if (comparison.indexOf(item) < 0) {
        result.push(item)
      }
    })
    return result
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

  function flattenDeep(array) {
    let result = []
    function reFlatten(array) {
      if (!Array.isArray(array)) {
        return array
      } 
      array.forEach(function (elem) {
        if (Array.isArray(elem)) {
          reFlatten(elem)
        } else {
          result.push(elem)
        }
      })
      } 
      reFlatten(array)
    return result
  }
  
  function flattenDepth(array, depth = 1) {
    let result = []
    
    function reFlatten(array) {
      if (!Array.isArray(array)) {
        return array
      } 
      array.forEach(function (elem) {
        if (Array.isArray(elem) && depth) {
          depth--
          reFlatten(elem)
        } else {
          result.push(elem)
        }
      })
      } 
      reFlatten(array)
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

  //get first element in array
  function head(array) {

      return array[0]

  }

  function indexOf(array, value, fromidx = 0) {//Js
    for (let i = fromidx; i < array.length; i++){
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }

  //delete the last element of the array
  function initial(array) {
    array.length -= 1
    return array
  }

  function join(array, separator = ',') {//Js
    let resultString = ''
    for (let i = 0; i < array.length-1; i++){
      resultString += array[i]+''+separator //string
    }
    resultString += array[array.length-1]
    return resultString
  }

  function last(array) {
    return (array[array.length - 1])
  }

  function lastIndexOf(array, value, fromidx = array.length-1) {//Js
    for (let i = fromidx; i > 0; i--){
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }

  function pull(array) {//splice from end to start
    let l = arguments.length
    for (let i = 1; i < l; i++){
      for (let j = array.length - 1; j >= 0; j--){
        if (array[j] === arguments[i]) {
          array.splice(j,1)
        }
      }
      
    }
    return array
  }

  function reverse(array) {
    var temp = 0
    var j = array.length -1
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      temp = array[i]
      array[i] = array[j]
      array[j--] = temp  
    }
    return array
  }

  function sortedIndex(array, value) {//binary search
    let left = 0
    let right = array.length - 1
    while (left <= right ) {
      var mid = (right + left) >> 1
      if (array[mid] >= value) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return left
  }
  function union(...array) {

    return Array.from(new Set([].concat(...array)))
  }

  function uniq(array) {
    return Array.from(new Set(array))
  }
  //

  function concat(array) {//push the flatten array / num directly to the new array
    let l = arguments.length
    let result = []
    for (let i = 0; i < l; i++){
      if (Array.isArray(arguments[i])) {
        arguments[i].forEach((item) => {
        result.push(item)
        })        
      } else {
        result.push(arguments[i])
      }
    }
    return result
  }


  //---------------------------------math-----------------------------------
  function max(array) {
    if (array.length === 0) return undefined
    let maxn = -Infinity
    for (let i = 0; i < array.length; i++){
      if (array[i] > maxn) {
        maxn = array[i]
      }
    }
    return maxn
  }

  function min(array) {
    if (array.length === 0) return undefined
    let min = Infinity
    for (let i = 0; i < array.length; i++){
      if (array[i] < min) {
        min = array[i]
      }
    }
    return min
  }   

  function sum(array) {
    let result = []
    result = array.reduce((pre, cur) => {
      return pre + cur
    })
    return result
  }
 








  

  //返回对象
  return {
    compact,
    chunk,
    difference,
    drop,
    dropRight,
    fill,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    join,
    last,
    lastIndexOf,
    pull,
    reverse,
    sortedIndex,
    union,
    uniq,
    concat,
    max,
    min,
    sum,

  }
}()