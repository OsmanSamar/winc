const amIluky =new Promise ((resolve, reject)=>{

if(Math.random() < 0.99)
{
    reject(new Error('You are unlucky'));
}
resolve('yes');
});

amIluky
.then((fulfilledValue)=> console.log(fulfilledValue))
.catch((error) => console.log("Guess I was unlucky..", error));