let nav = {}
let mobile_nav = false
let is_home = false

document.addEventListener("DOMContentLoaded", function(){
    init()
});
  

function init() {
    console.log('javascript loaded')
    is_home = window.location.href.includes('index.html')

    nav.dom = document.querySelector("nav")
    nav.img = document.querySelector("nav img")
    nav.ul = document.querySelector("nav ul")
    
    setTimeout(function(){
        if(is_home && window.scrollY < 3){
            // document.querySelector('#main_logo').style.opacity = '1'
            nav.dom.style.display = 'none'
            nav.dom.style.opacity = '0'
            setTimeout(function() { nav.dom.style.display = 'block' }, 500)
            setTimeout(function() { nav.dom.style.opacity = '1' }, 600)
        }

        if(is_home)
            scroll_header()
    }, 10)

    resize()
}

function resize() {
    if(is_home){
        document.querySelector('#main_logo').style.height = window.innerWidth / 2.8 + 'px'
        document.querySelector('#main_logo').style.top = -(window.innerWidth / 2.8 - 115) + 'px'
}
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
            if(window.scrollY > document.getElementById(id).offsetTop + 200){
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
    console.debug('scroll header')
    if(window.scrollY > document.querySelector('#main_logo').offsetHeight){
        document.querySelector('#main_logo').style.opacity = '0'
    }else{
        document.querySelector('#main_logo').style.opacity = '1'
        }

    if(window.scrollY >  document.querySelector('#main_logo').offsetHeight - 115){
        // document.querySelector('#main_logo').style.height = '0'
        // nav.img.style.opacity = '1'
        nav.dom.style.background = '#fffe'
        nav.img.style.height = '90px'
        // document.querySelector('#main_logo').style.opacity = '0'
    }else{
        // document.querySelector('#main_logo').style.height = '100vh'
        // nav.img.style.opacity = '0'
        nav.img.style.height = '0px'
        nav.dom.style.background = 'transparent'
        // document.querySelector('#main_logo').style.opacity = '1'
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