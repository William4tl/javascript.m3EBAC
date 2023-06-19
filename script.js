// contagemregressiva(50);

document.addEventListener('submit', function( evento ){

    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById('formulario-01');

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
    let numero;
    numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

    if(!isNaN(numero)) {
        notas.push(numero);
    }
    }

    console.log(notas);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;

})


function validaCampoNumerico(elemento){

    elemento.addEventListen('focusout'), function(event) {
        }


        // evento alguma coisa aqui


        elemento.addEventListener('keyup', function(event) {
        if(this.value != "" && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            
        }else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');

