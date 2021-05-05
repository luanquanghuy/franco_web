let list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

$(document).ready(function () {
    let currentFucusSearch = 0;
    $("#btn-search").click(function (a) {
        a.preventDefault();
        if ($('#search-box').is(":hidden")) {
            $('#search-box').show();
            $("#btn-search").hide();
            console.log("btn-search clicked");
            $('#search-box').focus();
        }
    })

    $("body").click(function (e) {
        console.log(e.target.id);
        if (e.target.id !== "search-container" && e.target.id !== "btn-search" && e.target.id !== "search-box") {
            closeAllItems();
            $('#btn-search').show();
            $("#search-box").hide();
            console.log("btn clicked");
        }
    })

    //     .cart-wrapper:hover .cart-dropdown {
    //     display: block;
    // }
    $(".cart-wrapper").click(function (e) {
        if ($("#cart-dropdown").is(":hidden")) {
            $("#cart-dropdown").show();
        }
    })
    showSlide(slide_index);

    $(window).resize(function () {
        let width = $(window).width();
        // console.log(width);
        if(width >= 1140){
            slide_count_max = 3;
            showSlide(slide_index);
        }else if(width >= 755){
            slide_count_max = 2;
        }else {
            slide_count_max = 1;
        }
        showSlide(slide_index);
    })
})
var slide_index = 1;
var slide_count_max = 3;

function showSlide(index) {
    slide_index = index;
    var slides = document.getElementsByClassName("post-container");
    for (let i = 1; i <= slides.length; i++) {
        if (i >= index && i <= index + slide_count_max - 1) {
            slides[i - 1].style.display = "block";
        } else {
            slides[i - 1].style.display = "none";
        }
    }
    var dotSlide = document.getElementById("dot-slides");
    dotSlide.innerHTML = "";
    for (let i = 0; i < slides.length - slide_count_max + 1; i++) {
        var elDot = document.createElement("i");
        elDot.className = "fas fa-circle dot";
        elDot.setAttribute("onclick", `showSlide(${i + 1})`);
        dotSlide.appendChild(elDot);
    }
    var dots = document.getElementsByClassName("dot");
    for (let i = 1; i <= dots.length; i++) {
        dots[i - 1].className = dots[i - 1].className.replace(" dot-active", "");
        // $(".dot-active").removeClass("dot-active");
    }
    dots[index - 1].className += " dot-active";
}

function closeAllItems() {
    $("#search-items").remove();
}

function typing(e) {
    closeAllItems();
    console.log("typing")
    let input = e.value;
    console.log(input)
    let a = document.createElement("div");
    a.setAttribute("id", "search-items");
    e.parentNode.appendChild(a);
    let list_search = list.filter(item => item.toLowerCase().includes(input.toLowerCase()));
    if (list_search.length > 0) {
        for (let i = 0; i < list_search.slice(0, 5).length; i++) {
            let b = document.createElement("div");
            b.innerHTML = `<strong>${list_search[i]}</strong>`;
            a.appendChild(b);
        }
    } else {
        let b = document.createElement("div");
        b.innerHTML = `<strong>Không tìm thấy</strong>`;
        a.appendChild(b);
    }
}


