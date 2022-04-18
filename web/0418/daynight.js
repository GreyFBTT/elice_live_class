function night() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
  // $('body').css('background-color', 'black');
  //   $('body').css('color','white'); //JQuery 사용
  let as = document.querySelectorAll("a");
  for (let i = 0; i < as.length; i++) {
    as[i].style.color = "white";
  }
  // $('a').css('color','white');
}

function day() {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  let as = document.querySelectorAll("a");
  for (let i = 0; i < as.length; i++) {
    as[i].style.color = "black";
  }
}

function dayNight(mode) {
  if (mode === "night") {
    night();
  } else {
    day();
  }
}
