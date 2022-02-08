
const allmain = document.querySelectorAll('.main_tab .menu_tab ul a');
const pane = document.querySelectorAll('.tab_oane');

allmain.forEach(list => {


    list.addEventListener(`click`, function (e){
        e.preventDefault()
        allmain.forEach(list => {
            list.classList.remove('active'); 
        });  
        list.classList.add('active'); 

        pane.forEach(list => {
          list.classList.remove('active');
        });
        const show = document.querySelector(this.getAttribute('href'));
        show.classList.add('active')

    });
});