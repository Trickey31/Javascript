function makeTimer(timer = 0, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}
async function run() {
  const timer1 = makeTimer(1000, "first time");
  // console.log(timer1);
  const timer2 = makeTimer(2000, "second time");
  // console.log(timer2);
  const timer3 = makeTimer(3000, "third time");
  // console.log(timer3);
  const timerAll = await Promise.all([timer1, timer2, timer3]).then((data) =>
    console.log(data)
  );
}
run();
