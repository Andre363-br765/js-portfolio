export function initAcordeon() {
    const triggers = document.querySelectorAll('.acordeon .trigger')

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            trigger.parentElement.classList.toggle('open')
        })
    })
}
