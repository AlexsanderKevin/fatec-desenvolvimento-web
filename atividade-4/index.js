class Estudante {
    constructor({ nome, email, ra, curso, disciplinas }) {
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
        this.disciplinas = disciplinas
    }
}

const estudante1 = new Estudante({
    nome: 'Kevin',
    email: 'kevin@gmail.com',
    ra: '1050482123033',
    curso: 'ADS',
    disciplinas: [
        'Programação WEB',
        'Gestão em TI',
        'Engenharia de Software'
    ]
})

const estudante2 = new Estudante({
    nome: 'Fulano',
    email: 'fulano@gmail.com',
    ra: '1050482123034',
    curso: 'Logística',
    disciplinas: [
        'Informatica',
        'Inglês',
        'Contabilidade'
    ]
})

console.log( estudante1 )
console.log( estudante2 )
