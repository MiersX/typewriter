const sentence = "hello there from lighthouse labs";
let n = 1000;

for (const char of sentence) {


  setTimeout(() => {
    process.stdout.write(char);
  }
    , n += 50);

};

setTimeout(() => {
  console.log('\n');
}, n)
















