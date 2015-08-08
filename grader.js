
exports.letterGrader=function(score){
  var output = "";
  if(score > 100 || score < 0){
    return "that is not a valid input"
  }
  else if(score >= 90 && score <100){
    output += "A"
  }
  else if(score >= 80 && score <90){
    output += "B"
  }
  else if(score >= 70 && score <80){
    output += "C"
  }
  else if(score >= 60 && score <70){
    output += "D"
  }
  else{
    output += "F"
  };
  score % 10 < 4 ? output += "-" : score % 10 > 7 ? output += "+" : output += ""
  return output;
}

exports.average=function(scores){
  num = scores.length;
  var sum = scores.reduce(function(a,b){ return a+b});
  var ave = sum / num;
  return ave
}

exports.median = function(scores){
  var output = 0;
  sorted = scores.sort(function(a,b){ return a-b});
  if(sorted % 2 === 0){
    output += sorted[sorted.length/2] 
    output += sorted[(sorted.length/2) -1]
    output /= 2
    return output
  }
  else{
    output += sorted[Math.floor(sorted.length)/2]
    return output
  };
}

exports.mode = function(array){
 var counter = {}
 var output = 0
 var highfreq = 0
 for(var i = 0; i < array.length; i++){
    if (counter[array[i]] === undefined){
      counter[array[i]] = 1;
    }
    else{
      counter[array[i]] += 1;
    }
  };
  
 for(property in counter){
  if (counter[property] > highfreq){
      highfreq = counter[property]
      output = property
  }
}
  return parseInt(output)
}












