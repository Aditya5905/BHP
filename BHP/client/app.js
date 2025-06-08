function getSelectedValue(name) {
  const options = document.getElementsByName(name);
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      return parseInt(options[i].value);
    }
  }
  return -1;
}

function onClickedEstimatePrice() {
  const sqft = parseFloat(document.getElementById("uiSqft").value);
  const bhk = getSelectedValue("uiBHK");
  const bath = getSelectedValue("uiBathrooms");
  const location = document.getElementById("uiLocations").value;
  const estPrice = document.getElementById("uiEstimatedPrice");

  const url = "http://127.0.0.1:5000/predict_home_price";

  $.post(url, {
    total_sqft: sqft,
    bhk: bhk,
    bath: bath,
    location: location
  }, function (data, status) {
    estPrice.innerHTML = `<h2>Estimated Price: ₹ ${data.estimated_price} Lakh</h2>`;
  });
}

function onPageLoad() {
  const url = "http://127.0.0.1:5000/get_location_names";
  $.get(url, function (data, status) {
    if (data && data.locations) {
      const uiLocations = document.getElementById("uiLocations");
      $('#uiLocations').empty();
      uiLocations.innerHTML = '<option disabled selected>Choose a Location</option>';
      data.locations.forEach(loc => {
        const opt = document.createElement('option');
        opt.text = loc;
        uiLocations.add(opt);
      });
    }
  });
}

window.onload = onPageLoad;
