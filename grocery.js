var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price, unit) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.unit = unit;
    }
    return Grocery;
}());
function groceryDetails(Product) {
    return "Product: " + Product.name +
        ", Price per " + Product.unit + ": " + Product.price + " " +
        ", Quantity: " + Product.quantity;
}
var groceryList = [new Grocery("Milk", 1, 4.49, "Gallon"), new Grocery("Eggs", 1, 8.99, "Dozen"), new Grocery("Bread", 1, 3.99, "lbs")];
for (var _i = 0, groceryList_1 = groceryList; _i < groceryList_1.length; _i++) {
    var Item = groceryList_1[_i];
    document.body.innerHTML += groceryDetails(Item) + "<br\>";
}
