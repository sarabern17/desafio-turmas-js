export class Aluno {
  constructor(nome, cursoId) {
    this.nome = nome;
    this.cursoId = cursoId;
    this.alunoId = this.makeId(4);
  }

  makeId(length) {
    let result = "";
    const characters = "0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return "5004" + result;
  }
}
