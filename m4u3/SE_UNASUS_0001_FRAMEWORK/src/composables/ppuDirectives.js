import ppu from '../composables/ppu.js'
import { SplitPath } from './splitPath.js'

export const ppuLink = {
    mounted(el, binding) {
        const current = binding.value.context + '(' + binding.value.current + ')'
        
        el.target = '_blank'

        el.addEventListener('click', () => {
            ppu.setExternalLink({
                current,  
                url: el.href 
            })
        })
    },
    unmounted(el) {
        el.removeEventListener('click', ppu.setExternalLink)
    }
}

export const ppuDownload = {
    mounted(el, binding) {
        const current = binding.value.context + '(' + binding.value.current + ')'

        el.download = SplitPath(el.href).filename
        el.target = '_blank'

        el.addEventListener('click', () => {
            ppu.setDownload({
                href: el.href,
                current,
            })
        })
    },
    unmounted(el) {
        el.removeEventListener('click', ppu.setDownload)
    }
}