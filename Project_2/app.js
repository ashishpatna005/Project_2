function validateForm() {
    var customLeadsPrice = document.getElementById("customLeadsPriceInput").value;

    if (document.getElementById("cardType").value === "customLeads" && parseInt(customLeadsPrice) < 0) {
        alert("Custom Leads Price cannot be negative.");
        return false;
    }
    return true; 
}

function displayFunc(element) {
    console.log("Selected value: " + element.value);

    var cardImage = document.getElementById("cardImage");
    var cardImageContainer = document.getElementById("cardImageContainer");
    var customLeadsPriceContainer = document.getElementById("customLeadsPriceContainer");

    switch (element.value) {
        case "silver":
            cardImage.src = "silver.jpg";
            customLeadsPriceContainer.style.display = "none";
            break;
        case "gold":
            cardImage.src = "gold.jpg";
            customLeadsPriceContainer.style.display = "none";
            break;
        case "diamond":
            cardImage.src = "dimond.jpg";
            customLeadsPriceContainer.style.display = "none";
            break;
        case "customLeads":
            cardImage.src = "";  
            customLeadsPriceContainer.style.display = "block";
            break;
        default:
            cardImage.src = "";  
            customLeadsPriceContainer.style.display = "none";
            break;
    }

    cardImageContainer.style.display = element.value === "customLeads" ? "none" : "block";
    var customLeadsPrice = document.getElementById("customLeadsPrice");
    var selectedCustomLeads = parseInt(document.getElementById("customLeadsPriceInput").value);
    
    if (element.value === "customLeads" && selectedCustomLeads > 1) {
        customLeadsPrice.innerText = "Custom Leads - $" + (selectedCustomLeads * 2);
    } else {
        customLeadsPrice.innerText = "Custom Leads - $" + selectedCustomLeads;
    }
}
