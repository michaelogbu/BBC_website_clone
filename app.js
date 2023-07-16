// ================ NAVIGATION ==================
const navContainer = document.querySelector(".navBootomContainer")
const closeMenu = document.querySelector(".times")
const showMenu = document.querySelectorAll(".bars")


const menuShow = () => {
    const active = document.querySelector('.activeNav')
    const bottomNavParent = navContainer.parentElement
    // console.log(bottomNavParent);
    if (!bottomNavParent.classList.contains('activeNav')) {
        bottomNavParent.classList.add('activeNav')
    } else {
        bottomNavParent.classList.remove('activeNav')
    }
}
const menuHide = () => {
    const active = document.querySelector('.activeNav')
    const bottomNavParent = navContainer.parentElement
    if (bottomNavParent.classList.contains('activeNav')) {
        bottomNavParent.classList.remove('activeNav')
    }
}

showMenu.forEach((Btn) => {
    Btn.addEventListener('click', (e) => {
        const btn = e.target
        // console.log(btn);
        if (btn.classList.contains('dots')) {
            menuShow()
        }
        if (btn.classList.contains('bar')) {
            menuShow()
        }
    })
})
closeMenu.addEventListener('click', function() {
    menuHide()
})
// ================ END OF NAVIGATION ==================
