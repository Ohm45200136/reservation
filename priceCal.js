function priceCalculate() {
  let ticknum = parseInt(document.getElementById("ticknum").value.trim());

  let eventPrices = {
    1: 91.25,
    2: 79.88,
    3: 83.12,
    4: 100
  };

  let eventId = document.getElementById("event").value;

  let price = eventPrices[eventId];

  return (price * ticknum).toFixed(2);
}