// NAVIGATION
const navContainer = document.querySelector(".navBootomContainer")
const closeMenu = document.querySelector(".times")
const showMenu = document.querySelectorAll(".bars")


// console.log(navContainer.parentElement);

const menuShow = function(){
    const active = document.querySelector('.activeNav')
    const bottomNavParent = navContainer.parentElement
    // console.log(bottomNavParent);
    if (!bottomNavParent.classList.contains('activeNav')) {
        bottomNavParent.classList.add('activeNav')
    } else {
        bottomNavParent.classList.remove('activeNav')
    }
}

// menuShow()
showMenu.forEach((Btn) => {
    Btn.addEventListener('click', (e) => {
        const btn = e.target
        // console.log(btn);
        if (btn.classList.contains('dots')) {
            menuShow()
            // console.log(123);
        }
        if (btn.classList.contains('bar')) {
            menuShow()
        }
    })
})

