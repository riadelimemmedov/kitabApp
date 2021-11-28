//!Update Comment
const updateForm = document.getElementById('update-form')
const updateButton = document.getElementById('updateBtn')
const commentInput = document.getElementById('commentInput')

const formCommentteButton = document.getElementById('formcommenttebutton')


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
        }
        else{
            commentInput.value = ''
        }

    })

}

//*Burda yaz AJAX belke isledi olmasa eger fetch ile yazarsan oda olmasa helpppppppppppppppppppppt   