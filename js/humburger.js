function show_nav() {
    console.log("inside show_nav")
    let nav = document.getElementById('nav');
    var first = true;
    if (nav.classList[nav.classList.length - 1] == "humburger_clicked") {
        nav.classList.remove("humburger_clicked");
        first = false
      } else {
        nav.classList.add("humburger_clicked");
        first = true
      }
}

function currentPage() {
  
  let navList = document.getElementsByClassName("header__anchor")
  let currentLocation = location.href
  let size = navList.length

  for (let i = 0; i < size; i++) {
      if(list[i].href == currentLocation) {
          list[i].classList.add("a_active")
      }
  }
}
window.onload = currentPage