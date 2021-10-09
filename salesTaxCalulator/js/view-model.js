function displayShopItems(){
    let tempShopItems = JSON.parse(JSON.stringify(this.shopItems));
    tempShopItems.forEach((item, i) => {
            $('#displayShopItems').append(
                '<label><input name="item" id="item" type="checkbox" value='+i+' /><span>'+item.name+' R'+item.price+'</span></label><br>'
            ).val(item.name);
    });
}

var shopItems = 
    [{
          "name": "Book",
          "price": 12.49,
          "isImported": false,
          "category": "Book"
      },
      {
          "name": "Music CD",
          "price": 14.99,
          "isImported": false,
          "category": "Other"
      },
       {
          "name": "Chocolate Bar",
          "price": 0.85,
          "isImported": false,
          "category": "Food"
      },
       {
          "name": "Perfume",
          "price": 18.99,
          "isImported": false,
          "category": "Other"
      },
       {
          "name": "Paracetamol",
          "price": 9.75,
          "isImported": false,
          "category": "Medical Supplies"
      },
       {
          "name": "Imported Perfume for her",
          "price": 47.50, 
          "isImported": true,
          "category": "Other"
      },
       {
          "name": "Imported Perfume for him",
          "price": 27.99,
          "isImported": true,
          "category": "Other"
      },
       {
          "name": "Imported Chocolates for him",
          "price":  10.00, 
          "isImported": true,
          "category": "Food"
      },
       {
          "name": "Imported Chocolates for her",
          "price": 11.25,
          "isImported": true,
          "category": "Food"
    }];