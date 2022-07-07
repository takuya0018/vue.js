new Vue({
    el: "#app",
    data() {
        return {
            width: 100,
            height: 200,
            color: "#3e3e3e",
            bgColor: "red",
            //色変化アプリ
            range: 10,
            red: 0,
            blue: 0,
            green: 0
        };
    },
    computed: {
        bindStyle() {
            return `width: ${ this.width }px; height: ${ this.height }px; color: ${ this.color }; backgroundColor: ${ this.bgColor };`;
        },
        bindBox() {
            return `height: ${(this.range) / 2}px; width: ${this.range}px; background: rgb(${ this.red }, ${ this.blue }, ${ this.green })`
        }
    }
})