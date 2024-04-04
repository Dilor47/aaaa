const try_p = new Promise((resolve, reject) => {
  let num = 1;
  if(num == 12) {
    resolve('Yeah Bro');
  } else {
    reject('UHHHH bro you SUCK!');
  }
});

try_p.then((message) => alert(message)).catch((message) => alert(message));

function a() {
  return 'p';
}

a.toString = () => 'sss';