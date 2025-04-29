let results = localStorage.getItem('results');
console.log(results);

const parsedData = JSON.parse(results);
console.log(parsedData);
const productContainer = document.getElementById('firstdiv');

if (parsedData.length > 0 ) {

console.log(productContainer);

window.addEventListener("DOMContentLoaded",() =>{
let displayResults = parsedData.map(function(results_items){
  return `<div class="resultcard">
            <div class="result_img">
              <img src="${results_items.img}" alt="" width="200" height="250"/>
            </div>
            <div class="content">
              <h3 class="title">${results_items.name}</h3>
              <p class="genre">${results_items.price}: RPG</p>
              <p class="price">${results_items.genre}</p>
            </div>
          </div>`;
        });
displayResults = displayResults.join("");
productContainer.innerHTML = displayResults;
console.log(displayResults);
});
  
} 

 else { let message = localStorage.getItem('noresults');  productContainer.innerHTML = `<p>${message}</p>`; }






// instead of cat_items do results.genre
// results.forEach( item => {  return 'html stuff'     });

// globals


//event listeners
 

// // local storage to have data available on the next page

// for questions make array - and loop through - 

//start with empty array, put data in Array, loop through all the data and push it into the array

//results take local storage and make html from it
