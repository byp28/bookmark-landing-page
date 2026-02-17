const tabs = [...document.querySelectorAll(".tab")]
const selectTab = [...document.querySelectorAll(".stab")]

const questions = [...document.querySelectorAll(".question")]
const awnsers = [...document.querySelectorAll(".awnser")]
const arrows = [...document.querySelectorAll(".arrow")]

const overlay = document.querySelector('#overlay');
const open_menu = document.querySelector('#open-menu');
const close = document.querySelector('#close');

const cInput = document.querySelector('#cInput');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const errorIcon = document.querySelector('#error');
const submit = document.querySelector('#submit');


open_menu.addEventListener("click",()=>{
    overlay.classList.remove('hidden');
})
close.addEventListener("click",()=>{
    overlay.classList.add('hidden');
})

submit.addEventListener("click",()=>{
    
    if(isEmail(email.value)){
        cInput.classList.remove("border-3")
        cInput.classList.remove("border-[#FB5859]")
        cInput.classList.remove("bg-[#FB5859]")
        errorIcon.classList.add("hidden")
        message.classList.add("hidden")
    }else{
        cInput.classList.add("border-3")
        cInput.classList.add("border-[#FB5859]")
        cInput.classList.add("bg-[#FB5859]")
        errorIcon.classList.remove("hidden")
        message.classList.remove("hidden")
    }

})


const isEmail= (str)=> {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(str);
}

const closeAllTab = ()=>{
    tabs.map((tab)=>{
        tab.classList.remove("hidden");
        tab.classList.add("hidden")
    })
} 

const removeClass = ()=>{
    selectTab.map((select)=>{
        select.classList.remove("border-b-5")
        select.classList.remove("border-b-[#FB5859]")

        select.classList.remove("border-b-2")
        select.classList.remove("border-gray-300")

        select.classList.add("border-b-2")
        select.classList.add("border-gray-300")
    })
}

const rotateArrow = ()=>{
    arrows.map((arrow, i)=>{
        if(awnsers[i].classList.contains("hidden")){
            arrow.classList.remove("rotate-180")
            arrow.classList.remove("rotate-0")
            arrow.classList.add("rotate-0")
        }else{
            arrow.classList.remove("rotate-180")
            arrow.classList.remove("rotate-0")
            arrow.classList.add("rotate-180")
        }
    })
}

questions.map((question, i)=>{
    question.addEventListener("click", ()=>{
        awnsers[i].classList.toggle("hidden")
        rotateArrow()
    })
})

selectTab.map((select, i)=>{
    select.addEventListener("click", ()=>{
        closeAllTab()
        removeClass()
        tabs[i].classList.remove("hidden");
        tabs[i].classList.add("flex")
        select.classList.add("border-b-5")
        select.classList.add("border-b-[#FB5859]")
    })
})