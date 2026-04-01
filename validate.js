function checkNID() {
	let nid = document.getElementById("nid").value.trim();
	let pattern = /^\d{13}$/; // ตัวเลข 13 หลัก
  
	return pattern.test(nid);
  }

  function checkTicketNo() {
	let num = document.getElementById("ticknum").value.trim();
  
	if (isNaN(num)) return false;
  
	num = parseInt(num);
	return num >= 1 && num <= 5;
  }

  function checkRequired() {
	let nid = document.getElementById("nid").value.trim();
	let fname = document.getElementById("fname").value.trim();
	let lname = document.getElementById("lname").value.trim();
	let tick = document.getElementById("ticknum").value.trim();
  
	return nid && fname && lname && tick;
  }

function validateForm(){

  if(!checkRequired()){
    alert("Please fill all required fields!");
    return false;
  }

  if(!checkNID()){
    alert("National ID must be 13 digits!");
    document.getElementById("nid").focus();
    return false;
  }

  if(!checkTicketNo()){
    alert("Number of tickets must be between 1 and 5!");
    document.getElementById("ticknum").focus();
    return false;
  }

  let total = priceCalculate();
  alert("Total price for this booking is " + total + " USD");

  return false; // กัน form submit
}