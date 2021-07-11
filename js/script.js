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

var target = document.querySelectorAll("#menu-kids-menu a")
/* var matches= target.getElementsByTagName('a').style.color = "purple"; */
console.log(target)

/* target.forEach(element => element.classList.add('fade-in')) */


if (viewportWidth > 670) {
  kidsNav.addEventListener("mouseover", function (event) {
     kidsMegaMenu.style.display = "grid"; 
    kidsMegaMenu.style.backgroundColor = "wheat";
    kidsMegaMenu.classList.add('max');
    target.forEach(element => element.classList.add('fade-in'))
 })
  kidsNav.addEventListener("mouseout", function (event) {
    kidsMegaMenu.classList.remove('max'); 
    target.forEach(element => element.classList.remove('fade-in')) 
  })
  kidsMegaMenu.addEventListener("mouseover", function (event) {
    kidsMegaMenu.classList.add('max'); 
    target.forEach(element => element.classList.add('fade-in'))
  })

  kidsMegaMenu.addEventListener("mouseout", function (event) {
    kidsMegaMenu.classList.remove('max');
    target.forEach(element => element.classList.remove('fade-in')) 
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

if (viewportWidth  > 670) {
  womensNav.addEventListener("mouseover", function (event) {
    womensMegaMenu.style.display = "grid";
    womensMegaMenu.style.backgroundColor = "wheat";
  })
  womensNav.addEventListener("mouseout", function (event) {
    womensMegaMenu.style.display = "none";
  })
  womensMegaMenu.addEventListener("mouseover", function (event) {
    womensMegaMenu.style.display = "grid";
  })
  womensMegaMenu.addEventListener("mouseout", function (event) {
    womensMegaMenu.style.display = "none";
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

if (viewportWidth  > 670) {
  mensNav.addEventListener("mouseover", function (event) {
    mensMegaMenu.style.display = "grid";
    mensMegaMenu.style.backgroundColor = "wheat";
  })

  mensNav.addEventListener("mouseout", function (event) {
    mensMegaMenu.style.display = "none";
  })

  mensMegaMenu.addEventListener("mouseover", function (event) {
    mensMegaMenu.style.display = "grid";
  })

  mensMegaMenu.addEventListener("mouseout", function (event) {
    mensMegaMenu.style.display = "none";
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

if (viewportWidth  > 670) {
newNav.addEventListener("mouseover", function (event) {
  newMegaMenu.style.display = "grid";
  newMegaMenu.style.backgroundColor = "wheat";
})
newNav.addEventListener("mouseout", function (event) {
  newMegaMenu.style.display = "none";
})
newMegaMenu.addEventListener("mouseover", function (event) {
  newMegaMenu.style.display = "grid";
})
newMegaMenu.addEventListener("mouseout", function (event) {
  newMegaMenu.style.display = "none";
})
} else if (viewportWidth  < 670) {
  newNav.addEventListener("click", function (event) {
    newMegaMenu.style.display = "grid";
    a.setAttribute("onsubmit", "return false");
    event.preventDefault();
  })
}


