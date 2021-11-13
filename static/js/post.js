//!Js + Ajax ile create POST

console.log('Hello Post Page')

//!Indi ise Html den taglari cekek => INNERHTML elave olunacaglar
const alertBox = document.getElementById('alert-box')
const imgBox = document.getElementById('img-box')
const form = document.getElementById('p-form')

//!Indi ise inputdan gelen deyerleri cekel=>value seklinde
const titleValue = document.getElementById('titleValue')
const bodyValue = document.getElementById('bodyValue')
const myFile = document.getElementById('myFile')//sekil ucun ayri bir event yazilmalidir cunki deyisilir yeni change event olur yeni addEvenlistenerde sekil secmek ucun 'change' eventinden istifade edeciyik

const csrf = document.getElementsByName('csrfmiddlewaretoken')



myFile.addEventListener('change',function(){
    const img_data = myFile.files[0]
    const resultImageUrl = URL.createObjectURL(img_data)
    imgBox.innerHTML = `<img src="${resultImageUrl}" width="100px">`
})


// const basUrl = window.location.href
// const neticeUrl = basUrl.replace('myprofile/','addpost/')


form.addEventListener('submit',function(e){
    e.preventDefault()

    const fd = new FormData()
    fd.append('csrfmiddlewaretoken',csrf[0].value)
    fd.append('title',titleValue.value)
    fd.append('body',bodyValue.value)
    fd.append('image',myFile.files[0])

    console.log(fd)

    $.ajax({
        type: 'POST',
        url: '/users/addpost/',
        success:function(response){
            console.log(response)
        },
        error:function(err){
            console.log('Error', err)
        }
    })
})