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

export function day() {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  let as = document.querySelectorAll("a");
  for (let i = 0; i < as.length; i++) {
    as[i].style.color = "black";
  }
}

export function dayNight(mode) {
  // dayNight 은 html에서 사용하나 위에 night, day는 여기서만 사용
  // export를 붙여 외부에서 사용한다 한거임.
  if (mode === "night") {
    night();
  } else {
    day();
  }
}
