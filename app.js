


(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

//sections active
allsections.addEventListener('click', (e) =>{
      const id = e.torget.dataset.id;
      if(id){
          //remove selected from the other btns
          secBtns.forEach((btn) =>{
              btn.classList.remove ('active')
          })
          e.target.classList.add('active')

          //hide other sections
         sections.foreach((section)=>{
             section.classList.remoe('active')
         })
          const element = document.getElementById(id);
          element.classList.add('active');
      }
})
/*Taggle theme*/
const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click',() =>{
    let element = document.body;
    element.classList.toggle('light-mode')
})