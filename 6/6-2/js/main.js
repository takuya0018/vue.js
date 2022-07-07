new Vue({
    el: "#app",
    data() {
        return {
            isActive: true,
            listClass: false,//ハンバーガー
            active: {
                error: true,
                "is-active": true,
            }
        }
    },
    methods: {
        toggleButton() {
            this.listClass = !this.listClass;
        }
    },
    computed: {
        showMenu() {
            return this.listClass == true;
        }
    }
})