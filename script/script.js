let $INSERT=document.querySelector(".llenar")
let $TEXT=document.querySelector(".texto")
let $ALERT=document.querySelector(".aviso")
let $UL=document.querySelector(".ul-llenar")
//Funciones
let ingresar=e=>{
    if($TEXT.value=="")
    {
        $ALERT.textContent="PORFAVOR INGRESE UN TEXTO";
        $ALERT.className="estilo";
    }
    else{
        $ALERT.textContent="";
        $UL.innerHTML+=`
        <div class="row sugerencia">
                        <div class="col-lg-6">
                            <li>
                                ${$TEXT.value}
                            </li>
                        </div>
                        <div class="col-lg-2">
                          <p>1</p>
                        </div>
                        <div class="col-lg-2">
                            <button><span class="jam jam-user-plus"></span></button>
                        </div>
                        <div class="col-lg-2">
                            <button><span class="jam jam-user-minus"></span></button>
                        </div>
                    </div>`
        $TEXT.value="";
    }
}
let like=5;
let apreto=(e)=>{
    if(e.target.classList.contains('jam-user-plus')){
       let cambiar=e.target.parentElement.parentElement.parentElement.children[1].children[0];
       cambiar.textContent=like++;
    }
    if(e.target.classList.contains('jam-user-minus')){
        let cambiar=e.target.parentElement.parentElement.parentElement.children[1].children[0];
       cambiar.textContent=like--;
    }
}
//Eventos
$INSERT.addEventListener("click",ingresar)
$UL.addEventListener("click",apreto)
