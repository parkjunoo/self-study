
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    return '사과';
}

async function getBanana(){
    await delay(1000);
    return '바나나';
}

// function pickFruits(){
//     return getApple().then( apple => {
//         return getBanana().then( banana => `${apple} + ${banana}`);
//     });
// }

// promise를 활용하여 서로 독립적이라면 병렬처리가 가능하다.
async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise
    const banana = await bananaPromise;
    return apple + banana;
}

//효율적으로 코드를 짜기 위한 all 을 사용한다.
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then( fruits => fruits.join('+'));
}

pickFruits().then(console.log);
pickAllFruits().then(console.log);

// 둘중 먼저 오는 값을 반환하기
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);