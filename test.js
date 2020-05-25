const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const { start } = require('./index')

const log = console.log

const origins = ['terminal', 'test']

const callOrigin = process.argv[2]
const totalNumber = parseInt(process.argv[3])

async function askQuestion() {
  return rl.question(`Insira a lista de numeros separados por espaços: `, (answer) => {
    const group = answer
      .split(' ')
      .map(string => parseInt(string))
      .filter(number => (!Number.isNaN(number)))

    const response = start(totalNumber, group)

    log('response', response)

    rl.close()
  })
}

async function test() {
  let group = []

  for (let index = 0; index < totalNumber; index++) {
    group = [...group, Math.floor(Math.random() * 101)]
  }

  log('Grupo de números a ser ordenado', group)

  const response = start(totalNumber, group)

  log('response', response)

  process.exit(0)
}

const init = async () => {
  if (!origins.some(origin => origin === callOrigin)) {
    log(`Ops... origem não permitida, você deve inserir uma das seguintes origens: [${origins}]`)
    process.exit(1)
  }

  if (Number.isNaN(totalNumber)) {
    log('Ops... você precisa informar um número total para ser ordernado')
    process.exit(1)
  }

  if (totalNumber <= 0) {
    log('Ops... você precisa informar um número total para ser ordernado maior que zero')
    process.exit(1)
  }

  log(`Origem: ${callOrigin} - total ${totalNumber}`)

  if (callOrigin === 'terminal') {
    return askQuestion()
  }

  if (callOrigin === 'test') {
    return test()
  }
}

init()
