/*function findMatching(arr, name){
    return (arr.filter(x => x === name));
  };
  findMatching(drivers, "Bobby");*/
  function findMatching(arr, name){
    return arr.filter(function(x){
      return  name.toLowerCase() === x.toLowerCase()});
    };
    //findMatching(drivers, "Bobby")
  
    function fuzzyMatch(arr, name){
      return arr.filter(function (x){
        return name[0] === x[0]
      })
    }

    function matchName(arr, name){
      return arr.filter(function (x){
        return x.name === name;
      })
    }