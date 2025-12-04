function corrigir() {

    // pegando nome e data
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;

    // gabarito
    const respostasCorretas = {
        q1: "c", // Paris
        q2: "b"  // aqui você altera depois
    };

    let pontos = 0;
    const valorPorQuestao = 20;

    // verificar todas as questões automaticamente
    for (let questao in respostasCorretas) {
        let marcada = document.querySelector(`input[name="${questao}"]:checked`);

        if (marcada && marcada.value === respostasCorretas[questao]) {
            pontos += valorPorQuestao;
        }
    }

    // exibir resultado
    document.getElementById("resultado").innerHTML =
        `Aluno: <b>${nome}</b><br>
         Data: <b>${data}</b><br><br>
         Pontuação Final: <b>${pontos} pontos</b>`;
}
