/* promise란? 비동기적인 일을 수행할때 
   callback함수를 대용해 편하게 사용가능

   1. state 
            준비        완료        거절
        - pendding -> fulfilled or rejected
   2. producer, consumer
 */

 // 성공시 resolve , 실패시 reject
 // !!! 새로운 promise가 만들어졌을때 -> executor가 자동적으로 실행된다 !!!
 // 불필요한 통신의 가능성이 있음
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('winston');
        //reject(new Error('err 발생'));
    }, 2000);
});

// consumers
promise.then((value)=> {
    console.log(value);
}).catch(err =>{
    console.log(err);
}).finally(()=>{
    console.log('111');
})


// promise chaning
const fetchNumber = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve(1), 1000);
})

fetchNumber.then(num => num *2).then(num => num * 3).then(num =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num-1),1000);
    })
    .then(num => console.log(num));
})
