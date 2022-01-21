const toggleBtn = document.querySelector(".menu_bar");

let toggleNavState = false; // 토글 상태

const toggleNav = () => {
  const sideBar = document.querySelector(".nav_sidebar");
  const sideBarUl = document.querySelector(".nav_sidebar ul");
  const sideBarTitle = document.querySelector(".nav_sidebar span");
  const sideBarLinks = document.querySelectorAll(".nav_sidebar a");

  if (toggleNavState === false) {
    sideBarUl.style.visibility = "visible";
    sideBar.style.width = "300px";
    sideBar.style.padding = "0 10px";
    sideBarTitle.style.opacity = "0.5";

    let arrayLength = sideBarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      sideBarLinks[i].style.opacity = "1";
    }

    toggleNavState = true;
  } else {
    sideBar.style.width = "0";
    sideBar.style.padding = "0";
    sideBarTitle.style.opacity = "0";

    let arrayLength = sideBarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      sideBarLinks[i].style.opacity = "0";
    }

    sideBarUl.style.visibility = "hidden";
    toggleNavState = false;
  }
};

toggleBtn.addEventListener("click", toggleNav);
