Vue.component('promo-item', {
    template: `
    <article>
    <ul>
        <li style="font-weight: bold"> {{ country }}</li>
        <li> Price {{ price }} </li>
        <li> Starts {{ startDate }} </li>
        <li> Ends {{ endDate }} </li>
    </ul>
      <button v-on:click="$emit('remove')">Remove</button>
      <button v-on:click="$emit('chnge')">Change Color</button>
    </article>
  `,
    props: ['country', 'price', 'start-date', 'end-date']
})

new Vue({
    el: '#promoDiv',
    data: {
        newCountry: '',
        newPrice: '',
        promos: [
            {
                id: 0,
                country: 'Maldives',
                price: 8500,
                startDate: '2021-08-01',
                endDate: '2021-10-01',
                bgcolor: 'black',
                fontweight: ''
            },
            {
                id: 1,
                country: 'Spain',
                price: 1000,
                startDate: '2021-10-01',
                endDate: '2021-12-10',
                bgcolor: 'black',
                fontweight: ''
            },
            {
                id: 2,
                country: "Thailand",
                price: 1500,
                startDate: '2021-10-01',
                endDate: '2021-12-10',
                bgcolor: 'black',
                fontweight: ''
            },
            {
                id: 3,
                country: "Greece",
                price: 2500,
                startDate: '2021-11-01',
                endDate: '2022-02-10',
                bgcolor: 'black',
                fontweight: ''
            }
        ],
        nextPromoId: 4
    },
    methods: {
        addNewPromo: function () {
            this.promos.push({
                id: this.nextPromoId++,
                country: this.newCountry,
                price: this.newPrice,
                startDate: this.newStartDate,
                endDate: this.newEndDate,
                bgcolor: 'black',
                fontweight: ''
            })
            this.newCountry = '',
                this.newPrice = ''
        },
        chngecolor: function (selected){
            if(this.promos[selected].bgcolor === "red") {
                this.promos[selected].bgcolor = "black"
                this.promos[selected].fontweight = ""
            }else {
                this.promos[selected].bgcolor = "red",
                this.promos[selected].fontweight = "bolder"
            }
        }
    }
})