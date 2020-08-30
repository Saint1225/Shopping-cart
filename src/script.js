var shoplist = [
  {
  name: "i8",
  remark: "Super cool",
  qty: 1,
  price: 300
  },
  {
  name: "X6",
  remark: "Nice choice",
  qty: 1,
  price: 500
  },
  {
  name: "X4",
  remark: "Good choice",
  qty: 1,
  price: 1000
  },
  {
  name: "i4",
  remark: "Good choice",
  qty: 1,
  price: 2000
  }
]

var template = "<div class='item_block'><div class='item id'>{{id}}. </div><div class='item itemname'>{{name}}<br/></div><div class='item qty'>{{qty}}</div><div class='item price'>{{price}} $</div><div id={{delid}} data.del.id={{ddi}} class='item remove'>X</div></div>";

var total_temp = "<h3>Total</h3><div class='totalprice'>{{totalprice}} $</div>"

showlist();

function showlist(){
  $("#items").html("");
  var final_list = "";
  var total = 0;
  for (i=0;i<shoplist.length;i++){
    var current_item = shoplist[i];
    var del_item = i;
    var current_html = template.replace("{{id}}",i+1)
                               .replace("{{name}}",current_item.name)
                               .replace("{{qty}}",current_item.qty)
                               .replace("{{price}}",current_item.price)
                               .replace("{{delid}}",i)
                               .replace("{{ddi}}",i);
    $("#items").append(current_html);
    $("#"+del_item).click(
      function(){
        remove($(this).attr("data.del.id"));
      }
    )
    total += parseInt(current_item.price*current_item.qty);
  }
  var total_final = total_temp.replace("{{totalprice}}", total);
  $("#total").html(total_final);
}

$(".add").click(
  function(){
    shoplist.push(
    {
      name: $(".addname").val(),
      price: $(".addprice").val(),
      qty: $(".addqty").val()
    }
    )
    $(".addname").val("");
    $(".addprice").val("");
    $(".addqty").val("");
    showlist();
  }
)

function remove(id){
  shoplist.splice(id, 1);
  showlist();
}
