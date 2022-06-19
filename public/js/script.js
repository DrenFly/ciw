const counters = document.querySelectorAll('.counter');

const speed = 2000;

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
        counters.forEach(counter => {
            const updateCount = () => {  
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const inc = target / speed;
        
                if(count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                    
                } else {
                    count.innerText = target;
                } 
                          
            }
            updateCount(); 
        })
    } else {
        counters.innerText = "0";
    }
  });
});

counters.forEach(counters => {
  observer.observe(counters);
});



//Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menuBrand = document.querySelector('.menu-brand');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');


//Set initial State
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

for (const navLink of navLinks) {
    navLink.addEventListener('click', toggleMenu);
  }

//navLinks.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
    
        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
    
        // Set Menu State
        showMenu = false;
    }
}