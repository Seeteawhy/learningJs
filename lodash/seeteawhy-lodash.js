var seeteawhy = function () {
  function compact(ary) {//创建一个新数组，包含原数组中所有的非假值元素：遍历老数组，push新数组真值
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