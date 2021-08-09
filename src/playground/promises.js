const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
  // resolve({
  //   name2: 'Andrew',
  //   age: 26
  // });
  reject('Something went wrong');
  }, 3000);
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error: ' + error)
});


console.log('after');