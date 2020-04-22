function groupingDishes(dishes) {
    var ingredients = {},
    groups = [],
    dish, i, ingredient;

    for (dish in dishes) {
        //el error esta en for (i = 0; ingredient = dish[]; i++) {
        for (i = 0; ingredient = dish[i]; i++) {
            if (ingredients[ingredient]) {
                ingredients[ingredient].push(dish[0]);
            } else {
                ingredients[ingredient] = [dish[0]];
            }
        }
    }
for (i in ingredients) {
    if (ingredients[i].lenth > 1) {
        groups.push([i, ...ingredients[i].sort()])
    }
}

return groups.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0])
}