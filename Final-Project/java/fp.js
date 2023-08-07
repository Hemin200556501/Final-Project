let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
// Contact page
function validate(e) {
    var fields = document.querySelectorAll('.form-container textarea, .form-container input[type="text"]');
    var check = true;
    var errArr = [];
  
    function showError(field, message) {
        field.nextElementSibling.innerHTML = message;
        field.style.boxShadow = "0 0 2px 1px #cc0001";
        check = false;
        errArr.push(field);
    }
  
    function clearError(field) {
        field.nextElementSibling.innerHTML = "";
        field.style.boxShadow = "none";
    }

    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        var value = field.value.trim();

        if (value === "") {
            showError(field, "Hmmm! " + field.placeholder + " is required?");
        } else {
            if (field.id !== 'email' && field.id !== 'phone') {
                var isValid = isValidChar(value);
                if (!isValid) {
                    showError(field, "Are you trying to HACK ME!");
                } else {
                    clearError(field);
                }
            }

            if (field.id === 'phone') {
                var isValidPhoneNumber = isValidPhone(value);
                if (!isValidPhoneNumber) {
                    showError(field, "Hmmm! Your phone number is not valid?");
                } else {
                    clearError(field);
                }
            }

            if (field.id === 'email') {
                var isValidEmailValue = isValidEmail(value);
                if (!isValidEmailValue) {
                    showError(field, "Hmmm! Your email address is not valid?");
                } else {
                    clearError(field);
                }
            }
        }
    }

    if (!check) {
        var firstErr = errArr[0];
        var scrollTo = firstErr.offsetTop - 25;
        window.scrollTo(0, Math.abs(scrollTo));
    }

    return check;
}

function isValidEmail(email) {
    var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(email);
}

function isValidChar(value) {
    var regEx = /^[a-zA-Z@#$%!?^&*()_+\-=\[\]{};':"\\|,.\/? ]*$/;
    return regEx.test(value);
}

function isValidPhone(value) {
    var regEx = /^[+]?[(]?[+]?\d{2,4}[)]?[-\s]?\d{2,8}[-\s]?\d{2,8}$/;
    return regEx.test(value);
}
// product page
// Function to show an alert when "Buy Now" or "Add to Cart" is clicked
function showAlert(productName, action) {
    alert(`You have added "${productName}" to ${action} .`);
}

// Add event listeners to "Buy Now" and "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll('.buy');
    const cartButtons = document.querySelectorAll('.cart');

    buyButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault(); 
            const productName = this.closest('.preview').querySelector('h3').textContent;
            showAlert(productName, "Buy Now");
            window.location.href="./product.html";
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const productName = this.closest('.preview').querySelector('h3').textContent;
            showAlert(productName, "Your Cart");
            window.location.href="./product.html";
        });
    });
});
