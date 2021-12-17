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
                text: 'Chiamare Franco',
                done: false
            },
            {
                text: 'Chiamare Franco',
                done: false
            },
            {
                text: 'Chiamare Franco',
                done: false
            },
            {
                text: 'Chiamare Franco',
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
                this.list[index].text = '';
            }
        }
    }
)