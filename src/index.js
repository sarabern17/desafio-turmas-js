import { Aluno } from "./models/aluno";
import { Curso } from "./models/curso";
import { Turma } from "./models/turma";

const cursos = [
  new Curso("Tecnologia da Informação", 1, [11, 12]),
  new Curso("Gestão de Empresas", 2, 21)
];

const turmas = [
  new Turma("TI Manhã", 11, "Manhã"),
  new Turma("TI Noite", 12, "Noite"),
  new Turma("GE Manhã", 21, "Manhã"),
  new Turma("GE Noite", 22, "Noite")
];

function findCursoByName(name) {}

function findTurmaByName(name) {}

// Iorran, Tecnologia da Informação, Noite
function matricularAluno(nome, cursoName, turno) {}

matricularAluno("Marcel Carvalho", "Tecnologia da Informação", "Manhã");

/*
Dada a array de notas dos alunos, ordene-a de maneira crescente e decrescente

array de notas : 40, 2, 5, 15, 27


const array = [40, 5, 2, 15, 27];

array.forEach((currentValue, index) => {
  console.log(array[index + 1]);
});

const aluno = new Aluno("Iorran", 3, 2);
*/

/*
let turmaGE = [
  const id = 1
  alunos = [
    
    {
       name: "José",
       numeroDeEstudante:50040531
    },
 
    {
      name: "Paulo",
      numeroDeEstudante: 50040532
    }
  ]
]
*/
