//배열 요소들의 합계 계산하여 출력하기

let ar = [23, 43, 7, 34, 20, 54, 67, 33, 32];
let sum = 0;    //합계 계산용 변수 선언
//while 반복문을 이용하여 배열의 요소를 하나씩 꺼내서(배열에서는 제거됨) 배열의 합계 계산하되
//합계가 100을 넘지 않는 최대값이 되는 지점 출력하기

while(ar.length > 0){
    
    sum+=ar.shift();

    if(sum > 100){
    sum
     
    ar.unshift(ar.pop());
        break;
        
    }
    
    
}

//결과 출력

console.log(`sum of ar = ${sum}`);
console.log(ar);