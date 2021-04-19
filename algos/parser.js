function parser(ip){
  let result = []
  let input = ip.split(':')
  let isleading = input[0]==='';
  for(let i =0; i<input.length; i++){
    // if(input[0]==='') isleading = true
    if(input[i].length > 4){
      let chunk = input[i].split('.').map(el => Number(el))
      result.push(...chunk )
    }else{
      let chunk = '0'.repeat(4-input[i].length) + input[i]
      result.push(parseInt(chunk.slice(0,2),16), parseInt(chunk.slice(2),16))
    }
  }
    return isleading ? new Array(16-result.length).fill(0).concat(result): result.concat(new Array(16-result.length).fill(0))
}
console.log(parser('1234:abcd::0000:0102:0000:0000:fffe'))
// console.log(parseIV6('234:abcd:0:0000:0102:0000:0000:fffe'))
console.log(parser('::192.128.0.1'))
console.log(parser('::c080:1'))
console.log(parser('123:456::'))
// => [1 35 4 86 0 0 0 0 0 0 0 0 0 0 0 0]'))

function eddington(arr) {
  arr.sort((a,b)=> b-a);
  let count = 0;
  for( let i = 0; i< arr.length; i++){
    if(i+1 >= arr[i]) {
      count = i+1;
      break;
    }
    count = i+1
  }
  return count
}
console.log(eddington([2,2,2,5,5])) //3
console.log(eddington([99,100,101]))//3
console.log(eddington([3,2,1]))//2
console.log(eddington([]))//0
// 3 2 1