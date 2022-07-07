new Vue({
    el: "#app",
    data(){
        return {
            name:"名前",
            eMail:"メールアドレス",
            tel:"電話番号",
        }
    },
    computed: {
        isInValidName() {
            return this.name.length < 4;
        },
        isInValidMail() {
            const regex = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/)
            return !regex.test(this.eMail);
        },
        isInValidTel() {
            const tel = this.tel;
            const isErr = tel.length < 8 || isNaN(Number(tel));
            return isErr;
        }
    }
})