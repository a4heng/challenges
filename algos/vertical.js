let coords = [[5 ,1], [4,2], [3,3], [1,3], [2,2], [0,2], [-1,1]];

function getLine(coord) {
  if(!coord.length) return 0
  coord.sort((a,b) => a[0] - b[0]);
  // console.log(coord)
  let left = 0;
  let right = coord.length - 1;
  while( left < right ) {
    let leftDist = Math.abs(coord[left][0] - coord[left+1][0]);
    let rightDist = Math.abs(coord[right][0] - coord[right-1][0]);
    if(coord[left][1] !== coord[right][1] || leftDist !== rightDist ){
      return 0;
    }
    left++
    right--
  }
  // console.log(coord[left][0], coord[right][0])
  return (coord[left][0]+coord[right][0])/2
}


// 
let sorted = [ [ -1, 1 ], [ 0, 2 ], [ 1, 3 ], [ 2, 2 ], [ 3, 3 ], [ 4, 2 ], [ 5, 1 ] ]
console.log(getLine([]))
console.log(getLine(coords))
console.log(getLine([[1,3]]))

// [1, 2.5, 3,5]
//  |   m    
const TimeSeries1 = [
  { time: 1, metric: 100 },
  { time: 2.5, metric: 50 },
  { time: 3.5, metric: 0 },
];
const TimeSeries2 = [
  { time: 2, metric: 25 },
  { time: 3, metric: 0 },
  { time: 4, metric: 0 },
];

const output = [
  {time: 1, metric: 100},
  {time: 2, metric: 125},
  {time: 2.5, metric: 75},
  {time: 3, metric: 50},
  {time: 3.5, metric: 0},
  {time: 4, metric: 0}
]
// lookup
// constructor
/**
 * 
 */
function addTimeSeries( t1, t2 ) {
  const output = []
  
  t1.getDataPoint().forEach(dataPoint => {
    // const val = t2.lookup(dataPoint.time);
    output.push({
      time: dataPoint.time,
      metric: t2.lookup(dataPoint.time) + dataPoint.metric,
    });
  });

  t2.getDataPoint().forEach(dataPoint => {
    output.push({
      time: dataPoint.time,
      metric: t1.lookup(dataPoint.time) + dataPoint.metric,
    });
  });

  
  return new TimeSeries(output)
}

class TimeSeries {
  //array of objs
  constructor(dataPoints) {
    this.timeSeries = dataPoints.sort((a,b) => a.time - b.time)
  }

  

}