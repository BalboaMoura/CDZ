// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo.
// Passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles.
const personagens = document.querySelectorAll('.personagem');/* Quando coloca ponto e o nome da classe */



// Passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        // corrigir erro ao usar o celular
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        //OBJETIVO 2 - Quando passar o mouse em cima do presonagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.
        //Passo 1 - pegar o elemento do presonagem grande pra adicionar as informações nele.
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // Passo 2 - Alterar a imagem do personagem grande.
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/${idPersonagem}.png`;

        // Passo 3 -Alterar o nome do personagem grande.
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Passo 4 - Alterar a descrição do personagem grande.
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})


