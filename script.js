
const valorLS = localStorage.getItem("clicou")
     
window.addEventListener("load", () => {


  if(!valorLS){
     setTimeout(() => {
         const modalOption = document.querySelector(".modal-interactive");
         const ulEfeito = document.querySelector(".ul-fixed")

        
        ulEfeito.classList.add("ul-desativado")

          modalOption.classList.add("showModal-interactive")  

     }, 1000)
  }
})
    


const fixedNav = () => { 
   
    const scrollPosition = 100;
    const scroll = window.scrollY;
    const nav = document.querySelector(".nav");
    
    if(scroll >= scrollPosition){
      nav.style.position = "fixed"
      nav.style.background = "#0a0a0a"
    } else {
      nav.style.position = "static";
      nav.style.background = "#0000"
    }
      

}

window.addEventListener("scroll", fixedNav)


const menuHamburguer = () => {
 
    const spans = document.querySelector(".bar");
    const modalHamburguer = document.querySelector(".modal-header-content")
    const close = document.querySelector(".close-modal-header")
    const span1 = document.querySelector(".span1")
    const span3 = document.querySelector(".span3")



    spans.addEventListener("click", () => {
        modalHamburguer.classList.toggle("showmodal-span")

        setTimeout(() => {
              span1.classList.add("animate-one")
              span3.classList.add("animate-three")
        }, 2000)
    })

    close.addEventListener("click", () => {

        span1.classList.remove("animate-one")
        span3.classList.remove("animate-three")

      
        modalHamburguer.classList.remove("showmodal-span")
     
       
  
    }) 

    /* Modal de interatividade, no lado direito*/

        
    
   

    
    const ModalRightBottom = () => {

      const openModalInteractive = document.querySelector("#open-modal-option")
      const showModal = document.querySelector(".modal-interactive")
      const ulNotification = document.querySelector(".ul-fixed");
      const openBottom = document.querySelector(".icon-open-content")
      const spanLine = document.querySelector(".line-span-fixed")
      const spanContainer = document.querySelector(".icon-open")
      const spanLineContainer = document.querySelector(".span-line-container")
      const effect1 = document.querySelectorAll(".span-line-effect")[0];
      const effect3 = document.querySelectorAll(".span-line-effect")[2];



     
      openBottom.addEventListener("click", () => {
           

    
         if(!ulNotification.classList.contains("ativar")){
 

          ulNotification.classList.add("ativar")
          ulNotification.classList.remove("effeito-itens")
          ulNotification.classList.add("ativar")
          spanLine.style.height = "8rem"; 
          spanLine.classList.add("line-visible")
          spanContainer.style.display = "none"
          effect1.style.transform = "translateY(-10px) rotate(-60deg);"
          effect3.style.transform = "translateY(-37px) rotate(60deg);"    
            effect1.classList.add("effect-one")
            effect3.classList.add("effect-three")
         
        
        
         }    


         spanLineContainer.addEventListener("click", () => {

          ulNotification.classList.add("effeito-itens")
          ulNotification.classList.remove("ativar")
          spanLine.style.height = "0rem"; 
          spanLine.classList.remove("line-visible")
          effect1.classList.remove("effect-one")
          effect3.classList.remove("effect-three")
          spanContainer.style.display = "block"

         })
          
         
  

      openModalInteractive.addEventListener("click", () => {

        localStorage.setItem("clicou", "usuario")

        ulNotification.classList.add("ul-desativado")

        if(!showModal.classList.contains("showModal-interactive")){
          
          showModal.classList.add("showModal-interactive")
          showModal.classList.remove("closeModal")
        }else{
          showModal.classList.remove("showModal-interactive")
          showModal.classList.add("closeModal")
         
        }
   
         
    
       
      })



 
    

    })
    
    }

    ModalRightBottom();
    

  

}
 
menuHamburguer()







    
    const modalInteractive = () => {
      const btnModal = document.querySelector(".btn-modal-interactive");
      const respostaUsuario = document.querySelector(".response");
      const userAgent = document.querySelector(".response-agent");
      const modalHeader = document.querySelector(".modal-response-agent");
      const inputModal = document.querySelector(".input-modal");
      const imgAgent = document.getElementById("agent-response-secundary");
      btnModal.addEventListener("click", () => {
        const inputValue = inputModal.value;
        respostaUsuario.textContent = "";
        modalHeader.classList.remove("estilo");
        userAgent.textContent = "";
  
        switch (inputValue) {
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case '6':
            respostaUsuario.textContent = inputValue;
            modalHeader.classList.add("estilo");
            userAgent.textContent = "Um momento...";
            imgAgent.style.display = "block";  
  
            const responses = {
              "1": "Estamos localizados na: Av. José Luiz Ferraz, 55 - Recreio dos Bandeirantes, Rio de Janeiro",
              "2": "Aceitamos transferência bancária e Pix como métodos de pagamento.",
              "3": "Não se preocupe com taxas adicionais. Ao reservar nosso apartamento, todas as taxas já estão incluídas no preço..",
              "4": "Nosso apartamento oferece um espaçoso ambiente com 3 quartos, 2 banheiros, sala, cozinha e uma adorável varanda para sua estadia confortável.",
              "5": "Nosso apartamento acomoda até 7 pessoas, tornando-o ideal para grupos de amigos ou famílias numerosas. Reserve conosco e desfrute de um espaço confortável e acolhedor para todos os seus entes queridos..",
              "6": "Reserve agora: Clique no botão do WhatsApp abaixo e converse diretamente com o anfitrião.",
            };
    
            if (responses[inputValue]) {
              setTimeout(() => {
                userAgent.textContent = responses[inputValue];
              }, 1000);
            }
            break;
          default:
              imgAgent.style.display = "block";  
              modalHeader.classList.add("estilo");
              userAgent.textContent = "Valor incorreto"
            break;
        }
      });
  
    }


  modalInteractive();
  

  const closeModalInteractive = () => {
       
    const spanClose = document.querySelector(".close-modal-interactive");
    const modalInteractive = document.querySelector(".modal-interactive");
    const ulEfeito = document.querySelector(".ul-fixed")
        

      spanClose.addEventListener("click", () => {
        modalInteractive.classList.remove("showModal-interactive")
        modalInteractive.classList.add("closeModal")

        localStorage.setItem("clicou", "usuario")
        ulEfeito.classList.add("ul-desativado")

           
       
      })

  }

  closeModalInteractive()
  

const abrirAccordion = () => {
    const accordionHeader = document.querySelectorAll(".accordion-header")

    accordionHeader.forEach((header) => {
        const proximoFilho = header.nextElementSibling;
        
        header.addEventListener("click", () => {

                      
            if(!proximoFilho.classList.contains("openAccordion")){
                header.setAttribute("aria-expanded", "true")
                proximoFilho.classList.remove("closeAccordion")
                proximoFilho.classList.add("openAccordion") 
                header.classList.remove("desactive")
                header.classList.add("active")

            }  else{
                proximoFilho.classList.remove("openAccordion")
                proximoFilho.classList.add("closeAccordion")
                header.classList.remove("active")
                header.classList.add("desactive")
                header.setAttribute("aria-expanded", "false")
            }

        }) 

         
    }) 

    

       

      
     
}

abrirAccordion();


function animarScroll(){
 
  const primeiroHeader = document.querySelector(".accordion-header");
  const primeiroAccordion = document.querySelector(".accordion-body");
  const alturaPagina = window.pageYOffset + window.innerHeight * 0.95;

  if(alturaPagina >= primeiroAccordion.offsetTop){

   primeiroAccordion.classList.add("openAccordion");
    primeiroHeader.setAttribute("aria-expanded", "true")

  
  } 


}

animarScroll()

window.addEventListener("scroll", animarScroll)


const alteraIdiomaEn = () => { 
   

  const select = document.querySelector(".lista")

  select.addEventListener("change", (e) => {

    if(select.value == "en"){
      window.location.href = "en.html"   
    }

    

  })

  

}

  
alteraIdiomaEn() 


const alterarIdiomaPt = () => {

  const select = document.querySelector("select");

  select.addEventListener("change", () => {
   
    if(select.value == "pt"){
      window.location.href = "index.html"
    }
      
  })

  

}
alterarIdiomaPt()


 

const galleryAnimation = () => {
 
  const anime = document.querySelectorAll("[data-anime]");

   const altura = window.innerHeight + window.pageYOffset * 0.95

   anime.forEach((elemento) => {
      
    if(altura >= elemento.offsetTop){
      elemento.classList.add("animate")
    } else{
      elemento.classList.remove("animate")

    }

   })
   

}


galleryAnimation()


window.addEventListener("scroll", galleryAnimation)