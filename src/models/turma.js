export class Turma {
  constructor(cursoId, nome, turno) {
    this.turmaId = Math.random();
    this.cursoId = cursoId;
    this.nome = nome;
    this.turno = turno;
    this.alunos = [];
  }

  addAluno(aluno) {
    this.alunos.push(aluno);
  }
}
