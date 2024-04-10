document.addEventListener("DOMContentLoaded", function() {
    const puzzleContainer = document.getElementById("puzzle-container");
    const botaoEmbaralhar = document.getElementById("botaoEmbaralhar");
    botaoEmbaralhar.onclick = shufflePieces;

    const victoryMessage = document.getElementById("victory-message");

    let pieces = [];

    // Cria as peças do quebra-cabeça
    for (let i = 0; i < 25; i++) {
        const piece = document.createElement("div");
        piece.classList.add("puzzle-piece");
        piece.style.backgroundImage = `url('quebracabeca.jpg')`;
        piece.style.backgroundPosition = `-${i % 5 * 100}px -${Math.floor(i / 5) * 100}px`;
        piece.style.order = i;
        piece.setAttribute("data-order", i);
        piece.addEventListener("click", handleClick);
        puzzleContainer.appendChild(piece);
        pieces.push(piece);
    }

    // Embaralha as peças
    shufflePieces();

    // Função para embaralhar as peças
    function shufflePieces() {
        pieces.sort(() => Math.random() - 0.5);
        pieces.forEach((piece, index) => {
            piece.style.order = index;
            console.log(piece);
        });

    }

    // Função para verificar se o quebra-cabeça está resolvido
    function checkIfSolved() {
        for (let i = 0; i < pieces.length; i++) {
            const piece = pieces[i];
            if (parseInt(piece.style.order) != parseInt(piece.getAttribute("data-order"))){
                return false;
            }
        }
        return true;
    }

    // Função para lidar com os cliques nas peças
    function handleClick() {
        const clickedPiece = this;
        const emptyPiece = pieces.find(piece => parseInt(piece.style.order) == 24);

        console.log("try click")
        console.log(clickedPiece);
        console.log(emptyPiece);

        const clickedOrder = clickedPiece.style.order;
        const emptyOrder = emptyPiece.style.order;

        clickedPiece.style.order = emptyOrder;
        emptyPiece.style.order = clickedOrder;

        // Verifica se o quebra-cabeça foi resolvido
        if (checkIfSolved()) {
            victoryMessage.style.display = "block";
        }
        }
});


