let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

function whichPresents (w, p) {
    let guess = [];
    for (let i = 0; i < p.length; i++){
        let res = w.filter(e => e.size === p[i].size && e.clatters === p[i].clatters && e.weight === p[i].weight );
        res.forEach(e => guess.push(e.name))
    }
    return guess;
}

console.log(whichPresents(wishlist, presents));