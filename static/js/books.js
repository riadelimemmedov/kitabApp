const nameData = document.getElementById('ad')
const emailData = document.getElementById('emailAdress')
const telefonNomreData = document.getElementById('telefonNomre')
const mesajData = document.getElementById('mesajAdress')


const csrf = document.getElementsByName('csrfmiddlewaretoken')


const form = document.getElementById('formAlani')

const url = window.location.href
const resultUrl = url.replace('contact/', '')
const alertBox = document.getElementById('alertBox')

console.log(resultUrl);

const handleAlerts = function (type, text) {
    alertBox.innerHTML += `
    <div class="alert alert-${type} d-flex align-items-center" role="alert" >
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/>
            
            </svg>
            
            <div class="ml-2">      
                <strong>${text}</strong>
            </div>    
    </div>
    `
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    $.ajax({
        type: 'POST',
        url: `${resultUrl}ajaxcontact/`,
        data: {
            'csrf': csrf[0].value,
            'name': nameData.value,
            'email': emailData.value,
            'number': telefonNomre.value,
            'message': mesajData.value,
        },
        success: function (response) {
            if (nameData.value == '' || emailData.value == '' | telefonNomreData.value == '' | mesajData.value == '') {
                handleAlerts('info', 'Zehmet olmasa asagidaki form melumatlarini doldurun')
                setTimeout(function () {
                    $('#alertBox').hide('slow')
                }, 3000)

                setTimeout(function () {
                    window.location.reload()
                }, 5000)

            } else {
                handleAlerts('success', 'Sorgunuz ugurlu bir sekilde gonderildi')
                setTimeout(function () {
                    $('#alertBox').hide('slow')
                }, 3000)

                setTimeout(function () {
                    window.location.reload()
                }, 5000)
            }

            },
            error: function (err) {
                console.log(err)
                handleAlerts('danger', 'Gonderilme zamani xeta bas verdi,zehmet olmasa yeniden yoxlayin')
                setTimeout(function () {
                    $('#alertBox').hide('slow')
                }, 2000)

                setTimeout(function () {
                    window.location.reload()
                }, 5000)
        }
    })
})