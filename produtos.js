// Lista base dos 14 produtos. Preços e stock são EXEMPLOS: ajusta-os na página Gestão.
// A foto de cada produto é lida da pasta imagens_casa_direne/. Se o ficheiro não existir, a loja mostra "Foto em breve".

const PRODUTOS_BASE = [
  { id: 1,  nome: "Sapatos de croché com sola reaproveitada", categoria: "Croché", preco: 45, stock: 1, visivel: true, personalizavel: "Escolha de cor e tamanho", imagem: "imagens_casa_direne/sapatos croche.jpg" },
  { id: 2,  nome: "Saia de malha ponto pied-de-poule", categoria: "Malha", preco: 55, stock: 3, visivel: true, personalizavel: "Escolha de cores e tamanho", imagem: "imagens_casa_direne/saia de malha ponto pied-de-poule.jpg" },
  { id: 3,  nome: "Colar coração e brincos de croche", categoria: "Croché", preco: 15, stock: 2, visivel: true, personalizavel: "Cor da linha e tipo de missangas", imagem: "imagens_casa_direne/colar e brincos croche.jpg" },
  { id: 4,  nome: "Rosas cores em croche", categoria: "Croché", preco: 3 , stock: 10, visivel: true, personalizavel: "Preço por unidade. Escolha de cores das flores", imagem: "imagens_casa_direne/rosas cores croché.jpg" },
  { id: 5,  nome: "Bouquet de rosas embrulhado para oferta", categoria: "Croché", preco: 25, stock: 4, visivel: true, personalizavel: "Cores das flores e do embrulho", imagem: "imagens_casa_direne/bouquet rosas croche.jpg" },
  { id: 6,  nome: "Saia em croche", categoria: "Croché", preco: 50, stock: 2, visivel: true, personalizavel: "Escolha de cores e tamanho", imagem: "imagens_casa_direne/saia de croche.jpg" },
  { id: 7,  nome: "Mala em croché de fio de malha", categoria: "Malha", preco: 25, stock: 2, visivel: true, personalizavel: "Escolha de cor", imagem: "imagens_casa_direne/mala de malha.jpg" },
  { id: 8,  nome: "Top em croche", categoria: "Croché", preco: 20, stock: 3, visivel: true, personalizavel: "Escolha de cores e tamanho", imagem: "imagens_casa_direne/Top croche.jpg" },
  { id: 9,  nome: "Caneca pintada à mão", categoria: "Pintura", preco: 6, stock: 5, visivel: true, personalizavel: "Desenho e mensagem à escolha", imagem: "imagens_casa_direne/caneca porcelana pintada.jpg" },
  { id: 10, nome: "Quadro bordado—menina arco-íris", categoria: "Bordados", preco: 50, stock: 1, visivel: true, personalizavel: "Cores do cabelo e do gorro", imagem: "imagens_casa_direne/quadro bordado menina arco-iris.png" },
  { id: 11, nome: "Candeeiro de teto de conchas", categoria: "Outras técnicas", preco: 45, stock: 2, visivel: true, personalizavel: "Número de fios e comprimento", imagem: "imagens_casa_direne/candeeiro teto conchas.jpg" },
  { id: 12, nome: "Garrafas de vidro pintados à mão ", categoria: "Pintura", preco: 10, stock: 3, visivel: true, personalizavel: "Cores e motivo do desenho", imagem: "imagens_casa_direne/garrafas deco.jpg" },
  { id: 13, nome: "Sapatos azul turquesa", categoria: "Croché", preco: 50, stock: 2, visivel: true, personalizavel: "Escolha de cor e tamanho", imagem: "imagens_casa_direne/sapatos croché azul.jpg" },
  { id: 14, nome: "Caça-Sonhos croche espiral ", categoria: "Croché", preco: 12, stock: 3, visivel: true, personalizavel: "Caça-Sonhos croche em espiral escolha cores", imagem: "imagens_casa_direne/catasonhos croche.jpg" },
  { id: 15, nome: "Espelho decorativo com colheres de plástico reaproveitadas", categoria: "Outras técnicas", preco: 35, stock: 2, visivel: true, personalizavel: "Escolha de cores e acabamento", imagem: "imagens_casa_direne/espelho de colheres de plástico.jpg"},
  { id: 16, nome: "Bolo de Bolacha d'Irene", categoria: "Outras técnicas", preco: 20, stock: 2, visivel: true, personalizavel: "Disponivel por encomenda. Preço por Kg", imagem: "imagens_casa_direne/bolo-bolacha-direne.jpg"}
];

const CHAVE_PRODUTOS = "casadirene_produtos";

// Lê os produtos guardados pela página Gestão; se não houver, usa a lista base.
function carregarProdutos() {
  try {
    const guardado = localStorage.getItem(CHAVE_PRODUTOS);
    if (guardado) return JSON.parse(guardado);
  } catch (e) { /* sem armazenamento: usa a lista base */ }
  return PRODUTOS_BASE.map(p => ({ ...p }));
}

function guardarProdutos(lista) {
  try { localStorage.setItem(CHAVE_PRODUTOS, JSON.stringify(lista)); } catch (e) {}
}

function reporProdutos() {
  try { localStorage.removeItem(CHAVE_PRODUTOS); } catch (e) {}
}



const formulario = document.getElementById("formEncomenda");
const ficheiro = document.getElementById("ficheiro");
const previewImagem = document.getElementById("previewImagem");
const resultado = document.getElementById("resultado");

ficheiro.addEventListener("change", function () {

    const arquivo = this.files[0];

    if (!arquivo) {
        previewImagem.style.display = "none";
        return;
    }

    const leitor = new FileReader();

    leitor.onload = function (e) {
        previewImagem.src = e.target.result;
        previewImagem.style.display = "block";
    };

    leitor.readAsDataURL(arquivo);

});

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const corSelecionada =
        document.querySelector('input[name="cor"]:checked')?.value;

    resultado.innerHTML = `
        ✅ Pedido enviado com sucesso!<br>
        Cor escolhida: <strong>${corSelecionada}</strong><br>
        Tamanho: <strong>${tamanho.value}</strong>
    `;

    formulario.reset();
    previewImagem.style.display = "none";

});