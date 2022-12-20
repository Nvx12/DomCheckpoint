var likebtn = document.querySelectorAll(".fa-solid");

for (let index = 0; index < likebtn.length; index++) {
  likebtn[index].addEventListener("click", function () {
    if (likebtn[index].style.color == "red") {
      likebtn[index].style.color = "black";
    } else {
      likebtn[index].style.color = "red";
    }
  });
}

var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");
var count = document.getElementById("count");
var secondItemPrice = document.getElementById("amount0");
var total = document.getElementById("total");
increment.addEventListener("click", function () {
  let counter = count.innerText++;
  let sum = parseFloat(secondItemPrice.innerText) * (counter + 1);
  secondItemPrice.innerHTML = `<div class="amount" id="amount0">${sum.toFixed(
    2
  )}</div>`;
  let totalPrices =
    parseFloat(secondItemPrice.innerText) +
    parseFloat(firstItemPrice.innerText);
  total.innerHTML = `<div class="total-amount" id="total">${totalPrices.toFixed(
    2
  )}</div>`;
});

decrement.addEventListener("click", function () {
  let counter = count.innerText--;
  if (counter > 1) {
    let sum = parseFloat(secondItemPrice.innerText) / counter;
    secondItemPrice.innerHTML = `<div class="amount" id="amount0">${sum.toFixed(
      2
    )}</div>`;
    let totalPrices =
      parseFloat(secondItemPrice.innerText) +
      parseFloat(firstItemPrice.innerText);
    total.innerHTML = `<div class="total-amount" id="total">${totalPrices.toFixed(
      2
    )}</div>`;
  } else {
    count.innerText = 1;
  }
});

var increment1 = document.getElementById("increment1");
var decrement1 = document.getElementById("decrement1");
var count1 = document.getElementById("count1");
var firstItemPrice = document.getElementById("amount1");

increment1.addEventListener("click", function () {
  let counter = count1.innerText++;
  console.log(counter)
  let sum = parseFloat(firstItemPrice.innerText) * (counter + 1);
  firstItemPrice.innerHTML = `<div class="amount" id="amount1">${sum.toFixed(
    2
  )}</div>`;
  let totalPrices =
    parseFloat(secondItemPrice.innerText) +
    parseFloat(firstItemPrice.innerText);
  total.innerHTML = `<div class="total-amount" id="total">${totalPrices.toFixed(
    2
  )}</div>`;
});
decrement1.addEventListener("click", function () {
  let counter = count1.innerText--;
  if (counter > 1) {
    let sum = parseFloat(firstItemPrice.innerText) / counter;
    firstItemPrice.innerHTML = `<div class="amount" id="amount1">${sum.toFixed(
      2
    )}</div>`;
    let totalPrices =
      parseFloat(secondItemPrice.innerText) +
      parseFloat(firstItemPrice.innerText);
    total.innerHTML = `<div class="total-amount" id="total">${totalPrices.toFixed(
      2
    )}</div>`;
  } else {
    count1.innerText = 1;
  }
});

var removeFirstItem = document.getElementById("rem1");
removeFirstItem.addEventListener("click", function () {
  document.getElementById("firstItem").remove();
  total.innerHTML = `<div class="total-amount" id="total">=${firstItemPrice.innerText}$</div>`;
});
var removeSecondItem = document.getElementById("rem2");
removeSecondItem.addEventListener("click", function () {
  document.getElementById("secondItem").remove();
  total.innerHTML = `<div class="total-amount" id="total">=${secondItemPrice.innerText}$</div>`;
});
var deleteAll = document.getElementById("removeAll");
deleteAll.addEventListener("click", function () {
  document.getElementById("firstItem").remove();
  document.getElementById("secondItem").remove();
  total.innerHTML = `<div class="total-amount" id="total">0$</div>`;
});
