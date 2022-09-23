const corpoTabela = document.getElementById("corpo-tabela");

function receberDados() {
  const url = "http://10.0.3.132:1313/listar-alunos";
  console.log(url);

  fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
    // body: JSON.stringify({a: 1, b: 2})
  })
    .then((resultado) => {
      return resultado.json();
    })
    .then((dados) => {
      corpoTabela.innerHTML = ''
      for (var num = 0; num < dados.length; num++) {
        const criaLinha = document.createElement("tr");

        criaLinha.innerHTML = `
        <th scope="row">${dados[num].id}</th>
        <td>${dados[num].nome}</td>
        <td>${dados[num].telefone}</td>
        <td>${dados[num].email}</td>
        <td>${dados[num].turma}</td>
      `;
        corpoTabela.appendChild(criaLinha);

        console.log(dados[num]);
      }
    });
}
