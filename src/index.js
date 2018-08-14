function test() {
    return true
        ? {
              test1: 'test1',
              test2: 'test2'
          }
        : {
              test1: 'test1',
              test2: 'test2'
          };
}

console.log(test());
