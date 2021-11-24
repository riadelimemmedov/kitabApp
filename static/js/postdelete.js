// //!Js + Ajax ile create POST

// console.log('Hello Post Page')

// //!Indi ise Html den taglari cekek => INNERHTML elave olunacaglar
const alertBox = document.getElementById('alert-box')
const imgBox = document.getElementById('img-box')
const form = document.getElementById('p-form')

//!Indi ise inputdan gelen deyerleri cekel=>value seklinde
const titleValue = document.getElementById('titleValue')
const bodyValue = document.getElementById('bodyValue')
const myFile = document.getElementById('id_image')//sekil ucun ayri bir event yazilmalidir cunki deyisilir yeni change event olur yeni addEvenlistenerde sekil secmek ucun 'change' eventinden istifade edeciyik

const csrf = document.getElementsByName('csrfmiddlewaretoken')

console.log(myFile)

const handleAlerts = function(type,text){
    alertBox.innerHTML = `<div class="alert alert-${type}" role="alert">
        <strong>${text}</strong>
    </div>`
}


myFile.addEventListener('change',function(){
    const img_data = myFile.files[0]
    const resultImageUrl = URL.createObjectURL(img_data)
    imgBox.innerHTML = `<img src="${resultImageUrl}" width="100px">`
})


// const basUrl = window.location.href
// const neticeUrl = basUrl.replace('myprofile/','addpost/')


form.addEventListener('submit',function(e){
    e.preventDefault()

    const fd = new FormData()//new FormData() ile form yaradirsan ele bil
    fd.append('csrfmiddlewaretoken',csrf[0].value)
    fd.append('title',titleValue.value)
    fd.append('body',bodyValue.value)
    let a  = myFile.value.replace("C:\\fakepath\\", "")
    fd.append('image',`postpicture/${a}`.replace(/ /g,''))
    // myFile.value.replace("C:\\fakepath\\", "postpicture/"


    $.ajax({
        type: 'POST',
        url: '/users/addpost/',
        enctype: 'multipart/form-data',
        data:fd,
        success:function(response){
            console.log(response)
            const sTetx = `Ugurlu Bi Sekilde Post Yaradildi`
            handleAlerts('info', sTetx)
            
        },
        error:function(err){
            console.log('Error', err)
            handleAlerts('danger','Xeta Bas Verdi')
        },
        cache:false,
        contentType : false,
        processData:false,
    })
})


//!--------------------------------------------------

