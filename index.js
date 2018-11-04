fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(col, callback) {
      if (typeof(col) === 'object'){
        for (prop in col) {
          callback(col[prop]);
        }
      } else {
        // for (i = 0; i < col.length; i++){
        //   callback(col[i]);
        // }
        col.forEach(callback(element))
      }
      return col;
    },

    map: function(col, callback) {
      let newArray = []
      if (typeof(col) === 'object'){
        for (prop in col) {
          newArray.push(callback(col[prop]))
        }
      } else {
      for (let i=0; i < col.length; i++) {
        newArray.push(callback(col[i]))
      }
    }
      return newArray;
    },

    reduce: function(col, callback, acc=0) {
      for (i = 0; i < col.length; i++){
        acc = callback(acc, col[i], col);
      }
      return acc;
    },

    find: function(col, callback) {
      for (i = 0; i < col.length; i++){
        if (callback(col[i])=== true) {
          return col[i];
        }
      }
      return undefined;
    },

    filter: function(col, callback) {
      let newArr = []
      for (i = 0; i < col.length; i++){
        if (callback(col[i])=== true) {
          newArr.push(col[i]);
        }
      }
      return newArr;

    },

    size: function(col) {
      let count = 0
      if (typeof(col)==='object') {
        for(key in col) {
          count += 1;
        }
      } else {
        for(i=0; i < col.length; i++) {
          count += 1
        }
      }
      return count;
    },

    first: function(col, n=0) {
      if (n > 0) {
        return col.slice(0, n);
      } else {
        return col.slice(0, 1)[0];
      }
    },

    last: function(col, n=0) {
      if (n > 0) {
        x = (n*-1)
        return col.slice(x);
      } else {
        return col.slice(-1)[0];
      }
    },


  compact: function (arr){
    let copyArr = []
    for(idx in arr){
      if (!!arr[idx]){
        copyArr.push(arr[idx])
      }
    }
    return copyArr
  },

  sortBy: function(arr, callback){
    let newArr = arr.slice()
    let sortedArr = newArr.sort(function(idx, idx2) {
      return callback(idx) - callback(idx2);
    })
    return sortedArr;
  },

  flatten: function(arr, shallow = false) {
    let newArr = []
    // if (shallow === true) {
      for(ele in arr) {
        if (Array.isArray(arr[ele])) {
          return this.flatten(ele);
        } else {
          newArr.push(arr[ele]);
        }
      }
      return newArr
    // }
  },
//
  }
})()

fi.libraryMethod()
