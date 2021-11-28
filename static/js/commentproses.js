//!Yorumlari update ve delete etme

console.log('Comment Update')

const commentForm = document.getElementById('commentForm')
const commentInput = document.getElementById('commentInput')

const deleteBtn = document.getElementById('deleteBtn')

const updateIcon = document.getElementById('updateIcon')
const deleteIcon = document.getElementById('deleteIcon')


const postId = document.getElementById('istifadeciad').getAttribute('data-post')
// console.log(istifadeciad)

const csrf = document.getElementsByName('csrfmiddlewaretoken')

// updateBtn.style.outline = 'none'
// updateIcon.style.outline = 'none'
// updateBtn.style.border = 'none'
// updateIcon.style.border = 'none'

// updateBtn.addEventListener('click',function(e){
//     e.preventDefault()
//     commentInput.value = commentContent.textContent

// })

// const hazirURL = window.location.href
// const neticeUrl = hazirURL.replace('postdetail/<int:id>','updateComment/')


// console.log(document.getElementById('commentContent').getAttribute('data-row'))

const hazirUrl = window.location.href
const yeniUrl = hazirUrl.replace(`postdetail/${postId}`,`allcomments/`)
console.log(yeniUrl)

// $.ajax({
//     type: 'GET',
//     url:yeniUrl,
//     success: function(response){
//         const datas = [...JSON.parse(response.datas)]
//         datas.forEach(function(item){
//             commentContentClass.forEach(function(data){
//                 updateBtn.addEventListener('click',function(){
//                     if(item.pk == data.getAttribute('data-row')){
                        
//                     }
//                     // else{
//                     //     alert('dd')
//                     // }
//                 })
//             })  
            
//         })
        
//     },
//     error:function(err){
//         console.log(err)
//     }
// })


// updateIcon.addEventListener('click',function(){
//     commentInput.value = 
// })

// commentForm.addEventListener('submit',function(e){
//     e.preventDefault()
//     $.ajax({
//         type:'POST',
//         url:'/updateComment/',
//         data:{
//             'csrf':csrf[0].value,
//             'commentInput':commentInput.value
//         },
//         success:function(response){
//             console.log(response)
//         },
//         error:function(err){    
//             console.log(err)
//         }
    
//     })
// })

const commentContentClass = [...document.getElementsByClassName('commentContentClass')]
const updateIconClass = [...document.getElementsByClassName('updateIcon')]
const updateBtnKohne = document.getElementById('updateBtn')

let result = true
updateIconClass.forEach(function(updateBtn){
    if(result){
        commentContentClass.forEach(function(commentTxt){
            if(updateBtn.getAttribute('data-update') == commentTxt.getAttribute('data-row')){
                document.getElementById(`updateBtn-${updateBtn.getAttribute('data-update')}`).addEventListener('click',function(e){
                    console.log('xeta')
                })
            }
        })
    }
    result = false
})

