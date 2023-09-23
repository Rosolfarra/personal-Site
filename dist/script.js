const bars = document.querySelector("#bars")
const menu = document.querySelector("#menu")
const x = document.querySelector("#x")
const link= document.querySelector(".nav-links")
// link.forEach(link => 
//       link.addEventListener('click' , ()=>{
    
//     link.classList.toggle('hidden') 
       

    
//      })
// );
x.addEventListener('click' , ()=>{
    
       menu.classList.toggle('hidden')
});
bars.addEventListener('click' , ()=>{
    
       menu.classList.toggle('hidden')
        });
       // menu
       const tabs = document.querySelectorAll(".tabs ul li");
       const all=document.querySelectorAll(".item-wrap");
       const foods=document.querySelectorAll(".food");
       const bevargs=document.querySelectorAll(".bevarge");
       const snacks=document.querySelectorAll(".snack");



       tabs.forEach(tab=>{
              tab.addEventListener("click", () =>{
tabs.forEach(tab=> {
       tab.classList.remove("active")
})
tab.classList.add("active")
const tabval= tab.getAttribute('data-tabs')
console .log(tabval)

all.forEach(item=> {
       item.style.display = 'none'
})
if(tabval == 'food'){
      foods.forEach(item=> {
              item.style.display = 'block'

              })
         }
         else if(tabval == 'snack'){
             snacks.forEach(item=> {
                      item.style.display = 'block'
        
                      })
                     }
                    else if(tabval == 'bevarge'){
                           bevargs.forEach(item=> {
                                    item.style.display = 'block'
                      
                                    })
                                   }
                                   else {
                                         all.forEach(item=> {
                                                 item.style.display = 'block'
                                   
                                   })
                            }
                     })
              })
      