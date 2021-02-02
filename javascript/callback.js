/**
 *  javascript 리뷰 및 공부
 * 1. CallBack 함수 이해하기
 * 2. 사용법 공부
 * 3. javascript 기본 문법 리뷰
 */

console.log('111111');

// 동기적 callback
// 실행시 hoisting 이 일어나 함수 구현부가 맨위로 올라감
function printSynchronous(print){ //param 으로 함수를 넘겨 준다.
    print();
} 
// 그 후 함수를 호출함
printSynchronous(()=> console.log("hi"));


// 비동기적 callback
// 실행시 hoisting 이 일어나 함수 구현부가 맨위로 올라감
function printAsynchronous(print, timeOut){
    setTimeout(print, timeOut);
}

printAsynchronous(()=> console.log("hi2"), 2000);

class UserStorage{
    loginUser(id, password, onSuccess, err){
        setTimeout(()=>{
            if( (id === 'ellie' && password === '1111') ||
                (id === 'coder' && password === '2222') ){
                onSuccess(id)
            }else {
                err(new Error('not found'));
            }
        },2000)
    }

    getRoles(user, onSuccess, err){
        setTimeout(()=>{
            if (user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }else{
                Error(new Error('no access'));
            }
        })

    }
}

const userStorage = new UserStorage();
const id = 'ellie';
const password = '1111';
userStorage.loginUser(
    id, 
    password, 
    user =>{
        userStorage.getRoles(
            user,
            userWithRole => {
                console.log(`hellow ${userWithRole.name}`)
            }, 
            err =>{
                console.log("err");
            }
        );
    },
    error =>{
        console.log('err');
    }
)


