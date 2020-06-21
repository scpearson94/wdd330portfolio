window.addEventListener('load', function(event) {
    //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
    event.preventDefault();
    getJSON('https://pokeapi.co/api/v2/pokemon/ditto');

});

function getJSON(url) {
console.log( fetch(url)
    .then(function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    } else {
        return response.json();
    }
    })
    .catch(function(error) {
    console.log(error);
    }));
}