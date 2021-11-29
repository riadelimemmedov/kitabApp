//!Update Comment
const updateForm = document.getElementById('update-form')
const updateButton = document.getElementById('updateBtn')
const commentInput = document.getElementById('commentInput')

const formCommentteButton = document.getElementById('formcommenttebutton')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

const halHazirdakiUrl = window.location.href
const deyisenUrl = halHazirdakiUrl.replace('postdetail/','updateComment/')

console.log(deyisenUrl)


const updateCommentForm = document.getElementById('updateCommentForm') 
// updateForm.addEventListener('submit',e=>{
//     e.preventDefault()
//     const commentAll = [...document.getElementsByClassName('updateIcon')]
//     commentId.forEach(function(comment){
//         const commentId = comment.id

//     })
//     console.log(e.target.value)
// })


const commentAll = [...document.getElementsByClassName('updateIcon')]
let commentIdList = []

commentAll.forEach(function(comment){
    const commentId = comment.id
    commentIdList.push(commentId)
})

let icaze = true

for(let i=0;i<commentIdList.length;i++){
    document.getElementById(`${commentIdList[i]}`).addEventListener('click',function(e){
        formCommentteButton.classList.add('d-none')
    
        
        let amk = String(commentIdList[i]).replace('updateBtn-','')

        e.preventDefault()

        if(icaze){//yeni hemise islesin
            commentInput.value = document.getElementById(`commentContent-${amk}`).textContent
            //ajax qeyd ele burdadada belke yazildie yada fetch ile yazildi
            updateCommentForm.addEventListener('submit',x=>{
                x.preventDefault()
                $.ajax({
                    type: 'POST',
                    url:deyisenUrl,
                    data : {
                        'csrfmiddlewaretoken':csrf[0].value,
                        'updatedComment':commentInput.value
                    },
                    success:function(response){
                        console.log(response)
                    },
                    error:function(err){
                        console.log(err)
                    }
                })
            })
            
        }   
        else{
            commentInput.value = ''
            formCommentteButton.classList.remove('d-none')
        }

    })
}

console.log(commentInput.value)

//*Burda yaz AJAX belke isledi olmasa eger fetch ile yazarsan oda olmasa helpppppppppppppppppp