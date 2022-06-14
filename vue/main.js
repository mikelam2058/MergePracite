var switchAlt;
var switchSrc;

let pageData = {
    productName: 'Book a Cruise to the Moon',
    productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
    imageSrc: [
        "images/asteroid.jpg",
        "images/fantasy.jpg",
        "images/space.jpg",
        "images/spaceship.jpg"
    ],
    h2ClassController:{
        centered:true,
        colorFont:true
    },
    pStyleController:{
        'margin-left': '50px',
        'color': 'blue',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
    },
    switchAlt,
    switchSrc,
    productClasses:[ {
        name:'Coach',
        price:125000,
        seatsAvailable:20,
        earlyBird:true},
        {
        name:'Business',
        price:275000,
        seatsAvailable:6,
        earlyBird:true},
        {
        name:'First',
        price:430000,
        seatsAvailable:2,
        earlyBird:false
        }
        ]
    
};
var x = Math.floor(Math.random()*pageData.imageSrc.length);
pageData.switchSrc = pageData.imageSrc[x];
pageData.switchAlt = pageData.switchSrc;
const App = Vue.createApp({
    data(){
        return pageData;
    }
});

App.mount("#app");
