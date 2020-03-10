// Your code goes here

// function clickIt(event) {
//         event.preventDefault()
//         console.log( 'where you going')
// };
// homeLink.addEventListener('click',clickIt);


// document.querySelector('nav').addEventListener('click', ()=>{
//    console.log('nav got clicked');
// });

// document.querySelector('header').addEventListener('click', ()=>{
//    console.log('header got clicked');
// });

// function clickEventHandler(event) {
//     event.preventDefault()
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
//     console.log(event.currentTarget);
//   }

// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//   }
//   document.querySelector('a').addEventListener('click', clickEventHandler)
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)

//   function backgroundColor() {style.color = 'blue'
//   };

//   document.querySelector('header').backgroundColor('click', backgroundColor);

//   function zoom(event) {
//     //event.preventDefault();
  
//     scale += event.deltaY * -0.01;
  
//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);
  
//     // Apply scale transform
//     el.style.transform = `scale(${scale})`;
//   }
  
//   let scale = 1;
//   const el = document.querySelector('img');
//   el.onwheel = zoom;

  let pressMe = document.querySelector('.change')

  function testing(){
    pressMe.innerHTML = 'ayyy';
  }

  pressMe.addEventListener('click', testing);
  pressMe.addEventListener('click', function(){
      pressMe.style.backgroundColor = 'yellow'
  });
  pressMe.addEventListener('click', function(){
      pressMe.style.fontSize ='100px'
  });


let container = document.querySelector('.pressthis');
let navi = document.querySelector('.main-navigation');
let menuStatus = false;

mainNavigation.style.marginTop = '-300px';

function menuToggle() {
    if (menuStatus == false) {
        menuStatus.style.marginTop = '0px';
        menuStatus = true;
    }
    else if (menuStatus == true) {
        menuStatus.style.marginTop = '-300px';
        menuStatus = false;
    }
};

pressthis.onClick = menuToggle;