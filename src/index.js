
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
/*let array= [2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27];
min(array);*/
/*
exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
*/