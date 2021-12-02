//!Update Comment
const updateForm = document.getElementById('update-form')
const updateButton = document.getElementById('updateBtn')
const commentInput = document.getElementById('commentInput')

const formCommentteButton = document.getElementById('formcommenttebutton')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

const halHazirdakiUrl = window.location.href
// const deyisenUrl = halHazirdakiUrl.replace('postdetail/id','updateComment/')
const deyisenUrl = halHazirdakiUrl.replace('postdetail/','')


const updateCommentForm = document.getElementById('updateCommentForm') 
const updateCommentButton = document.getElementById('updateCommentButton')
const commentUpdateAlert = document.getElementById('commentUpdateAlert')

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
        updateCommentButton.classList.remove('d-none')
        
        let amk = String(commentIdList[i]).replace('updateBtn-','')

        commentInput.addEventListener('keyup',item=>{
            if(commentInput.value == ''){
                formCommentteButton.classList.remove('d-none')
                updateCommentButton.classList.add('d-none')
            }
        })
    
        e.preventDefault()


        if(icaze){//yeni hemise islesin
            commentInput.value = document.getElementById(`commentContent-${amk}`).textContent
            //ajax qeyd ele burdadada belke yazildie yada fetch ile yazildi
            updateCommentForm.addEventListener('submit',x=>{
                x.preventDefault()
                $.ajax({
                    type: 'POST',
                    url:`updateComment/${amk}`,
                    data : {
                        'csrfmiddlewaretoken':csrf[0].value,
                        'updatedComment':commentInput.value
                    },
                    success:function(response){
                        commentInput.value = ''
                        formCommentteButton.classList.remove('d-none')
                        updateCommentButton.classList.add('d-none')
                        document.getElementById(`commentContent-${amk}`).textContent = response.comment
                        commentUpdateAlert.innerHTML = `
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Ugurlu Ugurlu Bir Sekilde Yenilendi Commentiniz</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        `
                    },
                    error:function(err){
                        commentUpdateAlert.innerHTML = `
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Xeta Bas Verdi Zehmet Olmasa Yeniden Sinayin</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        `
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


//!Delete Comment Ajax Ile



const getCookie = (name) => {//js de funksiyalari deyisken kimi tanimlamag mumkundur
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');



const deleteCommentForm = document.getElementById('deleteCommentForm')
const commentDeleteAll = [...document.getElementsByClassName('deleteIcon')]
let commentSayi = Number(document.getElementById('commentSayi').textContent.trim())
console.log(commentSayi)


let deleteList = []

commentDeleteAll.forEach(function(deletecomment){
    const delete_id = deletecomment.id
    deleteList.push(delete_id)
})
console.log(deleteList)

let izin = true


for(let j=0;j<deleteList.length;j++){
    let sil = String(deleteList[j]).replace('deleteBtn-','')
    
    
    if(izin){
        document.getElementById(`deleteBtn-${sil}`).addEventListener('click',function(e){
            e.preventDefault()
            $.ajax({
                type:'POST',
                url : `deleteComment/${sil}`,
                data:{
                    'csrfmiddlewaretoken':csrf[0].value
                },
                success:function(response){
                    console.log('Silindi')
                    document.getElementById(`commentBody-${response.delete_comment_id}`).remove()
                    let neticeCavab = commentSayi-1
                    document.getElementById('commentSayi').textContent = neticeCavab
                    console.log(document.getElementById('commentSayi').textContent.trim())
                    commentSayi = neticeCavab//deyisen deyeride bura gonderki islesin
                    
                },
                error:function(err){
                    console.log('Xeta')
                }
            })
        })
    }
}