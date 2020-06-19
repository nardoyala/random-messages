const messages = [
  "Bernardo",
  "Carolina",
  "Paulina",
  "Oscar",
  "Ana",
  "Gabriela",
  "Nicolás",
  "Carla"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }