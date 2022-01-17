let nav = {}
let mobile_nav = false
let is_home = false

function init() {
    is_home = window.location.href.includes('index')
    
    nav.dom = document.querySelector("nav")
    nav.img = document.querySelector("nav img")
    nav.ul = document.querySelector("nav ul")
    scroll_header()
    resize()
}

function resize() {
    if(document.body.offsetHeight <= window.innerHeight){
        document.querySelector("footer").style.position = "fixed"
        document.querySelector("footer").style.bottom = "0"
        document.querySelector("footer").style.width = window.innerWidth - 40 + 'px'
    }
}

document.onscroll = function(e) {
    if(is_home){
        scroll_header()
        check_div('home')
        check_div('contact')
        check_div('jobs')
    }

    function check_div(id) {

        if(window.scrollY < 10)
            clear_all()
        else{
            if(window.scrollY > document.getElementById(id).offsetTop - 100){
                clear_all()
                document.getElementById(`nav_${id}`).classList.add("active")
            }
        }

        function clear_all() {
            const nav_links = ['home', 'contact', 'jobs']

            for(let i = 0; i < nav_links.length; i++){
                document.getElementById(`nav_${nav_links[i]}`).classList.remove("active")
            }
        }
    }
}

function scroll_header() {
    if(window.scrollY > 1){
        document.querySelector('#main_logo').style.height = '0'
        nav.dom.style.background = '#fffd'
        // nav.img.style.opacity = '1'
        nav.img.style.height = '90px'
    }else if(window.scrollY < 40){
        document.querySelector('#main_logo').style.height = '100vh'
        nav.dom.style.background = 'transparent'
        // nav.img.style.opacity = '0'
        nav.img.style.height = '0px'
    }

    
    // if(window.scrollY > window.innerHeight / 2)
    //     nav.img.style.opacity = '1'
    // else
    //     nav.img.style.opacity = '0'

    // Parallax Background
    document.body.style.backgroundPositionY = window.scrollY*-0.2 + 'px'
}

function toggle_mobile_nav() {
    if(mobile_nav){
        mobile_nav = false
        document.querySelector("#mobile_nav").classList.remove("active")
        document.querySelector("nav ul").style.right = '-210px'
    }else{
        mobile_nav = true
        document.querySelector("#mobile_nav").classList.add("active")
        document.querySelector("nav ul").style.right = '-2px'
    }
}

function enableScroll() {
    document.querySelector('#psudo_scroll').style.display = 'none'
    document.body.style.overflowY = 'scroll'
    nav.ul.style.paddingRight = '0'
  }
  
  function disableScroll() {
    document.querySelector('#psudo_scroll').style.display = 'block'
    document.body.style.overflowY = 'hidden'
    nav.ul.style.paddingRight = '8px'
  }