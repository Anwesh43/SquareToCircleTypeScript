const w : number = window.innerWidth
const h : number = window.innerHeight
class SquareToCircleBlock {
    private div : HTMLDivElement = document.createElement('div')
    private size : number = Math.min(w,h)/10
    constructor() {
        this.initBlock()
    }
    initBlock() {
        this.div.style.width = `${this.size}px`
        this.div.style.height = `${this.size}px`
        this.div.style.background = '#3F51B5'
        document.body.appendChild(this.div)
    }
    update() {
        
    }
}
