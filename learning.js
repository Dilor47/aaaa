const try_p = new Promise((resolve, reject) => {
  let num = 1;
  if(num == 12) {
    resolve('Yeah Bro');
  } else {
    reject('UHHHH bro you SUCK!');
    console.log('XXXXXX Bddd losee');
  }
});

try_p.then((message) => alert(message)).catch((message) => alert(message));

function a() {
  return 'Made some changes';
}

a.toString = () => 'sss';vfvfvf