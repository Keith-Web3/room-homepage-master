const navToggle = document.getElementById("nav-toggle")
const navLines = document.querySelectorAll(".nav-line")
const lineOne = document.getElementById("nav-line-1")
const lineTwo = document.getElementById("nav-line-2")
const lineThree = document.getElementById("nav-line-3") 
const blurEffectArray = [document.querySelector(".section_2"), document.querySelector(".section_4"), document.querySelector("nav")]
const aside = document.querySelector("aside")
const darken = document.querySelector(".darken")

hasClickedToggle = false

navToggle.addEventListener("click", function() {
  if (hasClickedToggle === false) {
  lineOne.style.transform = "rotate(135deg)"
  lineOne.style.inset = "50% auto auto auto"
  lineTwo.style.opacity = "0"
  lineThree.style.inset = "50% auto auto auto"
  lineThree.style.transform = "rotate(-135deg)"
  this.style.transform = "translateY(-50%)"
  aside.style.transform = "translateY(0)"
  darken.style.display = "block"
  blurEffectArray.forEach(item => {
    item.classList.add('blur-effect')
  })
  document.body.style.overflowY = "hidden"
  navLines.forEach(navLine => {
    navLine.style.backgroundColor = "var(--dark-gray)"
  })
  hasClickedToggle = true
} else {
  lineOne.style.transform = "rotate(0deg) translateY(-50%)"
  lineOne.style.inset = "0 auto auto auto"
  lineTwo.style.opacity = "1"
  lineThree.style.inset = "auto auto 0 auto"
  lineThree.style.transform = "rotate(0deg) translateY(50%)"
  this.style.transform = "translateY(0)"
  aside.style.transform = "translateY(-100%)"
  darken.style.display = "none"
  blurEffectArray.forEach(item => {
    item.classList.remove('blur-effect')
  })
  document.body.style.overflowY = "visible"
  navLines.forEach(navLine => {
    navLine.style.backgroundColor = "var(--white)"
  })
  hasClickedToggle = false
}
})

const sectionText = document.querySelectorAll(".section-text")

const sectionTextObserver = new IntersectionObserver((entries, sectionTextObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    entry.target.classList.add("section-text-observer")
    sectionTextObserver.unobserve(entry.target)
  }), {
    threshold: 1
  }
})
sectionText.forEach(section => {
  sectionTextObserver.observe(section)
})

const navigationArrows = document.querySelectorAll(".navigate img")
const sectionOne = document.querySelector(".section_1")
const header = document.querySelector("h1")
const sectionTwoText = document.querySelector(".section-2-text")
const sectionTwoArray = [header, sectionTwoText, document.querySelector(".shop-now-btn")]

let currentBackgroundIndex = 1
navigationArrows.forEach((navArrow, index) => {
  navArrow.addEventListener("click", function() {
    if (index === 0 && currentBackgroundIndex > 1) {
      currentBackgroundIndex--
    } else if (index === 1 && currentBackgroundIndex < 3) {
      currentBackgroundIndex++
    } else if (index === 0 && currentBackgroundIndex === 1) {
      currentBackgroundIndex = 3
    } else if (index === 1 && currentBackgroundIndex === 3) {
      currentBackgroundIndex = 1
    }
    sectionTwoArray.forEach(child => {
      child.classList.add('section-2-text-change')
    })
    if (currentBackgroundIndex === 1) {
      backgroundImageMediaQuery("var(--image-1)", "var(--desktop-image-1)")
      setTimeout(function() {
        header.textContent = `Discover innovative ways to decorate`
        sectionTwoText.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love`
        sectionTwoArray.forEach(child => {
          child.classList.remove('section-2-text-change')
        })
      }, 400)
      return
    }
    if (currentBackgroundIndex === 2) {
      backgroundImageMediaQuery("var(--image-2)", "var(--desktop-image-2)")
      setTimeout(function() {
        header.textContent = ` We are available all across the globe`
        sectionTwoText.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
        sectionTwoArray.forEach(child => {
          child.classList.remove('section-2-text-change')
        })
      }, 400)
      return
    }
    if (currentBackgroundIndex === 3) {
      backgroundImageMediaQuery("var(--image-3)", "var(--desktop-image-3)")
      setTimeout(function() {
        header.textContent = `Manufactured with the best materials`
        sectionTwoText.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
        sectionTwoArray.forEach(child => {
          child.classList.remove('section-2-text-change')
        })
      }, 400)
      return
    }
  })
})

let width = window.matchMedia("(min-width: 725px)")
function backgroundImageMediaQuery(mobileImage, desktopImage) {
  function mediaQuery(x) {
    if (x.matches) {
      sectionOne.style.backgroundImage = desktopImage
      blurEffectArray.forEach(item => {
        item.classList.remove('blur-effect')
      })
      document.body.style.overflowY = "visible"
      return
    }
    if (!x.matches) {
      sectionOne.style.backgroundImage = mobileImage
    }
  }

  width = window.matchMedia("(min-width: 550px)")
  mediaQuery(width)
  width.addListener(mediaQuery)
}

function media(x) {
  if (x.matches) {
    blurEffectArray.forEach(item => {
      item.classList.remove('blur-effect')
    })
    document.body.style.overflowY = "visible"
    darken.style.display = "none"
    aside.style.transform = "translateY(-100%)"
  }
}
media(width)
width.addListener(media)

