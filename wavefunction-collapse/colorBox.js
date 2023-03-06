import randomColor from "randomcolor"


export default class colorBox {
    constructor(width = 10, height = 7) {
        this.color = 'red'
        this.size = '50px'


        document.styleSheets[1].insertRule(
            `
            .box {
                width: ${this.size};
                height:${this.size};
                border-radius:25%;
                margin: 5px;

                display: block;
                }
            
            `
        )
        this.wideth = width
        this.height = height

        this.colorList = []
        this.initColorlist()

    }

    addBox(id, color = this.color) {

        let box = document.createElement('div')
        box.id = id
        box.className = 'box'

        document.styleSheets[1].insertRule(
            `
            #${id} {
                background-color: ${color};
                }
            
            `
        )
        return box
    }

    initColorlist() {
        this.colorList = randomColor({
            count: this.wideth * this.height,
            format: 'rgb',
            hue: 'green',

        })

    }


}