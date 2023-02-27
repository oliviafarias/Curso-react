const ppl_arr = ['🙂', '😁', '😐', '😐', '🙂']

console.log(ppl_arr)

const ppl_arr_with_msg = ppl_arr.map((emoji) => (emoji === '🙂' || emoji === '😁') ? '😁' : '🙂'
);

console.log(ppl_arr_with_msg);