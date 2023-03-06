export default class colorBox {
    constructor() {
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


}