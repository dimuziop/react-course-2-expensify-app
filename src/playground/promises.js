const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Pat',
            surname: 'Di Muzio'
        });
        reject('somehting went wrong');
    }, 1500);
});

console.log('before');

/*promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error:', error);
});*/

promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log('error:', error);
});


console.log('after');