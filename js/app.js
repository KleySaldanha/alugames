let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button'); 
    let jogo = gameClicado.querySelector('.dashboard__item__name');
    let nomeJogo = jogo.textContent;

    if(imagem.classList.contains('dashboard__item__img--rented')){
        Swal.fire({
            title: "Tem certeza?",
            text: `Você está devolvendo o jogo ${nomeJogo}`,
            icon: "warning",
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Confirmado!",
                text: `O jogo ${nomeJogo} foi devolvido.`,
                icon: "success"
              });
            } else {
                imagem.classList.add('dashboard__item__img--rented');
                botao.classList.add('dashboard__item__button--return');
                botao.textContent = "Devolver";
                jogosAlugados++;   
            }
          });
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = "Alugar";
        jogosAlugados--;
    } else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}