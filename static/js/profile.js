//!Datami cekib xeta gostermeye calisag 
console.log('Post Js Seyfesinden Geliredsadsadadsadsm')

const updateForm = document.getElementById('update-form')

// const ad = document.getElementById('adpr')
// const soyad = document.getElementById('soyadpr')
const email = document.getElementById('emailpr')
const oxucalis = document.getElementById('oxucalpr')

const csrf = document.getElementsByName('csrfmiddlewaretoken')

const halHazirUrl = window.location.href
const neticeUrl = halHazirUrl.replace('myprofile/','updatepersonelinfo/')
// console.log(neticeUrl)

const bildirimQutu = document.getElementById('bildirim-qutusu')
const sexsidatabildirim = document.getElementById('sexsidatabildirim')

updateForm.addEventListener('submit',e=>{
    e.preventDefault()
    $.ajax({
        type:'POST',
        url : neticeUrl,
        data : {
            'csrfmiddlewaretoken':csrf[0].value,
            // 'ad':ad.value,
            // 'soyad':soyad.value,
            'email':email.value,
            'oxucalis':oxucalis.value
        },
        success : function(response){
            bildirimQutu.classList.remove('d-none')
            bildirimQutu.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong style="font-weight: bold;">Ugurlu Bir Sekilde Melumatlariniz Yenilendi</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `
        },
        error:function(err){
            bildirimQutu.classList.remove('d-none')
            bildirimQutu.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong style="font-weight: bold;">Zehmet Olmasa Melumatlariniz Yoxlayin</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `
        }
    })
})


/////////////////////////////////////////////////
//!Update bio, or etc
const infoForm = document.getElementById('infoForm')
const bioData = document.getElementById('bio')
const birthDayData = document.getElementById('birthday')
const olkeData = document.getElementById('olke')
const nomreDataValue = document.getElementById('nomre')

const a = 'aaa'

console.log('Deyer', nomreDataValue)

//Text Areadaki Boslugu Temizlemek
var output = bioData.value
output = output.replace(/\s/g, "")
document.getElementById('bio').innerHTML = output

const websiteData = document.getElementById('website')


const nowUrl = window.location.href
const updateDataUrl = nowUrl.replace('myprofile/','updateextrainfo/')
console.log(updateDataUrl)

infoForm.addEventListener('submit',e=>{
    e.preventDefault()
    $.ajax({
        type: "POST",
        url:updateDataUrl,
        data : {
            'csrfmiddlewaretoken':csrf[0].value,
            'bioData':bioData.value,
            'birthDayData':birthDayData.value,
            'olkeData':olkeData.value,
            'nomreData':nomreDataValue.value,
            'websiteData':websiteData.value
        },
        success : function(response){
            console.log(typeof response.birthDayData)
            if(typeof(response.birthDayData) == typeof(a)){
                sexsidatabildirim.classList.remove('d-none')
                sexsidatabildirim.innerHTML = `
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong style="font-weight: bold;">Yas Deyeri Reqem Tipinde Olmalidir</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `
                nomreDataValue.value = ''
                
            }
            else{
                sexsidatabildirim.classList.remove('d-none')
                sexsidatabildirim.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong style="font-weight: bold;">Ugurlu Bir Sekilde Melumatlariniz Yenilendi</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                `
            }
        },
        error : function(err){
            sexsidatabildirim.classList.remove('d-none')
            sexsidatabildirim.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong style="font-weight: bold;">Zehmet Olmasa Melumatlariniz Yoxlayin</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `
        },
    })
})


//!Update with js social media profile link
const socialForm = document.getElementById('socialForm')

const twitterData = document.getElementById('twitterData')
const facebookData = document.getElementById('facebookData')
const linkedinData = document.getElementById('linkedinData')
const instaqramData = document.getElementById('instaqramData')

const urlSocialNow = window.location.href
const urlSocialNowUrl = urlSocialNow.replace('myprofile/','updatesocialnetwork/')

const socialAlert = document.getElementById('social-alert')


socialForm.addEventListener('submit',e=>{
    e.preventDefault()
    $.ajax({
        type:'POST',
        url:urlSocialNowUrl,
        data:{
            'csrfmiddlewaretoken':csrf[0].value,
            'twitterData':twitterData.value,
            'facebookData':facebookData.value,
            'linkedinData':linkedinData.value,
            'instaqramData':instaqramData.value
        },
        success:function(response){
            socialAlert.classList.remove('d-none')
            socialAlert.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong style="font-weight: bold;">Ugurlu Bir Sekilde Melumatlariniz Yenilendi</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `
        },
        error:function(err){
            socialAlert.classList.remove('d-none')
            socialAlert.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong style="font-weight: bold;">Zehmet Olmasa Melumatlariniz Yoxlayin</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            `
        }
    })
})







