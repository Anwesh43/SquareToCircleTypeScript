const w : number = window.innerWidth
const h : number = window.innerHeight
class SquareToCircleBlock {
    private div : HTMLDivElement = document.createElement('div')
    private size : number = Math.min(w,h)/10
    private animator : Animator = new Animator()
    private state : State = new State()
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
        this.div.style.borderRadius = `${this.state.scale * 50}%`
        this.state.update(() => {
            this.animator.stop()
        })
    }
    handleTap() {
        this.div.onmousedown = () => {
            this.animator.start(()=> {
                this.update()
            })
        }
    }
}

class State {
    private deg : number = 0
    public scale : number = 0
    private mode : number = 0
    update(stopcb : Function) {
        this.deg += Math.PI/20
        this.scale = Math.sin(this.deg)
        if (this.deg > Math.PI/2 + this.mode * Math.PI/2) {
            if (this.deg > Math.PI) {
                this.deg = 0
                this.scale = 0
                this.mode = 0
            }
            else {
                this.deg = Math.PI/2
                this.scale = 1
                this.mode = 1
            }
            stopcb()
        }
    }
}

class Animator {
    private started : boolean = false
    private interval : number
    start (updatecb : Function) {
        if (!this.started) {
            this.started = true
            this.interval = setInterval(() => {
                updatecb()
            }, 75)
        }
    }

    stop() {
        if (this.started) {
            this.started = false
            clearInterval(this.interval)
        }
    }
}
