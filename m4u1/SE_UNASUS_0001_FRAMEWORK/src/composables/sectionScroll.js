/*
    Navegação por seções do menu lateral.

    TODO: Adaptar o menu para caso a Página siga o modelo de carrossel.
    No template, cada página contém todo o conteúdo numa única rolagem.
    Então, o menu serve apenas para rolar a página até a seção destacada.

    mTODO: Não sei o que fazer para transformar o menu num controlador de carrossel.
    Por enquanto, rezo para que nenhum curso seja desenvolvido nesse formato🙏

    O elemento que rola é o #unasus-content-wrapper do framework (ver
    templates/content/style.css), e não a janela — window.scrollTo() e
    Element.scrollIntoView() não servem aqui.
*/

const CONTAINER_SELECTOR = '#unasus-content-wrapper'

/* folga acima da seção, para o título não encostar no topo da área de conteúdo */
const OFFSET = 16

/*
    A página da unidade é um componente assíncrono (register.js), então as
    seções só entram no DOM um instante depois de o menu montar.

    A espera usa setTimeout, e não requestAnimationFrame: o que se espera aqui é
    a existência de elementos, não um quadro de animação, e rAF não roda quando
    a página não está sendo desenhada (aba em segundo plano, janela encoberta) —
    nesses casos o destaque do tópico atual nunca chegaria a ser ligado.
    O limite evita uma espera eterna se algum id não existir.
*/
const READY_INTERVAL = 50
const MAX_TRIES = 100

const getContainer = () => document.querySelector(CONTAINER_SELECTOR)

const getOffsetInContainer = (element, container) => (
    element.getBoundingClientRect().top
    - container.getBoundingClientRect().top
    + container.scrollTop
)

function whenReady(test, callback, tries = MAX_TRIES) {
    if (test()) return callback()
    if (tries <= 0) return

    setTimeout(() => whenReady(test, callback, tries - 1), READY_INTERVAL)
}

export function scrollToSection(id) {
    const container = getContainer()
    const target = document.getElementById(id)

    if (!container || !target) return

    container.scrollTo({
        top: Math.max(getOffsetInContainer(target, container) - OFFSET, 0),
        behavior: 'smooth',
    })
}

/*
    Chama onChange(id) sempre que muda a seção visível no topo da área de
    conteúdo. Devolve a função que desfaz a observação.
*/
export function watchActiveSection(ids, onChange) {
    let detach = null
    let cancelled = false

    const attach = () => {
        const container = getContainer()
        let current = null

        /*
            Um IntersectionObserver só avisaria nas bordas de cada seção, e aqui
            as seções têm alturas muito diferentes; comparar as posições a cada
            rolagem dá um resultado previsível.
        */
        const update = () => {
            const containerTop = container.getBoundingClientRect().top
            let active = ids[0]

            for (let i = 0; i < ids.length; i++) {
                const section = document.getElementById(ids[i])

                if (section && section.getBoundingClientRect().top - containerTop <= OFFSET + 1) {
                    active = ids[i]
                }
            }

            /* no fim da rolagem a última seção pode nunca alcançar o topo */
            if (container.scrollTop + container.clientHeight >= container.scrollHeight - 2) {
                active = ids[ids.length - 1]
            }

            if (active !== current) {
                current = active

                onChange(active)
            }
        }

        container.addEventListener('scroll', update, { passive: true })
        window.addEventListener('resize', update)

        update()

        detach = () => {
            container.removeEventListener('scroll', update)
            window.removeEventListener('resize', update)
        }
    }

    whenReady(
        () => getContainer() && document.getElementById(ids[0]),
        () => { if (!cancelled) attach() }
    )

    return () => {
        cancelled = true

        if (detach) detach()
    }
}
