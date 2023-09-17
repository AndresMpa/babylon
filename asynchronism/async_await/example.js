const doSomethingAsync = () => {
  return new Promise ((resolve, reject) => {
    (true)
      ? setTimeout(() => {
        resolve('Do Something Async')
      }, 3000)
      : reject(new Error('Test Error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

(async () => {
  console.log('Before');
  await doSomething();
  console.log('After');
})()

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  console.log('Before 1');
  await anotherFunction();
  console.log('After 1');
})()
