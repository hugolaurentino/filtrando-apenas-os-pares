const original = [1, 4, 12, 21, 53, 88, 112];
const total = []

for (let index = 0; index < original.length; index++) {
    if (original[index] % 2 === 0) {
        total.push(original[index])
    }
}
console.log(total);