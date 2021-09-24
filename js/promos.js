Vue.component('promo-item', {
    template: `
    <article>
    <ul>
        <li style="font-weight: bolder"> {{ country }}</li>
        <li> Price {{ price }} </li>
        <li> Starts {{ startDate }} </li>
        <li> Ends {{ endDate }} </li>
    </ul>
      <button v-on:click="$emit('remove')">Remove</button>
    </article>
  `,
    props: ['country', 'price', 'start-date', 'end-date', 'img']
})

new Vue({
    el: '#promoDiv',
    data: {
        newCountry: '',
        image: 'img/mountainflame-500px.jpg',
        todos: [
            {
                id: 0,
                country: 'Maldives',
                price: 8500,
                startDate:'2021-08-01',
                endDate: '2021-10-01'
            },
            {
                id: 1,
                country: 'Spain',
                price: 1000,
                startDate: '2021-10-01',
                endDate: '2021-12-10'
            },
            {
                id: 2,
                country: "Thailand",
                price: 1500,
                startDate: '2021-10-01',
                endDate: '2021-12-10'
            }
        ],
        nextTodoId: 3
    },
    methods: {
        addNewPromo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                country: this.newCountry,
                price: this.newPrice,
                startDate: this.newStartDate,
                endDate: this.newEndDate
            })
            this.newCountry = '',
            this.newPrice=''
        }
    }
})