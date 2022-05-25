var firstCol = document.getElementById('colone1');
var secondCol = document.getElementById('colone2');
var thirdCol = document.getElementById('colone3');
var container = document.getElementById('ads');
var imagineFirst = document.getElementById('imgFirst');
var imagineTwo = document.getElementById('imgTwo');
var imagineThird = document.getElementById('imgThird');


function getColor() {
    const colors = ['00', '0F', '5F', 'AF', 'FF'];
    const red = colors[getActiveIndex(firstCol)];
    const green = colors[getActiveIndex(secondCol)];
    const blue = colors[getActiveIndex(thirdCol)];
    return `#${red}${green}${blue}`;
}

function resetColors() {
    firstCol.style.borderColor = 'transparent';
    secondCol.style.borderColor = 'transparent';
    thirdCol.style.borderColor = 'transparent';
}

function getActiveIndex(element) {
    let i = 0;
    const inputs = element.getElementsByTagName('input');
    for (; i < 5; i++) {
        if (inputs.item(i).checked) {
            return i;
        }
    }

    return i < 5 ? i : 0;
}

firstCol.addEventListener('click', () => {
    resetColors();
    firstCol.style.borderColor = getColor();
});
secondCol.addEventListener('click', () => {
    resetColors();
    secondCol.style.borderColor = getColor();
});
thirdCol.addEventListener('click', () => {
    resetColors();
    thirdCol.style.borderColor = getColor();
});

function getImagin(index) {

  let element = imagineFirst;
  if (index === 1) {
    element = imagineTwo;
  }

  if (index === 2) {
    element = imagineThird;
  }

  const obj = {
    firstCol: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2560px-Flag_of_Poland.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/640px-Flag_of_Monaco.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Bohemia.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flag_of_Tirol_and_Upper_Austria.svg/240px-Flag_of_Tirol_and_Upper_Austria.svg.png",
    ],
    secondCol: [
      "https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZGVubWFya19zY3JlZW5fMV8xNTkyNjAyMjg4XzAxNA/screen-1.jpg?fakeurl=1&type=.jpg",
      "https:/upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png",
      "https:/upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/250px-Flag_of_Norway.svg.png",
      "https:/www.norden.org/sites/default/files/styles/content_size_800/public/images/Finsk%2520flag106604.jpeg?itok=gSnwOkGm",
      "https://media.istockphoto.com/vectors/sweden-flag-vector-id973472848?k=20&m=973472848&s=612x612&w=0&h=uZ9kJ8vIxxsOOtUfNZ2pYTbIl3I8tBFBbycCpeRLXsw=",
    ],
    thirdCol: [
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png",
      "https:/upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/2560px-Flag_of_Slovakia.svg.png",
      "https:/upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/2560px-Flag_of_Slovenia.svg.png",
      "https:/upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/800px-Flag_of_Serbia.svg.png?20180923010420",
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
    ],
  };
  const key = Object.keys(obj)[index];

element.src = obj[key][getActiveIndex(window[key])];
}

function getNume(index) {
  const obj = {
    firstCol: [
      "Polonia",
      "Indonesia",
      "Monaco",
      "Bogemia",
      "Austria de sus",
    ],
    secondCol: [
      "Dania",
      "Islanda",
      "Norvegia",
      "Finlanda",
      "Suedia",
    ],
    thirdCol: [
      "Rusia",
      "Slovakia",
      "Slovenia",
      "Serbia",
      "Niderlanda",
    ],
  };
  const key = Object.keys(obj)[index];

document.getElementById("boxaFlag").innerHTML =  obj[key][getActiveIndex(window[key])];
}

function al() {
  imagineFirst.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2560px-Flag_of_Poland.svg.png";
  imagineTwo.src = "https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZGVubWFya19zY3JlZW5fMV8xNTkyNjAyMjg4XzAxNA/screen-1.jpg?fakeurl=1&type=.jpg";
  imagineThird.src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png";
  firstCol.style.borderColor = 'transparent';
  secondCol.style.borderColor = 'transparent';
  thirdCol.style.borderColor = 'transparent';
  document.getElementById("boxaFlag").innerHTML  = "Flag";
  const inputs = firstCol.getElementsByTagName('input');
  inputs.item(0).checked = true;
  const inputss = secondCol.getElementsByTagName('input');
  inputss.item(0).checked = true;
  const inputsss = thirdCol.getElementsByTagName('input');
  inputsss.item(0).checked = true;
}
