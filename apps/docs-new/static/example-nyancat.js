;(() => {
  const instanceId = 'nyancat-wrapper-instance'

  const launchNyanCat = () => {
    const nyanClass = 'nyan'
    const rainbowClass = 'rainbow'
    const trail = []
    let mouseX = 100
    let mouseY = 100
    let posX = 0
    let posY = 0
    let isAnimated = false
    let nyanEl = null
    let rainbowEls = []

    const wrapper = document.createElement('div')
    wrapper.id = instanceId
    wrapper.innerHTML = `<div class="${nyanClass}"></div>`
    document.body.appendChild(wrapper)

    nyanEl = wrapper.querySelector(`.${nyanClass}`)

    const screenHeight = 800
    const screenWidth = document.body.getBoundingClientRect().width
    const segments = Math.floor(screenWidth / 9)

    const onMouseMove = (event) => {
      mouseX = event.pageX
      mouseY = event.pageY
    }

    document.addEventListener('mousemove', onMouseMove)

    for (let i = 0; i < segments; i++) {
      const rainbow = document.createElement('div')
      rainbow.classList.add(rainbowClass)
      rainbow.style.left = `${i * 9}px`
      wrapper.appendChild(rainbow)
    }

    rainbowEls = wrapper.querySelectorAll(`.${rainbowClass}`)

    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const createStar = () => {
      const size = getRandomInt(3, 14)
      const lifespan = getRandomInt(5, 10)
      const star = document.createElement('div')
      star.classList.add('star')
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.left = `${screenWidth - 10}px`
      star.style.top = `${Math.floor(Math.random() * screenHeight)}px`
      star.style.transition = `all ${lifespan}s linear`
      star.style.transform = 'translate(0px, 0px)'
      wrapper.appendChild(star)

      setTimeout(
        () => {
          star.style.transform = `translate(-${screenWidth}px, 0px)`
        },
        getRandomInt(5, 10) * 10,
      )

      setTimeout(() => {
        if (wrapper.contains(star)) {
          wrapper.removeChild(star)
        }
      }, lifespan * 1000)
    }

    const moveNyan = () => {
      if (!nyanEl) {
        return
      }
      const halfWidth = nyanEl.getBoundingClientRect().width / 2
      const halfHeight = nyanEl.getBoundingClientRect().height / 2
      posX += (mouseX - posX - halfWidth) / 50
      posY += (mouseY - posY - halfHeight) / 50
      nyanEl.style.left = `${posX}px`
      nyanEl.style.top = `${posY}px`
    }

    const emitRainbow = () => {
      if (!nyanEl) {
        return
      }
      const count = Math.floor(nyanEl.offsetLeft / 9) + 2
      if (trail.length >= count) {
        trail.pop()
      }
      trail.unshift(posY)
      rainbowEls.forEach((el) => (el.style.display = 'none'))

      for (let i = 0; i < count; i++) {
        const offset = isAnimated ? (i % 2 ? 0 : 1) : i % 2
        const rainbow = rainbowEls[count - i]
        if (rainbow) {
          rainbow.style.top = `${trail[i] + offset}px`
          rainbow.style.display = 'block'
        }
      }
    }

    let frame = 0

    const intervalIds = [
      setInterval(() => {
        moveNyan()
        emitRainbow()
      }, 10),
      setInterval(createStar, 300),
      setInterval(() => {
        isAnimated = !isAnimated
      }, 500),
      setInterval(() => {
        if (nyanEl) {
          nyanEl.style.backgroundPosition = `${34 * frame}px`
        }
        frame += 1
      }, 100),
    ]

    wrapper.__nyancatData = {
      onMouseMove,
      intervalIds,
    }
  }

  const cleanupNyanCat = () => {
    const wrapper = document.getElementById(instanceId)
    if (wrapper && wrapper.__nyancatData) {
      document.removeEventListener('mousemove', wrapper.__nyancatData.onMouseMove)
      wrapper.__nyancatData.intervalIds.forEach(clearInterval)
      wrapper.remove()
    }
  }

  window.launchNyanCat = launchNyanCat
  window.cleanupNyanCat = cleanupNyanCat
})()
