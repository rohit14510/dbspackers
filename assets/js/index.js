


const inqureElemt = document.querySelector("#main_form");

inqureElemt.innerHTML = `
<h2>What You want to Move?</h2>
                        <p>Please select a service you are interested in.</p>
                        <div class="quote-form">

                            
<form action="send.php" method="post" name="form">
<div class="select-items">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="item-val">
                                            <input type="radio" name="check_Service" id="check_Service1"
                                                value="Household" onchange="myFunction()">
                                            <label for="check_Service1"> <img src="assets/images/building.png"
                                                    alt=""><span>Household</span></label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="item-val">
                                            <input type="radio" name="check_Service" id="check_Service2" value="Vehicle"
                                                onchange="myFunction()">
                                            <label for="check_Service2"> <img src="assets/images/car.png"
                                                    alt=""><span>Vehicle</span></label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="item-val">
                                            <input type="radio" name="check_Service" id="check_Service3"
                                                value="Some Items" onchange="myFunction()">
                                            <label for="check_Service3"> <img src="assets/images/packaging.png"
                                                    alt=""><span>Some Items</span></label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="item-val">
                                            <input type="radio" name="check_Service" id="check_Service4" value="Others"
                                                onchange="myFunction()">
                                            <label for="check_Service4"> <img src="assets/images/cost.png"
                                                    alt=""><span>Others</span> </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
    <div class="row inquery">
        <div class="f-group">
            <label>Enter Your Name</label>
            <input type="text" required placeholder="Your Full Name" name="name">
        </div>
        <div class="f-group">
            <label>Enter Your Email Id</label>
            <input type="text" required placeholder="Your Email Address"
                name="email">
        </div>
        <div class="f-group">
            <label>Your Mobile Number</label>
            <input type="number" required placeholder="Your Mobile no."
                 name="phone">
        </div>
        <div class="f-group">
            <label>Your Pickup Address</label>
            <input type="text" required placeholder="Pick up Address"
                name="movefrom">
        </div>
        <div class="f-group">
            <label>Where you want to move?</label>
            <input type="text" required placeholder="Move to"
                name="moveto">
        </div>
        <div class="f-group">
            <button class="sec-btn check-price" type="submit" name="submit"><span>Check Price</span></button>
        </div>
    </div>
</form>
</div>
<p class="hero-icon"><img src="assets/images/hero-icon.png" alt="hero icon">1400+ Happy
Customers in Last Month</p>
`;


var inqueryelements2 = document.querySelector(".inquery");
        let serviceElements = document.querySelector(".select-items");

        function myFunction() {
            inqueryelements2.style.display = "block";
            serviceElements.style.display = "none";
        }