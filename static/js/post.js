//!Js + Ajax ile create POST

console.log('Hello Post Page')

//!Indi ise Html den taglari cekek
const alertBox = document.getElementById('alert-box')
const imgBox = document.getElementById('img-box')
const form = document.getElementById('p-form')

const basUrl = window.location.href
const neticeUrl = basUrl.replace('myprofile/','addpost/')

form.addEventListener('submit',function(e){
    e.preventDefault()

    $.ajax({
        type: 'POST',
        url : neticeUrl,
        success : function(response){
            console.log(response)
        },
        function(err){
            console.log(error)
        }
    })
})