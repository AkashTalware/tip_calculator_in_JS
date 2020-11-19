function calculate_tip() {
    document.forms["tip"]["count"].defaultValue= 1;
    var bill = document.forms["tip"]["bill"].value;
    var count = parseInt(document.forms["tip"]["count"].value);
    var experience = parseFloat(document.forms["tip"]["experience"].value);

    if (bill == "") {
        alert("Please Enter the Bill Amount");
        return false;
    }

    bill= parseInt(bill);
    console.log(bill)
    console.log(count)
    console.log(experience)

    var tip = bill * experience
    var tip_per_head = tip / count;
    var total_amount = bill + tip;
    var total_each = total_amount / count;

    console.log("Tip per head is: Rs." + tip_per_head)
    console.log("Total tip is: Rs." + tip)
    console.log("Total Amount to be paid: Rs." + total_amount)
    console.log("Total Amount to be paid by Each: Rs." + total_each)

    document.getElementById("r1").innerHTML = "<td >Total tip is: </td>" + "<td> Rs. " +tip + "</td >";
    //document.getElementById("r2").innerHTML = "<td >Tip per head is: </td>" + "<td> Rs. " + tip_per_head + "</td >";
    document.getElementById("r3").innerHTML = "<td >Total Amount to be paid: </td>" + "<td> Rs. " + total_amount + "</td >";

    if (count>1) {
        document.getElementById("r4").innerHTML = "<td >Total Amount to be paid by Each:  </td> "  +"<td> Rs. " +  total_each + "</td >";
    }
    else{
        
    }
}