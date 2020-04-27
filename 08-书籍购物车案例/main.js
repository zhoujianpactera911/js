const app=new Vue({
    el:'#app',
    data:{
        books:[
            {
                id: 1,
                name: '《算法理论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 120.00,
                count: 1
            }
        ]
    },
    computed:{
       totalPrice() {
           //1. 普通的for循环
           let totalPrice = 0;
           // for(let i=0;i<this.books.length;i++)
           // {
           //     totalPrice += this.books[i].price * this.books[i].count;
           // }

           //2.for(let i in this.books)
           // for(let i in this.books)
           // {
           //     const book=this.books[i];
           //     totalPrice += book.price * book.count;
           // }

           //3.for(let i of this.books)
           // for (let book of this.books) {
           //     totalPrice += book.price * book.count;
           // }

           //reduce
           // totalPrice = this.books.reduce(function(pre,book){
           //     return  pre + book.price * book.count;
           // },0)
           totalPrice = this.books.reduce( (pre,book)=>{ return  pre + book.price * book.count; },0)

           return totalPrice;
       }
    },
    methods:{
        getFinalPrice(price){
            return '￥' + price.toFixed(2);
        },
        decrement(index){
            if(this.books[index].count>0)
            {
                this.books[index].count--;
            }
        },
        increment(index){
            this.books[index].count++;
        },
        handel(index){
            this.books.splice(index,1);
        }
    },
    // 过滤器 自动传参
    filters:{
        showPrice(price){
            return '￥' + price.toFixed(2);
        }
    }
})
//
// //编程范式;面向对象编程 （第一公民：对象）/ 函数式编程（第一公民：函数）
// const nums = [10,20,30,50,22]
//
// //1 去除所有小于100的数字
// let newNums=[];
// for(let n of nums)
// {
//     if(n < 100) {
//         newNums.push(n);
//     }
// }
//
// //filter 回调函数的要求 必须返回一个bool值
// //当返回true，函数会自动将回调的参数 n 加入到新的数组中
// //当返回false,函数内部会过滤掉 n
// let newNums = nums.filter(function (n) {
//         return n < 100;
// });
//
//
// //2 将所有小于100的数字全部乘以2
// let new2Nums=[];
// for(let n of newNums)
// {
//     new2Nums.push(n * 2);
// }
//
// //map 函数
// newNums.map(function (n){
//     return n * 2;
// })
//
//
// //3 将所有new2Nums相加，得到最终结果
// let total = 0;
// for(let n of new2Nums)
// {
//     total += n;
// }
//
// //reduce 对数组的所有数据进行汇总
// //参数一本身就是一个函数
// //new2Nums 20  40  80  100
// new2Nums.reduce(function(preValue, n){
// return  preValue + n;
// },0);
//
// //第一次: preValue = 0 n=20
// //第二次: preValue = 第一次调用 function 的返回值 n=40
// //第二次: preValue = 第二次调用 function 的返回值 n=80
// //第二次: preValue = 第三次调用 function 的返回值 n=100
//
// const nums = [10,20,30,50,60]
// let total=nums.filter(function (n) {
// return n < 40
// }).map(function (n) {
// return n * 2;
// }).reduce(function(preValue, n)
// {
//     return  preValue + n;
// },0)
//
// nums.filter(n=> n < 30).map(n=> n * 2).reduce((pre,n)=>{pre + n},0)