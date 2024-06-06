const textarea = document.getElementById('myTextarea');
let texto_efecto_typing = document.getElementById('texto_efecto_typing');
let texto = "Sebastian Usma";

function crear_efecto_typing(elemento,texto_p,i=0){
        elemento.textContent += texto_p[i];
        if(i == texto.length ){
            console.warn("fin del typing")
            i = -1;
            elemento.textContent = "";
        }
            setTimeout(()=>{
                crear_efecto_typing(texto_efecto_typing,texto,i+1);
            },200);
            console.log(texto_p[i]);
        
        
}
crear_efecto_typing(texto_efecto_typing,texto);


textarea.addEventListener('click', () => {
    textarea.setSelectionRange(0, 0); // Coloca el cursor al inicio
    textarea.focus(); // Asegura que el textarea tiene el foco
});