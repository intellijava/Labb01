function createNode(element) {
    return document.createElement(element);
}
const para = document.querySelector('#para');
let test = document.querySelector('#test');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let todos = data.promos;
        // returning the Json object by creating an array with map()
        return todos.map(function(todo) {
             para.innerHTML = para.innerHTML + ("&emsp; Book " + todo.country + " between " + todo.startDate) + " and " + todo.endDate + " for just " + todo.price + " SEK per night ";
        })
    })
    .catch(function(error) {
        console.log(error);
    });