// alert ('ciao');
const app = new Vue (
    {
        el: '#app',
        data: {
            list : [
            {
                text: 'Chiamare Franco',
                done: false
            },
            {
                text: 'Chiamare sergio',
                done: false
            },
            {
                text: 'Chiamare mario',
                done: false
            },
            {
                text: 'Chiamare fulvio',
                done: false
            },
            {
                text: 'Chiamare marco',
                done: false
            }
        ],
            symbols: '\u00D7'
        },
        methods: {
            clickCheck : function(index) {
                this.list[index].done = true;
            },

            removeElement: function (index) {
                this.list.splice([index],1);
            },
            newElement : function (text){
                this.list.push({text});
            }
        }
    }
)