
$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=3ea2407fd49341df86584ab9af924812",
 function(data) {
    $('#welcome').append(`<span>${data.city}, ${data.region}</span>`)
})

redirect = (url) => {
    window.location.href = url
}