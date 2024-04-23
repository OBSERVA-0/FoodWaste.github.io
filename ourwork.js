
// var donateButton = document.getElementById('donateButton');
//     var donationForm = document.getElementById('donationForm');
//     var close = document.getElementById('close');
//     var form = document.querySelector('form');

//     donateButton.onclick = function() {
//         donationForm.style.display = "block";
//     }

//     close.onclick = function() {
//         donationForm.style.display = "none";
//     }

//     window.onclick = function(event) {
//         if (event.target == donationForm) {
//             donationForm.style.display = "none";
//         }
//     }

//     form.onsubmit = function(e) {
//         e.preventDefault(); // Prevent the form from submitting normally
//         alert('Thank you for your donation!');
//         donationForm.style.display = "none";
//         // Add your own code here to handle the form data
//     }

var donateButton = document.getElementById('donateButton');
    var donationForm = document.getElementById('donationForm');
    var close = document.getElementById('close');
    var form = document.querySelector('form');
    var thankYouModal = document.getElementById('thankYouModal');
    var closeThankYou = document.getElementById('closeThankYou');
    var foodImage = document.getElementById('foodImage');

    donateButton.onclick = function() {
        donationForm.style.display = "block";
    }

    close.onclick = function() {
        donationForm.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == donationForm) {
            donationForm.style.display = "none";
        }
        if (event.target == thankYouModal) {
            thankYouModal.style.display = "none";
        }
    }

    form.onsubmit = function(e) {
        e.preventDefault(); // Prevent the form from submitting normally
        donationForm.style.display = "none";
        thankYouModal.style.display = "block";
        foodImage.src = "./IMAGES/FOOD.jpg" ; // Replace with the path to your image
        // Add your own code here to handle the form data
    setTimeout(function() {
        thankYouModal.style.display = "none";
    }, 10000);
}

    // closeThankYou.onclick = function() {
    //     thankYouModal.style.display = "none";
    // }