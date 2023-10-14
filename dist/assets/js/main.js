const sections = document.querySelectorAll(".menu-section");
const navLinks = document.querySelectorAll(".nav-link");

const scroll = () => {
    const id = getActiveSectionId()
    let activeMenuElement = document.querySelector(".nav-link.active")
    let activeMenuID = activeMenuElement.getAttribute('href')

    if (activeMenuID !== `#${id}`) {
        activeMenuElement.classList.remove('active');
        document.querySelector(`.nav-link[href='#${id}']`).classList.add('active')
    }
}

const getActiveSectionId = () => {
    let result = null

    for (let el = 0; el <= sections.length - 1; el++) {
        const section = sections[el];
        let top = window.scrollY;
        let offset = section.offsetTop - 150;

        if (top >= offset) {
            result = section

        } else {
            return result.getAttribute('id');
        }
    }
}


const throttle = (func, ms) => {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

window.onscroll = throttle(scroll, 150);