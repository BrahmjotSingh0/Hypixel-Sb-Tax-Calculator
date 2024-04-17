document.getElementById("taxForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var itemType = document.getElementById("itemType").value;
    var itemPrice = parseFloat(document.getElementById("itemPrice").value);
    var auctionDuration = parseInt(document.getElementById("auctionDuration").value);

    var fee = 0;
    var tax = 0;
    if (itemType === "auction") {
        fee = itemPrice * 0.05;
        // Additional fees based on auction duration
        if (auctionDuration >= 7) {
            fee += 5;
        } else if (auctionDuration >= 3) {
            fee += 3;
        } else {
            fee += 1;
        }
        // Tax for auctions above 1 million
        if (itemPrice > 1) {
            tax = itemPrice * 0.01;
        }
    } else if (itemType === "bin") {
        if (itemPrice >= 100) {
            fee = itemPrice * 0.025;
        } else if (itemPrice >= 10 && itemPrice < 100) {
            fee = itemPrice * 0.02;
        } else {
            fee = itemPrice * 0.01;
        }
        // Tax for BINs above 1 million
        if (itemPrice > 1) {
            tax = itemPrice * 0.01;
        }
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Fee for " + itemType.toUpperCase() + " starting at " + itemPrice.toFixed(2) + " million coins and lasting for " + auctionDuration + " days: " + fee.toFixed(2) + " million coins" + "<br>" + "Tax for " + itemType.toUpperCase() + ": " + tax.toFixed(2) + " million coins";
});
