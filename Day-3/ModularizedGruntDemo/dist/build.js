function Item(id,name,desc,price,quantity,rating){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.rating = rating;
}
var itemOperations={
    itemList:[],
    addItem:function(id,name,price,quantity,desc,rating){
        var itemObject = new Item(id,name,desc,price,quantity,rating);
        this.itemList.push(itemObject);
    }
}