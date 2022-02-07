var divtest = document.createElement("div");

divtest.id = "main_body_pop_up";

divtest.innerHTML = `
<style>
#main_body_pop_up input:focus,
#main_body_pop_up textarea:focus {
  outline: none;
}

#main_body_pop_up {
  position: absolute;
  display: none;
  /* Location of the box */
  right: 0;
  top: 0;
  width: 50%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  z-index: 1;
  background: white;
}

.control-row-ram {
  margin-bottom: 20px;
}

.span-sham {
  position: relative;
}

.contol-input-seeta {
  padding: 8px 0;
  width: 100%;
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  background-color: transparent;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
}

.submit_btn_hanu {
  margin-top: 28px;
  padding: 14px 27px 12px;
  line-height: 14px;
  font-size: 1rem;
  text-transform: uppercase;
  color: #000;
  border-color: #000;
  cursor: pointer;

  border-radius: 20px;
  text-decoration: none;
  background: none;
}

.submit_btn_hanu:hover {
  background-color: #000;
  color: #fff;
  border-color: #000;
  outline: none;
}

.span-sham-textarea {
  height: 38px;
}

.close_popup_jandu {
  float: right;
}

.modal-content_mera {
  padding: 50px;
}
#mera_model
{
    position: fixed;
    bottom: 5px;
    right: 5px;
    padding: 5px;
    cursor: pointer;
    word-spacing: inherit;
}

</style>
<div class="modal-content_mera">
  <div class="control-row-ram">
    <span class="close_popup_jandu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#000000"></path></svg
    ></span>
  </div>
  <div class="control-row-ram"><h2>Get in touch</h2></div>
  <div class="control-row-ram"><span class="span-sham" /> <input type="text" name="name" value="" size="40" class="contol-input-seeta" aria-required="true" aria-invalid="false" placeholder="Name" /></div>
		    <div class="control-row-ram"><span class="span-sham" /> <input type="text" name="Home-phone-number" value="" size="40" class="contol-input-seeta" aria-required="true" aria-invalid="false" placeholder="Home phone number" /></div>
		   <div class="control-row-ram"><span class="span-sham" /> <input type="text" name="Cell phone number" value="" size="40" class="contol-input-seeta" aria-required="true" aria-invalid="false" placeholder="Cell phone number" /></div>
		   <div class="control-row-ram"><span class="span-sham" /> <input type="text" name="Street" value="" size="40" class="contol-input-seeta" aria-required="true" aria-invalid="false" placeholder="Street" /></div>
		   <div class="control-row-ram"><span class="span-sham" /> <input type="text" name="Apt/Unit" value="" size="40" class="contol-input-seeta" aria-required="true" aria-invalid="false" placeholder="Apt/Unit" /></div>
		   <div class="control-row-ram"><span class="span-sham" /> <input type="text" name="City" value="" size="40" class="contol-input-seeta" aria-required="true" aria-invalid="false" placeholder="City" /></div>
		   <div class="control-row-ram"><span class="span-sham" /> <input type="text" name="State" value="" size="40" class="contol-input-seeta" aria-required="true" aria-invalid="false" placeholder="State" /></div>
		   <div class="control-row-ram"><span class="span-sham" /> <input type="text" name="Zip code" value="" size="40" class="contol-input-seeta" aria-required="true" aria-invalid="false" placeholder="Zip code" /></div>

  <input type="submit" value="Get in touch" class="submit_btn_hanu" aria-invalid="false" />
</div>`;

var buttontest = document.createElement("button");

buttontest.id = "mera_model";
buttontest.textContent = "Request FREE Quote";
document.body.appendChild(divtest);
document.body.appendChild(buttontest);

// Get the modal
var mera_model_show = document.getElementById("main_body_pop_up");
var mera_btn = document.getElementById("mera_model");

mera_btn.onclick = function () {
  mera_model_show.style.display = "block";
};

var close_pop_up_jacky = document.getElementsByClassName("close_popup_jandu")[0];
close_pop_up_jacky.onclick = function () {
  mera_model_show.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == mera_model_show) {
    mera_model_show.style.display = "none";
  }
};
