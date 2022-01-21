const overlay=document.getElementById("overlayConsulta");
const modal=document.getElementById("modal");
const menus=document.getElementById("menu")
let formularioTotal=document.getElementById("formulario")
let contenedorInicial=document.getElementById('tablaPremios');
let mensajeInicial=document.createElement('p');
let agregar=document.createElement('button');
let aceptar=document.createElement('button');
let cancelar=document.createElement('button');
let formularioInput=document.createElement('form')
let labelNota=document.createElement('label');
let inputNota=document.createElement('input');
let tituloModal=document.createElement('h1');
let recomendacion=document.createElement('select');
let tituloSelect=document.createElement('p');
let seRecomienda=document.createElement('option');
let noSeRecomienda=document.createElement('option');
let tableEl=document.createElement('table');
let theadEl = document.createElement("thead");
let tbodyEl = document.createElement("tbody");
let btnEli 
let btnEdi
let progress=document.createElement("div");
let bar=document.createElement("div");
let recomendBtn=document.createElement("button")
let allBtn=document.createElement("button")

window.addEventListener ("load", (ev)=>{
    createButton()
});

agregar.addEventListener("click", (ev)=>{
    createLayout()
    corroborarBody=true
});

menus.addEventListener("change", (ev)=>{
    changeMenu();
    createInput();
});

let corroborarHeader=true
let corroborarBody=true


aceptar.addEventListener("click", (ev)=>{
    if (corroborarBody){
    agregarVoto();
    }
    createProgress();
    setTimeout(() => {        
        reset();
        if (corroborarHeader) {
            createHeader(keys);} 
            if (corroborarBody)
            createBody(votos);
    }, 2000);
    })

cancelar.addEventListener("click", (ev)=>{
    createProgress();
    reset();
    cancelarOver();

})


recomendBtn.addEventListener("click", (ev) =>{

    let everyTr = tbodyEl.childNodes
    everyTr.forEach(element => {
      if (element.childNodes[3].innerText=="Si") {
        element.style.display=""
      } 
      else  {
        element.style.display="none"
      }
    });
  })

  allBtn.addEventListener("click", (ev)=>{
      
    let everyTr = tbodyEl.childNodes
    everyTr.forEach(element => {
        element.style.display=""
      })
  })