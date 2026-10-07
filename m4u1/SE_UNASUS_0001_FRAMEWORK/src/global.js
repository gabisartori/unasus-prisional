// components
import ModalComponent from './components/modal/modal.js'
import DropdownComponent from './components/dropdown/dropdown.js'
import CardComponent from './components/card/card.js'
import ImageComponent from './components/image/image.js'
import ButtonComponent from './components/button/button.js'
import { Bellow, Accordion } from './components/accordion/accordion.js'
import { TimeLine, Moment } from './components/timeline/timeline.js'
import Video from './components/video/video.js'
import Navigation from './components/navigation/navigation.js'
import { MultiOptionsTest, OneOptionTest, DropdownOptionTest, OpenTest } from './components/test/test.js'

//directives
import { ppuLink, ppuDownload } from './composables/ppuDirectives.js'

export default (app) => {
    app.component('Modal', ModalComponent)
    app.component('Dropdown', DropdownComponent)
    app.component('Card', CardComponent)
    app.component('Image', ImageComponent)
    app.component('Accordion', Accordion)
    app.component('Bellow', Bellow)
    app.component('Timeline', TimeLine)
    app.component('Moment', Moment)
    app.component('Unasus-Button', ButtonComponent)
    app.component('Player-Video', Video)
    app.component('Navigation', Navigation)
    app.component('Multi-Options-Test', MultiOptionsTest)
    app.component('One-Option-Test', OneOptionTest)
    app.component('Dropdown-Option-Test', DropdownOptionTest)
    app.component('Open-Test', OpenTest)

    //directives
    app.directive('ppu-link', ppuLink)
    app.directive('ppu-download', ppuDownload)

    return app
}