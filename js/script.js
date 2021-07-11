window.onresize = () => { window.location.reload()}
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

let a = document.querySelector(".kids-top-level a");

/* mega menu code for kids */

  let kidsNav = document.querySelector(".kids-top-level");
  let kidsMegaMenu = document.querySelector(".kids-mega");
  
/*   if (viewportWidth > 670) {
    kidsNav.addEventListener("mouseover", function (event) {
       kidsMegaMenu.style.display = "grid"; 
      kidsMegaMenu.style.backgroundColor = "wheat";
 
   
      
    })
    kidsNav.addEventListener("mouseout", function (event) {
      kidsMegaMenu.style.display = "none";
    })
    kidsMegaMenu.addEventListener("mouseover", function (event) {
      kidsMegaMenu.style.display = "grid";
    })
  
    kidsMegaMenu.addEventListener("mouseout", function (event) {
      kidsMegaMenu.style.display = "none";
    })
  } else if (viewportWidth  < 670) {
    a.style.color = "blue";
    kidsNav.addEventListener("click", function (event) {
      kidsMegaMenu.style.display = "grid";
      a.setAttribute("onsubmit", "return false");
      event.preventDefault();
     })
  }
   */
/* mega menu code for women */

const mega = document.querySelector(".kids-mega")

/* var container = document.querySelector(".kids-mega");
var matches =  document.querySelector('.sub-menu > .menu-item > a') */

const KidsMenuLinks = document.querySelectorAll(".kids-mega a")
/* var matches= target.getElementsByTagName('a').style.color = "purple"; */


/* target.forEach(element => element.classList.add('fade-in')) */


if (viewportWidth > 670) {
  kidsNav.addEventListener("mouseover", function (event) {
     kidsMegaMenu.style.display = "grid"; 
    kidsMegaMenu.style.backgroundColor = "wheat";
    kidsMegaMenu.classList.add('max');
    KidsMenuLinks.forEach(element => element.classList.add('fade-in'))
 })
  kidsNav.addEventListener("mouseout", function (event) {
    kidsMegaMenu.classList.remove('max'); 
    KidsMenuLinks.forEach(element => element.classList.remove('fade-in')) 
  })
  kidsMegaMenu.addEventListener("mouseover", function (event) {
    kidsMegaMenu.classList.add('max'); 
    KidsMenuLinks.forEach(element => element.classList.add('fade-in'))
  })

  kidsMegaMenu.addEventListener("mouseout", function (event) {
    kidsMegaMenu.classList.remove('max');
    KidsMenuLinks.forEach(element => element.classList.remove('fade-in')) 
  })
} else if (viewportWidth  < 670) {
  a.style.color = "blue";
  kidsNav.addEventListener("click", function (event) {
    kidsMegaMenu.style.display = "grid";
    a.setAttribute("onsubmit", "return false");
    event.preventDefault();
   })
}


let womensNav = document.querySelector(".women-top-level");
let womensMegaMenu = document.querySelector(".womens-mega");
const womensMenuLinks = document.querySelectorAll(".womens-mega a")

if (viewportWidth  > 670) {
  womensNav.addEventListener("mouseover", function (event) {
    womensMegaMenu.style.display = "grid";
    womensMegaMenu.style.backgroundColor = "wheat";
    womensMegaMenu.classList.add('max');
    womensMenuLinks.forEach(element => element.classList.add('fade-in'))
  })
  womensNav.addEventListener("mouseout", function (event) {
    womensMegaMenu.classList.remove('max');
    womensMenuLinks.forEach(element => element.classList.remove('fade-in'))
  })
  womensMegaMenu.addEventListener("mouseover", function (event) {
    womensMegaMenu.style.display = "grid";
    womensMegaMenu.classList.add('max');
    womensMenuLinks.forEach(element => element.classList.add('fade-in'))
  })
  womensMegaMenu.addEventListener("mouseout", function (event) {
    womensMegaMenu.style.display = "none";
    womensMegaMenu.classList.remove('max');
    womensMenuLinks.forEach(element => element.classList.remove('fade-in'))
  })
} else if (viewportWidth < 670) {
  womensNav.addEventListener("click", function (event) {
    womensMegaMenu.style.display = "grid";
    a.setAttribute("onsubmit", "return false");
    event.preventDefault();
  })
}

/* mega menu code for men */

let mensNav = document.querySelector(".men-top-level");
let mensMegaMenu = document.querySelector(".mens-mega");
const mensMenuLinks = document.querySelectorAll(".mens-mega a")

if (viewportWidth  > 670) {
  mensNav.addEventListener("mouseover", function (event) {
    mensMegaMenu.style.display = "grid";
    mensMegaMenu.style.backgroundColor = "wheat";
    mensMegaMenu.classList.add('max');
    mensMenuLinks.forEach(element => element.classList.add('fade-in'))
  })

  mensNav.addEventListener("mouseout", function (event) {
    mensMegaMenu.classList.remove('max');
    mensMenuLinks.forEach(element => element.classList.remove('fade-in'))
  })

  mensMegaMenu.addEventListener("mouseover", function (event) {
    mensMegaMenu.style.display = "grid";
    mensMegaMenu.classList.add('max');
    mensMenuLinks.forEach(element => element.classList.add('fade-in'))
  })

  mensMegaMenu.addEventListener("mouseout", function (event) {
    mensMegaMenu.classList.remove('max');
    mensMenuLinks.forEach(element => element.classList.remove('fade-in'))
  })
} else if (viewportWidth < 670) {
  mensNav.addEventListener("click", function (event) {
    mensMegaMenu.style.display = "grid";
    a.setAttribute("onsubmit", "return false");
    event.preventDefault();
  })
}


/* mega menu code for new releases */

let newNav = document.querySelector(".new-top-level");
let newMegaMenu = document.querySelector(".new-mega");
const newMenuLinks = document.querySelectorAll(".new-mega a")

if (viewportWidth  > 670) {
newNav.addEventListener("mouseover", function (event) {
  newMegaMenu.style.display = "grid";
  newMegaMenu.style.backgroundColor = "wheat";
  newMegaMenu.classList.add('max');
  newMenuLinks.forEach(element => element.classList.add('fade-in'))
})
newNav.addEventListener("mouseout", function (event) {
  newMegaMenu.classList.remove('max');
  newMenuLinks.forEach(element => element.classList.remove('fade-in'))
})
newMegaMenu.addEventListener("mouseover", function (event) {
  newMegaMenu.style.display = "grid";
  newMegaMenu.classList.add('max');
  newMenuLinks.forEach(element => element.classList.add('fade-in'))
})
newMegaMenu.addEventListener("mouseout", function (event) {
  newMegaMenu.classList.remove('max');
  newMenuLinks.forEach(element => element.classList.remove('fade-in'))
})
} else if (viewportWidth  < 670) {
  newNav.addEventListener("click", function (event) {
    newMegaMenu.style.display = "grid";
    a.setAttribute("onsubmit", "return false");
    event.preventDefault();
  })
}


