const all = document.querySelector('body')
const nroNights = document.querySelector('#nigths')
const viajes = document.querySelectorAll('.city')
const calBt = document.querySelector('button')

const inputHotel = document.querySelector('.hotel')
const inputAvion = document.querySelector('.avion')
const inputCoche = document.querySelector('.coche')
const inputResult = document.querySelector('.result')



calBt.onclick = () => {

    const inputNoches = nroNights.value
    inputHotel.texContent = inputNoches


}

function costeHotel(nroNights) {
    if (nroNights >= 1) {
        return nroNights * 140
    } else {
        return 140
    }

}


function alquilerCoche(nroNights) {

}

function costeAvion(nroNights) {

}

costeHotel(nroNights)

console.log(viajes);
console.log(all);