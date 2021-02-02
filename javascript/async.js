/* async & await 
 * 깔끔한 코딩 스타일을 위한 promise::
 * pendding 현상을 방지하기 위한 수단으로 사용
*/ 

function fetchUser(){
    return new Promise((resolve, reject)=>{
        resolve('winston');
    });
}

//async를 쓰게되면 fetchUser2 가 fetchUser과 같은 기능을 수행한다.
async function fetchUser2(){
    return 'Winston';
}

const user = fetchUser2();
user.then(console.log)
console.log(user);