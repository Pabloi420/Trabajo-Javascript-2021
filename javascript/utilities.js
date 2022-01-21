
function createButton () {
    contenedorInicial.appendChild(mensajeInicial);
    contenedorInicial.classList.add("containerInicial")
    mensajeInicial.innerHTML="Aun no cargaste datos";
    contenedorInicial.appendChild(agregar);
    agregar.classList.add ("btn","btn-outline-light","marginButtom")
    agregar.innerHTML="Agregar voto";
    mensajeInicial.classList.add("marginButtom")
};

function createLayout () {
    overlay.classList.remove('display-none');
    modal.classList.add('modal');
}

function changeMenu(){
    let menuDos=document.formulario.menuDos.options;
    itemMenu = document.formulario.menu[document.formulario.menu.selectedIndex].value;
    if (itemMenu != 0) { 
       losCandidatos=categoria[itemMenu]; 
       num_candidatos = losCandidatos.length;  
       document.formulario.menuDos.length = num_candidatos; 
       for(i=0;i<num_candidatos;i++){ 
        menuDos[i].value=losCandidatos[i];
        menuDos[i].text=losCandidatos[i] ;
       }	
    }else{ 
      menuDos.length = 1 ;
      menuDos[0].value = "-"; 
      menuDos[0].text = "-" ;
    } 
    menuDos[0].selected = true; 
    createInput();
}

//pensar como habilitar / desabilitar boton //

function createInput () {
    modal.appendChild(formularioInput);
    formularioInput.appendChild(labelNota);
    formularioInput.appendChild(inputNota);
    labelNota.innerText="Ingrese nota";
    labelNota.classList.add("halfWidht");
    Object.keys(atributos).map(key => {
        inputNota.setAttribute(key, atributos[key]);
      });
    inputNota.classList.add("halfWidht");
    createSelect ();
    modal.appendChild(aceptar);
    modal.appendChild(cancelar);
    aceptar.innerText="Aceptar";
    cancelar.innerText="Cancelar";
    aceptar.classList.add("btn","btn-outline-dark");
    cancelar.classList.add("btn","btn-outline-dark");
}

function createSelect () {
    tituloSelect.innerText= "¿La recomienda?";
    modal.appendChild(tituloSelect);
    modal.appendChild(recomendacion);
    recomendacion.appendChild(seRecomienda);
    recomendacion.appendChild(noSeRecomienda);
    seRecomienda.innerText="Si";
    noSeRecomienda.innerText="No";

}

//ver como resetear menuDos//
//pulir codigo repetido//

function reset() {
  menu.selectedIndex = 0;
  modal.removeChild(formularioInput);
  formularioInput.removeChild(labelNota);
  formularioInput.removeChild(inputNota);
  inputNota.valueAsNumber=0;
  modal.removeChild(aceptar);
  modal.removeChild(cancelar);
  modal.removeChild(tituloSelect);
  modal.removeChild(recomendacion);
  recomendacion.removeChild(seRecomienda);
  recomendacion.removeChild(noSeRecomienda);
  overlay.classList.add('display-none');
  modal.classList.remove('display-none');
  overlay.removeChild(progress);
  progress.removeChild(bar);
}

function elegirCandidato () {
  candidatoElegido = {
    Categoria: document.formulario.menu[document.formulario.menu.selectedIndex].text,
    Candidato: document.formulario.menuDos[document.formulario.menuDos.selectedIndex].text,
    Puntuacion: inputNota.valueAsNumber,
    Recomienda: recomendacion.options[recomendacion.selectedIndex].text,
}   
}

function agregarVoto () {
    elegirCandidato();
    overlay.classList.add('display-none');
    mensajeInicial.classList.add('display-none');
    votos.push(candidatoElegido);
    keys = Object.keys(votos[0]);
}

function cancelarOver () {
    overlay.classList.add('display-none');
}

let createHeader = (claves) => {
    let trEl = document.createElement("tr");
    let thEl = document.createElement("th");
    corroborarHeader=false;
    contenedorInicial.appendChild(tableEl);
    tableEl.classList.add("table","table-striped");
    for (let i = 0; i < claves.length; i++) {
      let thEl = document.createElement("th");
      thEl.innerHTML = claves[i];
      trEl.appendChild(thEl);
    }
    trEl.append(thEl);
    theadEl.appendChild(trEl);
    tableEl.appendChild(theadEl);
  }

  let createRow = (elemento) => {
    let trEl = document.createElement("tr");
    let newTd=document.createElement("td");
    btnEdi=document.createElement("button");
    btnEli=document.createElement("button");
    function asignEdit() {
      for (let i = 0; i < botonesEdi.length; i++) {
        const element = botonesEdi[i];
        element.setAttribute("data-item", i);
      }  
    }
    function asignDelete () {
      for (let i = 0; i < botonesEli.length; i++) {
        const element = botonesEli[i];
        element.setAttribute("data-item", i);
      } 
      }
    for (const clave in elemento) {
    let tdEl = document.createElement("td");
    tdEl.innerHTML = elemento[clave];
    trEl.appendChild(tdEl);
    }
    trEl.appendChild(newTd);
    newTd.appendChild(btnEdi);
    newTd.appendChild(btnEli);
    btnEdi.innerText="Editar";
    btnEli.innerText="Eliminar";
    btnEdi.classList.add("btn","btn-outline-light");
    btnEli.classList.add("btn","btn-outline-light");
    botonesEli.push(btnEli);
    botonesEdi.push(btnEdi);
    asignEdit();
    asignDelete()
    btnEdi.addEventListener("click", function(ev){
        let aEditar=this.dataset.item;
        createLayout();
        corroborarBody=false;
        createInput();
        document.formulario.menu[document.formulario.menu.selectedIndex].innerHTML=ev.target.parentElement.parentElement.childNodes[0].innerText
        document.formulario.menuDos[document.formulario.menuDos.selectedIndex].text=ev.target.parentElement.parentElement.childNodes[1].innerText
        inputNota.valueAsNumber=ev.target.parentElement.parentElement.childNodes[2].innerText
        recomendacion.options[recomendacion.selectedIndex].text=ev.target.parentElement.parentElement.childNodes[3].innerText
        console.log(aEditar);
        aceptar.addEventListener ("click", (ev) => {
          createProgress (); 
          elegirCandidato();
          votos.splice(aEditar, 1, candidatoElegido)
          tbodyEl.childNodes[aEditar].childNodes[0].innerHTML=document.formulario.menu[document.formulario.menu.selectedIndex].innerHTML
          tbodyEl.childNodes[aEditar].childNodes[1].innerHTML=document.formulario.menuDos[document.formulario.menuDos.selectedIndex].innerHTML
          tbodyEl.childNodes[aEditar].childNodes[2].innerHTML=inputNota.valueAsNumber
          tbodyEl.childNodes[aEditar].childNodes[3].innerHTML=recomendacion.options[recomendacion.selectedIndex].text  
        })
        });
    btnEli.addEventListener("click", function() {
        let aEliminar=this.dataset.item;
        tbodyEl.removeChild(tbodyEl.childNodes[aEliminar]);
        botonesEli.splice(aEliminar, 1);
        botonesEdi.splice(aEliminar, 1);
        votos.splice(aEliminar, 1);
        asignDelete();
        asignEdit();
    });
    return trEl;
  };

  let createBody = (elementos) => {
    tbodyEl.appendChild(createRow(elementos[elementos.length-1]));
    tableEl.appendChild(tbodyEl);
    contenedorInicial.appendChild(recomendBtn);
    contenedorInicial.appendChild(allBtn);
    recomendBtn.innerText="Tus recomendaciones";
    recomendBtn.classList.add("btn","btn-outline-light");
    allBtn.innerText="Ver todos tus votos";
    allBtn.classList.add("btn","btn-outline-light");
  };
 
let createProgress = () => {
    overlay.classList.remove('display-none');
    modal.classList.add('display-none');
    overlay.appendChild(progress);
    progress.appendChild(bar);
    progress.classList.add("myProgress");
    bar.classList.add("myBar", "abril");
    bar.innerText="Enviando";
    move ();
}

function move() {
  let i = 0
          if (i == 0) {
          i = 1;
          let width = 1;
          let id = setInterval(frame, 20);
          function frame() {
          if (width >= 100) {
         clearInterval(id);
        i = 0;
        } else {
        width++;
        bar.style.width = width + "%";
        }
        }
        }
}
