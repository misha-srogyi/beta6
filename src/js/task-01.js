//Task 1
const categoryEl = document.querySelectorAll('.item');
console.log(`Numbers of category: ${categoryEl.length}`);

categoryEl.forEach(element => {
    const titleEl = element.querySelector('h2');
    console.log(`Category: ${titleEl.textContent}`);

    const elementsEl = element.querySelectorAll('li');
    console.log(`Elements: ${elementsEl.length}`)

})

//Task 2
//Task 3
//Task 4
//Task 5
//Task 6
//Task 7
//Task 8
//Task 9
//Task 10    
