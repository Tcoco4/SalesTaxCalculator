 function resetBasket(){
    clearInputFields();
    document.getElementById('displayReceipt').innerHTML='';
    document.getElementById('displayShopItems').innerHTML='';
    displayShopItems();
}

function calculateTotal(){
        document.getElementById('displayReceipt').innerHTML= '';
    var selectedItemsIndexes = [];

        $.each($('input[name="item"]:checked'), function(){
            selectedItemsIndexes.push($(this).val());
        })

    var taxes=0;
    var totalCost=0;

    selectedItemsIndexes.forEach(index=>{

        var item = shopItems[index];
        if(item.isImported){
                taxes += (5/100 * item.price)
        }

        if( item.category === 'Other'){
            taxes += (10/100 *  item.price);
        }

        totalCost+= item.price;
    });

    taxes = (Math.ceil(taxes*20)/20).toFixed(2);

    totalCost+= parseFloat(taxes);

    $('#displayReceipt').append(
        '<h2>Receipt of Items</h2>',
    )
    selectedItemsIndexes.forEach(index => {
        var item = shopItems[index];
        $('#displayReceipt').append(
            ''+item.name+': '+item.price+'<br>'
        )
    });
    $('#displayReceipt').append(
        'Sales Taxes: '+taxes+'<br>',
        'Total: '+totalCost.toFixed(2)+'<br>'
    )
}

function checkInputFields(){
    $('#submitInputData').attr('disabled', true);
    $('#select, #itemName, #itemPrice').change(function () {
        if ( $('#select').val() != 'Select Category' && $('#itemName').val() != '' &&  $('#itemPrice').val() != '') {
            $('#submitInputData').attr('disabled', false);
        } else {
            $('#submitInputData').attr('disabled', true);
        }
    });
}

function updateShopProducts(newProduct){
        this.shopItems.push(newProduct);
        document.getElementById('displayShopItems').innerHTML='';
        this.displayShopItems();
}

function clearInputFields(){
    document.getElementById('itemName').value=null;
    document.getElementById('itemPrice').value=null;
    document.getElementById('select').value='Select Category';
    document.getElementById('import').checked= false;
}

function addItem(){
    var itemName= document.getElementById('itemName').value;
    var itemPrice= document.getElementById('itemPrice').value;
    var itemCategory= document.getElementById('select').value;
    var itemImported = document.getElementById('import').checked;

    if(itemImported === true){
        itemName = 'Imported '+itemName;
    }
    this.updateShopProducts({"name": itemName, "price": parseFloat(itemPrice), "isImported": itemImported, "category": itemCategory});
    this.clearInputFields();
}

function displayShopItems(){
    checkInputFields();
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