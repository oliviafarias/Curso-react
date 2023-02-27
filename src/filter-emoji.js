const ppl_arr = [
 {
    emoji: '🙂',
    nome: 'felizinho',
 },
 {
    emoji: '😁',
    nome: 'excitado',
 },
 {
    emoji: '😐',
    nome: 'indiferente',
 },
 {
    emoji: '😐',
    nome: 'indiferente',
 },
 {
    emoji: '🙂',
    nome: 'felizinho',
 },
]

console.log(ppl_arr)

const ppl_arr_with_msg = ppl_arr.filter((item) => item.emoji === '🙂' ? true : false)

console.log(ppl_arr_with_msg);