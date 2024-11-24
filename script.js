let buttons = document.querySelectorAll(".BTN");
for(let i=0; i < buttons.length; i++)
    {
        buttons[i].addEventListener("click", () => {
            buttons[i].classList.add("after_click"); 
            buttons[i].innerHTML="Following";
           
        })
    };

    let likebtn = document.querySelectorAll("#H_BTN");
for(let i=0; i < buttons.length; i++)
    {
        likebtn[i].addEventListener("click", () => {

           

            likebtn[i].classList.add("fas"); 
         
            }
        )
    };
