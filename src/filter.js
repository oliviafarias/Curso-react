const pessoas = [
    {
        nome: 'Olivia',
        idade: 26,
        profissao: 'Dev',
        foto: 'https://via.placeholder.com/150',
    },
    {
        nome: 'Filipe',
        idade: 34,
        profissao: 'Dev Sr',
        foto: 'https://via.placeholder.com/150',
    },
    {
        nome: 'Jurema',
        idade: 34,
        profissao: 'Dev Sr',
        foto: 'https://via.placeholder.com/150',
    },
]

const seniors = pessoas.filter((pessoa) => (pessoa.profissao === 'Dev Sr')).map(obj => (obj.nome));

console.log(seniors);

// const seniors_name = seniors.map(obj => (obj.nome));

// console.log(seniors_name);
// ['Filipe', 'Jurema']