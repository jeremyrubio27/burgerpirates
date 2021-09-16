
const btnToggle = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const select = document.getElementById('select-toggle');

btnToggle.addEventListener('click', function (){

navLinks.classList.toggle('show');

});



const menu = [
    {
        id : '1',
        img: './images/f1.png',
        title: 'Cheesy Pizza',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi cumque ipsa, adipisci amet ipsam placeat',
        price: '20',
        categories:'Pizza'
    },
    {
        id : '2',
        img: './images/f2.png',
        title: 'Burger Jumbo',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi cumque ipsa, adipisci amet ipsam placeat',
        price: '30',
        categories:'Burger'
    },
    {
        id : '3',
        img: './images/f3.png',
        title: 'Yummy Pizza',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi cumque ipsa, adipisci amet ipsam placeat',
        price: '40',
        categories:'Pizza'
    },
    {
        id : '4',
        img: './images/f4.png',
        title: 'Pasta Ala Yummy',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi cumque ipsa, adipisci amet ipsam placeat',
        price: '10',
        categories:'Pasta'
    },
    {
        id : '5',
        img: './images/f5.png',
        title: 'Idol Fries',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi cumque ipsa, adipisci amet ipsam placeat',
        price: '22',
        categories:'Fries'
    },
    {
        id : '6',
        img: './images/f6.png',
        title: 'Peckle Pizza',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi cumque ipsa, adipisci amet ipsam placeat',
        price: '16',
        categories:'Pizza'
    },
    {
        id : '7',
        img: './images/f7.png',
        title: 'Summer Burger',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi cumque ipsa, adipisci amet ipsam placeat',
        price: '16',
        categories:'Burger'
    },
    {
        id : '8',
        img: './images/f8.png',
        title: 'Burger Panalo',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi cumque ipsa, adipisci amet ipsam placeat',
        price: '16',
        categories:'Burger'
    },
    {
        id : '9',
        img: './images/f9.png',
        title: 'Krazy Pasta',
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi cumque ipsa, adipisci amet ipsam placeat',
        price: '16',
        categories:'Pasta'
    },
];

const mainMenu = document.querySelector('.mainMenu');
const btnCategory = document.querySelector('.buttons');

window.addEventListener('DOMContentLoaded' , function () {

Showmenu(menu);
reduceReducer();
});

function Showmenu(itemsInMenu) {

    let itemsDisplay = itemsInMenu.map(function(item){
        let containerItem = `<div class="mainItems">
        <div class="mainCard">
           <div class="container-img">
            <img src=${item.img} alt=${item.title}>
           </div>
           <div class="container-text">
               <h2>${item.title}</h2>
               <p class="description"> ${item.description}</p>
               <p class="price">${item.price}</p>
           </div>            
        </div>   
    </div> `

    return containerItem;
    });
    itemsDisplay = itemsDisplay.join('');
    mainMenu.innerHTML = itemsDisplay;
}

function reduceReducer() {
    const itemReduced = menu.reduce(function(values, item ){
        if (!values.includes(item.categories)){
            values.push(item.categories);
        }
        return values;
    }, ['all']);
    const categoryBtn = itemReduced.map(function(categories){
       return ` <button class="filter-btn" data-id=${categories}>${categories}</button>`
    }).join('');
    
    btnCategory.innerHTML = categoryBtn;

    const allCategoryBtns = document.querySelectorAll('.filter-btn');
    allCategoryBtns.forEach(function(item){
        item.addEventListener('click' , function (e) {
            const currentBtn = e.currentTarget.dataset.id;
            const targetedValue = menu.filter(function(item){
                if(item.categories === currentBtn){
                    return item;
                } 
            });
            if (currentBtn === 'all'){
                Showmenu(menu);
            }
            else {
                Showmenu(targetedValue);
            }
        });
    });
}

const reviews = [
    {
        id : '1',
        img: './images/client1.jpg',
        title: 'UI / UX Designer',
        name: 'Jerlyn Mercado',
        description:'Lorem, ipsum dolor sig elit. Excepturi commodi cumque ipsa, adipisci amet ipsam placeat',
    },
    {
        id : '2',
        img: './images/client2.jpg',
        title: 'Full Stock Developer',
        name: 'Iccy Shadows',
        description:'Lorem, ipsum dolor sitque ipsa, adipisci amet ipsam placeat',
    }
];

let currentItems = 1;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const person = document.getElementById('person');
const namePerson = document.querySelector('.name');
const job = document.querySelector('.job');
const descriptions = document.querySelector('.description-text');


window.addEventListener('DOMContentLoaded' , function () {
    showPerson();
});

function showPerson () {
    const revItemShow = reviews[currentItems];
    person.src = revItemShow.img; 
    namePerson.textContent = revItemShow.name;
    job.textContent = revItemShow.title;
    descriptions.textContent = revItemShow.description;
    
}

prevBtn.addEventListener('click' , function () {

    currentItems -- ;
    if ( currentItems < 0) {
        currentItems = reviews.length - 1;
    }

    showPerson()

});
nextBtn.addEventListener('click' , function () {

    currentItems ++ ;
    if ( currentItems > reviews.length - 1) {
        currentItems = 0;
    }

    showPerson()

});