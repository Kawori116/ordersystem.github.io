var basedrive_url = "https://drive.google.com/uc?id=";

var menulist = {};
menulist.oats = [
  {
    name: "Maple & Walnut Overnight Oats",
    ingredients: "Oats, Maple Syrup, Walnuts, Milk, Vanilla Extract, Cinnamon",
    price: 100,
    url: basedrive_url + "1IwduX6OJ_LY3VdpL2Bwg3Uuf__lMKT8P"
  },
  {
    name: "Apple Pie Oats",
    ingredients: "Oats, Apples, Milk, Maple Syrup, Cinnamon, Walnuts",
    price: 110,
    url: basedrive_url + "1GpeAoH3gEKYcgKlk8laAMSG8tYrcmGGf"
  },
  {
    name: "Chia Seed & Blueberry Oats",
    ingredients:
      "Oats, Chia Seeds, Blueberries, Milk, Maple Syrup, VanillaExtract",
    price: 100,
    url: basedrive_url + "1LKfDpl4kSHYLTOoKpw2lH0irOMkEtOeF"
  },
  {
    name: "Peanut Butter & Banana Oats",
    ingredients:
      "Oats, Peanut Butter, Bananas, Milk, Maple Syrup, VanillaExtract",
    price: 110,
    url: basedrive_url + "1wzp79di9f18bl3SJXML1Q3ivyepOhouK"
  }
];
menulist.smoothies = [
  {
    name: "Mango & Banana Smoothie",
    ingredients: "Mango, Banana, Milk, Honey, Vanilla Extract",
    price: 90,
    url: basedrive_url + "12Cw_t_cumZWrjWK-v2pFkBledQrprW_G"
  },
  {
    name: "Blueberry & Oat Smoothie",
    ingredients: "Blueberries, Oats, Milk, Honey, Vanilla Extract",
    price: 95,
    url: basedrive_url + "1NV21CoxQ2qerQkVIZfw5P0HwpvCPL5dX"
  },
  {
    name: "Strawberry & Almond Smoothie",
    ingredients: "Strawberries, Almonds, Milk, Honey, Vanilla Extract",
    price: 90,
    url: basedrive_url + "1x0bAFj2DGKy19oFaTeLZSpz6mFxX2F2p"
  },
  {
    name: "Pineapple & Coconut Smoothie",
    ingredients: "Pineapple, Coconut Milk, Honey, Vanilla Extract",
    price: 95,
    url: basedrive_url + "1k-NQdcOahMgOOQP7-UIP8cO2zhNLisMw"
  }
];
menulist.salads = [
  {
    name: "Avocado & Tomato Salad",
    ingredients:
      "Avocado, Tomatoes, Lettuce, Olive Oil, Balsamic Vinegar, Salt, Pepper",
    price: 120,
    url: basedrive_url + "1twyFoEv9_J5n7HSdYxq0sNsJfu5448Dl"
  },
  {
    name: "Greek Salad",
    ingredients:
      "Cucumbers, Tomatoes, Olives, Feta Cheese, Olive Oil, Red Wine Vinegar, Oregano",
    price: 110,
    url: basedrive_url + "1own87ctP9_rjqYYgIA5hgu6xq836UmHq"
  },
  {
    name: "Kale & Apple Salad",
    ingredients:
      "Kale, Apples, Walnuts, Cranberries, Olive Oil, Lemon Juice, Salt, Pepper",
    price: 120,
    url: basedrive_url + "1HqIQvDlucGjQHWsLndYVNEDbnolt6_tv"
  },
  {
    name: "Spinach & Strawberry Salad",
    ingredients:
      "Spinach, Strawberries, Almonds, Feta Cheese, Olive Oil, Balsamic Vinegar, Salt, Pepper",
    price: 120,
    url: basedrive_url + "1-eAB_7XQmtsNnm-0yfL9gRbW6yt4fHJ7"
  }
];
menulist.snacks = [
  {
    name: "Trail Mix",
    ingredients:
      "Almonds, Walnuts, Cashews, Raisins, Coconut Flakes, Dark Chocolate Chips",
    price: 100,
    url: basedrive_url + "1qPSfh0alNtUHHMyrZlvuhjEH6uHWqtAj"
  },
  {
    name: "Apple Chips",
    ingredients: "Apples, Cinnamon, Coconut Oil",
    price: 130,
    url: basedrive_url + "1ynnYrdDbhpqwJ6nImVDERb7OSe6W835l"
  },
  {
    name: "Hummus and Veggie Sticks",
    ingredients: "Hummus, Carrots, Celery, Cucumbers",
    price: 100,
    url: basedrive_url + "1G29wN8FqToRkIPBC4S6m8NhC6_VWkSXO"
  },
  {
    name: "Yogurt Parfait",
    ingredients: "Greek Yogurt, Berries, Granola, Honey",
    price: 120,
    url: basedrive_url + "1phobUr6e6ysB58YYPPK8ySX3UV-SrRlg"
  }
];

$("#notification-box").css("display","none");

//------------------------------------------------------------------------------------MENU

var item_html =
  "<li><div class='top'><div class='recipe_name title'>{{num}}. {{name}}</div><div class='recipe_price'>$ {{price}}</div></div><div class='mainview'><div class='left'><img src={{url}} alt=''/></div> <div class='right'> <h3>Amount</h3> <div class='amount_btn'><div class='minus btn'>-</div><div class='amount_num'>{{amount}}</div><div class='add btn'>+</div></div> <div class='addcart_btn rect_btn btn'>Add to cart</div></div></div><div class='bottom'><div class='recipe_ingredient'>{{ingredients}}</div></div></li>";

displayMenu("snacks");
displayMenu("salads");
displayMenu("smoothies");
displayMenu("oats");

function displayMenu(menuType) {
  $("#list_item").empty();
  for (var i = 0; i < menulist[menuType].length; i++) {
    var item = menulist[menuType][i];
    var num = 1;
    var current_item_html = item_html
      .replace("{{num}}", i + 1)
      .replace("{{url}}", item.url)
      .replace("{{name}}", item.name)
      .replace("{{price}}", item.price)
      .replace("{{ingredients}}", item.ingredients)
      .replace("{{amount}}", num);
    $("#list_item").append(current_item_html);
  }

  $(".minus").click(function () {
    var num = $(this).siblings(".amount_num");
    var currentNum = parseInt(num.text());
    if (currentNum > 1) {
      num.text(currentNum - 1);
    }
  });

  $(".add").click(function () {
    var num = $(this).siblings(".amount_num");
     var currentNum = parseInt(num.text());
    if(currentNum < 16){
      num.text(currentNum + 1);
    }
  });

  $(".addcart_btn").click(function () {
    check();
    if ($(".amount_num").text() == 0) {
    } else {
      var itemName = $(this)
        .closest("li")
        .find(".recipe_name")
        .text()
        .replace(/^\d+.\s*/, "");
      // console.log(itemName);
      var itemAmount = parseInt(
        $(this).closest("li").find(".amount_num").text()
      );
      var itemPrice = $(this)
        .closest("li")
        .find(".recipe_price")
        .text()
        .replace("$ ", "");
      AddtoCart(itemName, itemAmount, itemPrice);
      $(".amount_num").text("1");
    }
  });
}

$(document).ready(function () {
  $(".selectionview").scrollTop(0);
});

$(".menu_oats").click(function () {
  displayMenu("oats");
});

$(".menu_smoothies").click(function () {
  displayMenu("smoothies");
});

$(".menu_salads").click(function () {
  displayMenu("salads");
});

$(".menu_healthysnacks").click(function () {
  displayMenu("snacks");
});

//------------------------------------------------------------------------------------DATE

var date = new Date();
var year = date.getFullYear();
//+1 since January is 0
var month = (date.getMonth() + 1).toString().padStart(2, "0");
var day = date.getDate().toString().padStart(2, "0");
var formattedDate = year + "/" + month + "/" + day;

var date_html =
  "<div class=bill_title>Bill</div><div class=bill_date>{{date}}</div>";

var current_date_html = date_html.replace("{{date}}", formattedDate);

$("#bill_head").append(current_date_html);

//------------------------------------------------------------------------------------ORDERS
var cartlist = { list: [] };

var orders_html =
  "<ul><li id={{id}}><div class='row1'><div class='order_name'>- {{ordername}}</div><div class='order_price'>$ {{orderprice}}</div></div><div class='row2'><div class='counter'><div class = 'order_minus btn'>-</div><div class='order_amount'>{{orderamount}}</div><div class='order_add btn'>+</div></div><div id={{del_id}} data-del-id={{delid}} class='del_btn btn'>X</div></div></li></ul>";

var total_html =
  "<li><div class='total_text'>Total</div><div class='total_price'>$ {{totalprice}}</div></li>";

function AddtoCart(itemName, itemAmount, itemPrice) {
  var itemExists = false;
  for (var i = 0; i < cartlist.list.length; i++) {
    if (cartlist.list[i].name == itemName) {
      cartlist.list[i].amount =
        parseInt(cartlist.list[i].amount) + parseInt(itemAmount);
      itemExists = true;
      break;
    }
  }
  if (!itemExists) {
    cartlist.list.push({
      name: itemName,
      amount: itemAmount,
      price: itemPrice
    });
  }
  console.log(cartlist);
  showlist();
}

function getIndexByName(name) {
  for (var i = 0; i < cartlist.list.length; i++) {
    if (cartlist.list[i].name == name) {
      return i;
    }
  }
  return -1; // if the item is not found
}

function rmvdisable_btn(btn) {
  $(btn).removeClass("disabled");
}
function disable_btn(btn) {
  $(btn).addClass("disabled");
}

function showlist() {
  $("#bill_orders").empty();
  if (cartlist.list.length > 0) {
    rmvdisable_btn(".clear_btn");
    TotalPrice();
  } else {
    disable_btn(".clear_btn");
    TotalPrice();
  }
  for (var i = 0; i < cartlist.list.length; i++) {
    const item = cartlist.list[i];
    const item_id = "buyitem_" + i;
    const del_item_id = "del_buyitem_" + i;
    const current_orders_html = orders_html
      .replace("{{ordername}}", item.name)
      .replace("{{orderamount}}", item.amount)
      .replace("{{id}}", item_id)
      .replace("{{del_id}}", del_item_id)
      .replace("{{orderprice}}", item.price)
      .replace("{{delid}}", i);

    $("#bill_orders").append(current_orders_html);
    $("#" + del_item_id).click(function () {
      remove_item($(this).attr("data-del-id"));
    });
    var ordernum_amount;
  }

  $(".order_minus").click(function () {
    check();
    var ordernum = $(this).siblings(".order_amount");
    var currentNum = parseInt(ordernum.text());
    var itemName = $(this)
      .closest("li")
      .find(".order_name")
      .text()
      .replace("- ", "");
    itemIndex = getIndexByName(itemName);
    if (ordernum.text() == "1") {
    } else {
      cartlist.list[itemIndex].amount = manage_amount(
        cartlist.list[itemIndex].amount,
        -1
      );
      ordernum.text(cartlist.list[itemIndex].amount);
    }
    TotalPrice();
    console.log(cartlist);
  });

  $(".order_add").click(function () {
    check();
    var ordernum = $(this).siblings(".order_amount");
    var currentNum = parseInt(ordernum.text());
    var itemName = $(this)
      .closest("li")
      .find(".order_name")
      .text()
      .replace("- ", "");
    itemIndex = getIndexByName(itemName);
    cartlist.list[itemIndex].amount = manage_amount(
      cartlist.list[itemIndex].amount,
      +1
    );
    ordernum.text(cartlist.list[itemIndex].amount);
    TotalPrice();
    console.log(cartlist);
  });
}

function check() {
  if ($(".total_price").text() != "0") {
    TotalPrice(0);
  }
}

function manage_amount(num, num_var) {
  num = num + num_var;
  if (num >= 1) {
    return num;
  }
}

$(".clear_btn").click(function () {
  clear();
});

function clear(){
  cartlist.list = [];
  $(" #bill_orders").empty();
  console.log(cartlist);
  disable_btn(".clear_btn");
  TotalPrice();
  disable_btn(".checkout_btn");
}
TotalPrice();

function TotalPrice() {
  $("#bill_total").empty();
  var total_price = 0;
  for (var i = 0; i < cartlist.list.length; i++) {
    var cartlist_price = parseInt(cartlist.list[i].price);
    total_price += cartlist.list[i].amount * cartlist_price;
  }
  var current_total_html = total_html.replace("{{totalprice}}", total_price);
  $("#bill_total").append(current_total_html);
}

function remove_item(id) {
  cartlist.list.splice(id, 1);
  showlist();
}

$(".payment-option").click(function() {
  $(".payment-option").removeClass("selected");
  $(this).addClass("selected");
  rmvdisable_btn(".checkout_btn");
});



$(".checkout_btn").click(function() {
  // var selectedPayment = $(".payment-option.selected").attr("id");
  // console.log("You selected " + selectedPayment);
  $("#notification-box .notification-message").text("Thank you!");
  $("#notification-box").css("display","flex");
  $("#notification-box").addClass("show");
  $(".content").css("pointer-events", "none");
  $(".container").css("filter", "brightness(50%)");
  setTimeout(function() {
    clear();
    $(".payment-option").removeClass("selected");
    $("#notification-box").removeClass("show");
    $(".content").css("pointer-events", "auto");
    $("#notification-box").css("display","none");
    $(".container").css("filter", "brightness(100%)");
  }, 4000);
});