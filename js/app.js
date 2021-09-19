








document.querySelector("#open-menu").addEventListener('click', function ()
{


    document.querySelector(".menuitem ").classList.toggle("showmenu")
});


const elementList = document.querySelectorAll(" ul.menuitem li ");


elementList.forEach(singleLi =>
{




    singleLi.addEventListener('click', function ()
    {


        this.querySelector("ul  ").classList.toggle("showSubMenu")
        this.querySelector("ul li a span i").classList.toggle("fa-caret-up")




    });





});




