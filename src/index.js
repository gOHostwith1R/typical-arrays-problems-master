const qsort = (array) => {
	if (array.length == undefined || array.length==0) {
		return [];
	} else if (array.length==1){
return array;
  } else {
		const point = Math.floor(Math.random() * array.length);
		const point1 = array[point];
		const less = array.filter((value, index) => {
			const isPoint = index === point;
			return !isPoint && (value <= point1);
		});
		const greater = array.filter(value => value > point1);
	
		return [...qsort(less), point1, ...qsort(greater)];
	}
};
exports.min = function min (array)  {
let array1=(qsort(array));
console.log(array1[0]);
 return array1[0];
}

exports.max = function max (array) {
  let array1=(qsort(array));
  return array1[array1.length-1];
}

exports.avg = function avg (array) {
  let sum=0;
  if (array.length == undefined ) {
		return [];
	} else if (array.length==1){
return array;
  } else {
    for(let i=0;i<array.length;i++){
      sum+=array[i];
    }
  }
  let avg=sum/(array.length);
  return avg;
}
