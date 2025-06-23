;(() => {
  const wrapperId = 'konami-wrapper'
  const emojiClass = 'konami-emoji'
  const partyClass = 'konami'
  let emojiInterval = null

  const launchKonami = () => {
    if (document.getElementById(wrapperId)) {
      return
    }

    const wrapper = document.createElement('div')
    wrapper.id = wrapperId
    document.body.appendChild(wrapper)

    document.body.classList.add(partyClass)

    const emojis = ['🌈', '🎉', '🚀', '✨', '💥', '👾', '🕹️']
    emojiInterval = setInterval(() => {
      const emoji = document.createElement('div')
      emoji.className = emojiClass
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)]
      emoji.style.left = Math.random() * 100 + 'vw'
      // emoji.style.animationDuration = 3 + Math.random() * 3 + 's'
      emoji.style.animationDuration = 1 + Math.random() * 3 + 's'
      document.body.appendChild(emoji)
      setTimeout(() => emoji.remove(), 7000)
    }, 100)
  }

  const cleanupKonami = () => {
    const wrapper = document.getElementById(wrapperId)
    if (wrapper) {
      wrapper.remove()
    }

    document.body.classList.remove(partyClass)

    if (emojiInterval) {
      clearInterval(emojiInterval)
      emojiInterval = null
    }

    const floatingEmojis = document.querySelectorAll(`.${emojiClass}`)
    floatingEmojis.forEach((emoji) => emoji.remove())

    document.body.style.overflow = ''
  }

  window.launchKonami = launchKonami
  window.cleanupKonami = cleanupKonami
})()
