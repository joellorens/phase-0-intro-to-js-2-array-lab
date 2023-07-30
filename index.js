// Write your solution here!
// const firstCat = Milo
// const secondCat = Otis
// const thirdCat = Garfield

// function logCats("Milo", "Otis", "Garfield");
// console.log(Cats);
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name)
    return cats

}
function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return cats
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return cats
}
function appendCat(name) {
    const backCats = [...cats, "Broom"]
    return backCats
}
function prependCat(name) {
    const frontCats = ["Arnold", ...cats]
    return frontCats
}
function removeLastCat(name) {
    const lessCats = cats.slice(0, -1)
    return lessCats
}
function removeFirstCat(name) {
    const fewerCats = cats.slice(1)
    return fewerCats
}