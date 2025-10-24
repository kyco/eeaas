;(() => {
  const wrapperId = 'snake-game-wrapper'
  const canvasId = 'snake-game-canvas'
  const scoreId = 'snake-game-score'

  const launchSnake = () => {
    document.body.style.overflow = 'hidden'

    const boardWidth = 300
    const boardHeight = 300
    const gameSpeed = 80
    const blockSize = 15
    const gridCount = 20
    const initialTail = 5
    const blockGap = 2

    let snakeX = 10
    let snakeY = 10
    let velocityX = 1
    let velocityY = 0
    let fruitX = 15
    let fruitY = 15
    const trail = []
    let tailLength = initialTail

    const markup = document.createElement('div')
    markup.id = wrapperId
    markup.innerHTML = `
      <div id="${scoreId}" style="color:#000; font-family:sans-serif; text-align:center; margin-bottom:4px;">0</div>
      <canvas id="${canvasId}" width="${boardWidth}" height="${boardHeight}" style="position:absolute;"></canvas>
    `
    document.body.appendChild(markup)

    const canvas = document.getElementById(canvasId)
    const ctx = canvas.getContext('2d')

    canvas.style.top = `${window.innerHeight / 2 - canvas.offsetHeight / 2}px`
    canvas.style.left = `${window.innerWidth / 2 - canvas.offsetWidth / 2}px`

    const gameLoop = () => {
      const score = tailLength - initialTail
      const scoreDisplay = document.getElementById(scoreId)
      if (scoreDisplay) scoreDisplay.textContent = score.toString()

      snakeX += velocityX
      snakeY += velocityY

      if (snakeX < 0) snakeX = gridCount - 1
      if (snakeX >= gridCount) snakeX = 0
      if (snakeY < 0) snakeY = gridCount - 1
      if (snakeY >= gridCount) snakeY = 0

      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0078bf'
      for (let i = 0; i < trail.length; i++) {
        const segment = trail[i]
        ctx.fillRect(segment.x * blockSize, segment.y * blockSize, blockSize - blockGap, blockSize - blockGap)
        if (segment.x === snakeX && segment.y === snakeY) {
          tailLength = initialTail
        }
      }

      trail.push({ x: snakeX, y: snakeY })
      while (trail.length > tailLength) {
        trail.shift()
      }

      if (fruitX === snakeX && fruitY === snakeY) {
        tailLength += 1
        fruitX = Math.floor(Math.random() * gridCount)
        fruitY = Math.floor(Math.random() * gridCount)
      }

      ctx.fillStyle = '#339e00'
      ctx.fillRect(fruitX * blockSize, fruitY * blockSize, blockSize - blockGap, blockSize - blockGap)
    }

    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          if (velocityX !== 1) {
            velocityX = -1
            velocityY = 0
          }
          break
        case 'ArrowUp':
          if (velocityY !== 1) {
            velocityX = 0
            velocityY = -1
          }
          break
        case 'ArrowRight':
          if (velocityX !== -1) {
            velocityX = 1
            velocityY = 0
          }
          break
        case 'ArrowDown':
          if (velocityY !== -1) {
            velocityX = 0
            velocityY = 1
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const gameInterval = setInterval(gameLoop, gameSpeed)

    markup.__snakeData = {
      handleKeyDown,
      gameInterval,
    }
  }

  const cleanupSnake = () => {
    const wrapper = document.getElementById(wrapperId)
    if (wrapper && wrapper.__snakeData) {
      document.removeEventListener('keydown', wrapper.__snakeData.handleKeyDown)
      clearInterval(wrapper.__snakeData.gameInterval)
      wrapper.remove()
    }
    document.body.style.overflow = ''
  }

  window.launchSnake = launchSnake
  window.cleanupSnake = cleanupSnake
})()
