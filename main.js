// var app = new Vue({
//     el:'#haiapp',
//     data: {
//         title:'Đây là shop quần áo của hải dớ',
//         url:'https://www.lazada.vn/products/combo-02-bo-quan-ao-thun-nam-co-tron-tay-lo-phoi-day-in-chu-off-white-thoi-trang-menkind-2qa-nam-1000024-i259053671-s360007125.html?exlaz=d_1:mm_150050845_51350205_2010350205::12:1497503216!59440595164!!!pla-296303633664!c!296303633664!360007125!121408927&gclid=CjwKCAjw4871BRAjEiwAbxXi2yzHnw4sEsnXzeCicgM4pfUljA5eA6tpjZNpUXBmXuciEL1pZqprPhoCFPIQAvD_BwE',
//         blank:'_blank',
//         price:150000,
//     },
//     methods: {
//         formatPrice(){
//             var number = this.price;
//             return(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number));
          
//         },
//     }
// })

var event = new Vue({
    el:'.event',
    data:{
        count:0,
        clientX:0,
        clientY:0,
        a:0,
        b:0,
        number:15,
    },
    methods:{
        plus(e,number) {
            this.count +=number;
            console.log('click',e.target)
        },
        handleMousemove(e) {
           this.clientX=e.clientX;
           this.clientY=e.clientY;
           console.log(e);
        },
        handleMousemoveChild(e){
            console.log('childmousemove',e);
        },
        handleSubmitForm(e) {
            console.log(e)
        },
        // addA() {
        //     console.log('addArun')
        //     return this.a + this.number;
        // },
        // addB(){
        //     console.log('addBrun')
        //     return this.b+this.number;
        // }
    },
    computed:{
        addA() {
            console.log('addArun')
            return this.a + this.number;
        },
        addB(){
            console.log('addBrun')
            return this.b+this.number;
        }
    }
})