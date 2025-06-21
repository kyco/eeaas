import { eeaas } from '../../utils/eeaas'

const css = `
#snake-game-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  text-align: center;
  background-color: #fff;
}

#snake-game-score {
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  color: #0078bf;
}

#snake-game-canvas {
  border: 1px solid #d4e8f4;
}
`

eeaas.register({
  name: 'Snake',
  enabled: false,
  trigger: {
    type: 'keys',
    keystrokes: ['t', 'e', 's', 't'],
  },
  stopTrigger: {
    type: 'keys',
    keystrokes: ['Escape'],
  },

  resources: [
    {
      type: 'css',
      content: css,
    },
  ],

  onStart() {
    document.body.style.overflow = 'hidden'

    const boardWidth = 300
    const boardHeight = 300
    const gameSpeed = 80
    const blockSize = 15
    const gridCount = 20
    const initialTail = 5
    const canvasId = 'snake-game-canvas'
    const wrapperId = 'snake-game-wrapper'
    const scoreId = 'snake-game-score'
    const blockGap = 2

    let snakeX = 10
    let snakeY = 10
    let velocityX = 1 // ➡️ Snake starts moving immediately to the right
    let velocityY = 0
    let fruitX = 15
    let fruitY = 15
    const trail: { x: number; y: number }[] = []
    let tailLength = initialTail

    const markup: HTMLElement = document.createElement('div')

    markup.id = wrapperId
    markup.innerHTML = `
      <div id="${scoreId}">0</div>
      <canvas id="${canvasId}" width="${boardWidth}" height="${boardHeight}"></canvas>
    `
    document.body.appendChild(markup)

    const canvas: HTMLCanvasElement = document.getElementById(canvasId) as HTMLCanvasElement
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
    canvas.style.position = 'absolute'
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
        tailLength++
        fruitX = Math.floor(Math.random() * gridCount)
        fruitY = Math.floor(Math.random() * gridCount)
      }

      ctx.fillStyle = '#339e00'
      ctx.fillRect(fruitX * blockSize, fruitY * blockSize, blockSize - blockGap, blockSize - blockGap)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
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
    const gameInterval = window.setInterval(gameLoop, gameSpeed)

    ;(markup as any).__snakeData = {
      handleKeyDown,
      gameInterval,
    }
  },

  onStop() {
    document.body.style.overflow = ''

    const wrapper = document.getElementById('snake-game-wrapper')
    if (!wrapper) {
      return
    }

    const data = (wrapper as any).__snakeData
    if (data) {
      clearInterval(data.gameInterval)
      document.removeEventListener('keydown', data.handleKeyDown)
    }

    wrapper.remove()
  },
})
