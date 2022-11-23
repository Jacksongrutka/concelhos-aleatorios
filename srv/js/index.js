const botao = document.getElementById('btn-dice')
let adviceNumber = document.getElementById('advice-id')
let adviceDescription = document.getElementById('advice')
async function getAdvice(){
    const url = "https://api.adviceslip.com/advice"
    const adviceContent = await fetch(url)
    const json = await adviceContent.json()
    const adviceId = json.slip.id
    const advice = json.slip.advice

    adviceNumber.innerHTML = `"advice #${adviceId}"`;
    adviceDescription.innerHTML = `${advice}`
    console.log(adviceNumber)
}
botao.addEventListener('click', () =>  getAdvice())
getAdvice()