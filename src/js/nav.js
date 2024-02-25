const navLinks = document.querySelectorAll("[data-navLink]")

navLinks.forEach(link => {
    if(link.getAttribute("href") === window.location.pathname){
        link.setAttribute("aria-current", "page")
    }
})

// TODO: work this!!!

// FIXME: work on this?

// ERROR: Checkthis later

// TODO: 

// DEBUG:

// NOTE: