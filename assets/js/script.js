$(document).ready(function () {

  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.tes-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.tes-slider2').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.ser-nav',
    adaptiveHeight: true
  });

  $('.ser-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.brand-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $(".f-list1").click(function(){
  $(".f-item1").slideToggle("slow");
});
$(".f-list2").click(function(){
  $(".f-item2").slideToggle("slow");
});
$(".f-list3").click(function(){
  $(".f-item3").slideToggle("slow");
});



});


// function withinCity() {
//   $(".within-from").css("display", "block");
//   $(".between-from,.w-form").css("display", "none");
//   $(".q_list2,.q_list3").removeClass("active");
//   $(".q_list1").addClass("active");
// }
// function betweenCity() {
//   $(".between-from").css("display", "block");
//   $(".within-from,.w-form").css("display", "none");
//   $(".q_list2").addClass("active");
//   $(".q_list3,.q_list1").removeClass("active");
// }
// function internationally() {
//   $(".w-form").css("display", "block");
//   $(".between-from,.within-from").css("display", "none");
//   $(".q_list2,.q_list1").removeClass("active");
//   $(".q_list3").addClass("active");
// }

// function warehouse() {
//   $(".q_list2,.q_list1").removeClass("active");
//   $(".q_list3").addClass("active");
// }
// function house_size() {
//   $(".item-group").addClass("active");
// }


function show_service() {
  $(".ser-type ul").css("display", "block");
}
function city() {
  $(".item-group1").css("display", "flex");
  $(".ser-type ul").css({ "height": "0px", "padding": "0px", "transform": "scale(0)" })
  $(".show-value").html("Household");
}
function city2() {
  $(".item-group2").css("display", "flex");
  $(".ser-type ul").css({ "height": "0px", "padding": "0px", "transform": "scale(0)" })
  $(".show-value").html("Office");
}
function city3() {
  $(".item-group3").css("display", "flex");
  $(".ser-type ul").css({ "height": "0px", "padding": "0px", "transform": "scale(0)" })
  $(".show-value").html("Vehicle");
}
function city4() {
  $(".ser-type ul").css({ "height": "0px", "padding": "0px", "transform": "scale(0)" })
  $(".show-value").html("Storage");
}
function city5() {
  $(".item-group5").css("display", "flex");
  $(".ser-type ul").css({ "height": "0px", "padding": "0px", "transform": "scale(0)" })
  $(".show-value").html("Pet");
}
function backClick2() {
  var arrow = document.querySelector(".back-arrow");
  arrow.setAttribute("href", "index.html")
}
// function backClick2() {
//   var arrow = document.querySelector(".back-arrow");
//   $(".contact-details").css("display", "none")
//   $(".otp-box").css("display", "block")
// }
function showNext() {
  $(".contact-details").css("display", "block")
  $(".otp-box").css("display", "none")
}
function getOtp() {
  $(".contact-details").css("display", "none");
  $(".move-details").css("display", "block");
}

$(".get-num").html = $("#mobile").value;


// ===Item-Section----


document.querySelectorAll("myText").value = "Johnny Bravo";

$(".list-tab").click(function () {
  $(".list-tab,.all-items").addClass("active");
  $(".list-tab2,.list-tab2,.list-tab3,.list-tab1,.list-tab4,.add-items2,.add-items3,.add-items4,.add-items1").removeClass("active");
});
$(".list-tab1").click(function () {
  $(".list-tab1,.add-items1").addClass("active");
  $(".list-tab2,.all-items,.list-tab,.list-tab3,.list-tab4,.add-items2,.add-items3,.add-items4").removeClass("active");
});
$(".list-tab2").click(function () {
  $(".list-tab2,.add-items2").addClass("active");
  $(".list-tab1,.list-tab3,.list-tab,.all-items,.list-tab4,.add-items1,.add-items3,.add-items4").removeClass("active");
});
$(".list-tab3").click(function () {
  $(".list-tab3,.add-items3").addClass("active");
  $(".list-tab2,.list-tab1,.list-tab,.all-items,.list-tab4,.add-items2,.add-items1,.add-items4").removeClass("active");
});
$(".list-tab4").click(function () {
  $(".list-tab4,.add-items4").addClass("active");
  $(".list-tab2,.list-tab3,.list-tab,.all-items,.list-tab1,.add-items2,.add-items3,.add-items1").removeClass("active");
});

// function inputChange() {
//   var preview = document.querySelectorAll(".check-price");
//   for (var i = 0; i < preview.length; i++) {
//     preview[i].setAttribute("href", "popup.html");
//   }
// }

// let twoStepElemt = document.querySelector(".within-from")

// function nextStep() {
//   var inputElement = document.querySelector(".input_value");
//   if (inputElement.length > 0) {
//     alert("please fill the deta")
//   } else {
//     twoStepElemt.style.display = "block"
//   }
// }
// function closePop() {
//   $(".popup-section").css("display", "none");
// }
// function openPop() {
//   $(".popup-section").css("display", "flex");
// }

// var formdata = document.getElementById("main_form");

// formdata.innerHTML = `
// <h2>What You want to Move?</h2>
//                         <p>Please select a service you are interested in.</p>
//                         <div class="row">
//                             <div class="quote-form">
//                                 <ul>
//                                     <li class="q_list1 active" onclick="withinCity()">01</li>
//                                     <li class="q_list2" onclick="betweenCity()">02</li>
//                                     <li class="q_list3" onclick="internationally()">03</li>
//                                 </ul>
//                                 <div class="within-from" id="withinCity"></div>
//                                 <div class="between-from" id="betweenCity">
//                                 </div>
//                                 <div class="w-form" id="internationally"></div>
//                             </div>
//                             <p class="hero-icon"><img src="assets/images/hero-icon.png" alt="hero icon">1400+ Happy
//                                 Customers in Last Month</p>
//                         </div>`;

// var formElemtnt = document.getElementById("withinCity");

// formElemtnt.innerHTML = `
// <form>
//     <div class="row">
//         <div class="f-group">
//             <label>Your Pickup Address</label>
//             <input type="text" required placeholder="Relocation to From" class="input_value"
//                 onchange="inputChange()">
//         </div>
//         <div class="f-group">
//             <label>Where you want to move?</label>
//             <input type="text" required placeholder="Relocation to"
//                 onchange="inputChange()" class="input_value">
//         </div>
//         <div class="f-group">
//             <label>Select Shifting Date</label>
//             <input type="date" required onchange="inputChange()" class="input_value">
//         </div>
//         <div class="f-group">
//             <a class="sec-btn check-price" onclick="nextStep()"><span>Check
//                     Price</span></a>
//         </div>
//     </div>
// </form>
// `;

// let betweenContent = document.getElementById("betweenCity");

// betweenContent.innerHTML = `
// <form>
//     <div class="row">
//         <div class="f-group">
//         <label for="">Enter your name</label>
//             <input type="text" placeholder="Your Name" required>
//         </div>
//         <div class="f-group">
//         <label for="">Enter your mobile number</label>
//             <input type="text" placeholder="Mobile Number" id="mobile" required>
//         </div>
//         <div class="f-group">
//         <label for="">Enter your Email id</label>
//         <input type="email" placeholder="Email Address" required>
//         </div>
//         <div class="f-group">
//             <a class="sec-btn check-price"><span>Check
//                     Price</span></a>
//         </div>
//     </div>
// </form>
// `;

// let interConent = document.getElementById("internationally");

// interConent.innerHTML = `
// <form>
// <div class="row justify-content-center">
// <div class="col-6">
//     <div class="check-group">
//         <input type="radio" required onchange="inputChange()" name="01bhk">
//         <label for="01bhk">01 BHK</label>
//     </div>
// </div>
// <div class="col-6">
//     <div class="check-group">
//         <input type="radio" required onchange="inputChange()" name="01bhk">
//         <label for="01bhk">02 BHK</label>
//     </div>
// </div>
// <div class="col-6">
//     <div class="check-group">
//         <input type="radio" required onchange="inputChange()" name="01bhk">
//         <label for="01bhk">03 BHK</label>
//     </div>
// </div>
// <div class="col-6">
//     <div class="check-group">
//         <input type="radio" required onchange="inputChange()" name="01bhk">
//         <label for="01bhk">Villas</label>
//     </div>
// </div>
// <div class="col-6">
//     <div class="check-group">
//         <input type="radio" required onchange="inputChange()" name="01bhk">
//         <label for="01bhk">Bike</label>
//     </div>
// </div>
// <div class="col-6">
//     <div class="check-group">
//         <input type="radio" required onchange="inputChange()" name="01bhk">
//         <label for="01bhk">Car</label>
//     </div>
// </div>
// <div class="col-6">
//     <div class="check-group">
//         <input type="radio" required onchange="inputChange()" name="01bhk">
//         <label for="01bhk">Office</label>
//     </div>
// </div>
// <div class="col-6">
//     <div class="check-group">
//         <input type="radio" required onchange="inputChange()" name="01bhk">
//         <label for="01bhk">Other Items</label>
//     </div>
// </div>
// <div class="f-group mt-4">
//             <a class="sec-btn check-price"><span>Check
//                     Price</span></a>
//         </div>
// </div>
// </form>
// `;

var footerElements = document.querySelector(".footer-section");
footerElements.innerHTML = `<div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="f-box">
                        <div class="logo">
                            <img src="assets/images/logo.png" alt="">
                        </div>
                        <p>Ready to make your move with DBS Packers and Movers? Contact us today for a personalized
                            quote and experience a stress-free relocation journey.</p>
                        <ul class="social-link">
                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4">
                    <div class="f-box">
                        <h4>Company<i class="fa-solid fa-plus f-list1"></i></h4>
                        <ul class="f-item1">
                            <li><a href="about.html"><span>About Us</span></a></li>
                            <li><a href="contact.html"><span>Contact Us</span></a></li>
                            <li><a href="gallery.html"><span>Photo Gallery</span></a></li>
                            <li><a href="policy.html"><span>Privacy Policy</span></a></li>
                            <li><a href="terms.html"><span>Terms & Conditions</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <div class="f-box">
                        <h4>Our Services<i class="fa-solid fa-plus f-list2"></i></h4>
                        <ul class="f-item2">
                            <li><a href="residential-shifting.html"><span>Residential Shifting</span></a></li>
                            <li><a href="commercial-shifting.html"><span>Commercial Shifting</span></a></li>
                            <li><a href="warehouse-storage.html"><span>Warehouse Storage</span></a></li>
                            <li><a href="vehicle-shifting.html"><span>Vehicle Shifting</span></a></li>
                            <li><a href="services.html"><span>All Services</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="f-box">
                        <h4>Contact Info<i class="fa-solid fa-plus f-list3"></i></h4>
                        <ul class="f-item3">
                            <li><i class="fa-solid fa-location-dot"></i><span>Plot No.238, Block H, Ashok Vihar Phase
                                    III Extension, Gurugram, Haryana 122001</span></li>
                            <li class="f-hide"><i class="fa-solid fa-phone"></i><a href="tel:+91 9599458005">+91
                                    9599458005</a></li>
                            <li><i class="fa-solid fa-envelope"></i><a
                                    href="mailto:info@dbspackers.com">info@dbspackers.com</a></li>
                            <li class="f-hide"><i class="fa-solid fa-envelope"></i><a
                                    href="mailto:dbspackers@gmail.com">dbspackers@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="foot">
                <div class="row">
                    <div class="col-7">
                        <div class="foot-box">
                            <i class="fa-solid fa-envelope"></i>
                            <b>Mail Us</b>
                            <a href="mailto:dbspackers@gmail.com">dbspackers@gmail.com</a>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="foot-box">
                            <i class="fa-solid fa-phone"></i>
                            <b>Call Us</b>
                            <a href="tel:+91 9599458005">+91 9599458005</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-right">
            <p>© Copyright <span class="crDate"></span> | Powered by DBS Packers and Movers || Designed By <a
                    href="https://standupstartups.com/">Standup Startups</a></p>
        </div>
        <div class="foot-list">
        <ul>
            <li><a href="tel:9599458005"><i class="fa-solid fa-phone"></i><span>Call Now</span></a></li>
            <li><a href=" https://wa.me/919599458005" target="_blank"><i class="fa-brands fa-whatsapp"></i><span>Whatsapp</span></a></li>
            <li><a href="mailto:dbspackers@gmail.com"><i class="fa-solid fa-envelope"></i><span>E-mail</span></a></li>
        </ul>
    </div>
    
    
    
        `;
        
        
        
                document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
               
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            
        });