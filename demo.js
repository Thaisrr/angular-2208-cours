// Ne fait pas parti du projet Angular


function getData() {
  return new Promise((success, error) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        success('Bravo, voici votre donnée !');
      } else {
        error('Nope, c\'est cassé !')
      }
    }, 2000)
  })
}




console.log('Coucou 1');
let donnee;

// Version 1
getData()
  .then((data) => {
    donnee = data;
    console.log(donnee);
    return getData()
  })
  .then(res => console.log(res))
  .catch((error) => console.error(error))


// version 2 ES6
async function init() {
  const data = await getData();
  console.log(data)
  const res = getData();
  ///
}

init();



console.log('Coucou 2');

console.log(donnee); // undefined
