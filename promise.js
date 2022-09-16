const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) =>  {
  const checkTheaterIXX = await promiseTheaterIXX(emosi)
  const checkTheaterVGC = await promiseTheaterVGC(emosi)

  let penontonIXX = checkTheaterIXX.filter(function(element){
    return element.hasil == emosi;
  }).length

  let penontonVGC = checkTheaterVGC.filter(function(element){
    return element.hasil == emosi;
  }).length

  let penonton = penontonIXX + penontonVGC

  return penonton 
};

module.exports = {
  promiseOutput,
};
