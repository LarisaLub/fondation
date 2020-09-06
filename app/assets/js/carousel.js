 document.querySelector(".fond").addEventListener("click", (event) => {
     event.preventDefault();
     let subMenu = document.querySelector("header .sub-menu");
     subMenu.className += " active";
 });

 //  let list = document.querySelectorAll("header .sub-menu a");
 //  for (let i = 0; i < list.length; i++) {
 //      list[i].addEventListener("click", () => {
 //          let subMenu = document.querySelector("header .sub-menu");
 //          subMenu.className = "sub-menu";
 //      });
 //  }

 document.querySelector("header .sub-menu").addEventListener("click", () => {
     document.querySelector(".sub-menu").className = "sub-menu";
 });




 const slaides = document.querySelectorAll('.slaider');
 let index = 0;
 for (let i = 0; i < slaides.length; i++) {
     let circlesList = document.querySelector('.circles');
     circlesList.innerHTML += `<div class="circle" onclick = "handleClickCircle(${i})"></div>`;
 }

 function handleClickCircle(index) {
     changeIndex(index);
     changeSlaider();
 }

 function changeIndex(i) {
     index = i;
 }

 document.querySelector(".slick-prev").addEventListener("click", () => {
     const totalSlaides = slaides.length - 1;
     if (index === 0) {
         changeIndex(totalSlaides);
     } else {
         changeIndex(index - 1);

     }

     changeSlaider();
 });

 document.querySelector(".slick-next").addEventListener("click", () => {
     const totalSlaides = slaides.length - 1;
     if (index === totalSlaides) {
         changeIndex(0);
     } else {
         changeIndex(index + 1);

     }

     changeSlaider();
 })

 function changeSlaider() {
     let circles = document.querySelectorAll(".circle");

     for (let i = 0; i < slaides.length; i++) {
         if (i === index) {
             slaides[i].className += ' active';
             circles[i].className += ' active';
             //console.log(circles[i]);
         } else {
             slaides[i].className = 'slaider';
             circles[i].className = 'circle';
         }
     }

 }