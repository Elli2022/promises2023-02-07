const myPromise = new Promise((resolve, reject) =>{

    const random = Math.round(Math.random()*10);
    console.log(random);

    setTimeout(() =>{

        if(random >= 5) resolve(random);
        else reject('Numret är för litet');
    }, random*1000);
   
});


console.log(myPromise);
myPromise
.then(val => console.log('Promiset är fulfilled med numret', val))
.catch(error => console.log('Promiset är rejected pga: ', error));

setTimeout(() =>{
    console.log('vänta i tre sekunder')
}, 3000);