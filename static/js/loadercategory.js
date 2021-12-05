//!Ajax + Django loader POST

const categoriesBox = document.getElementById('categories-box')
const spinnerBox = document.getElementById('spinner-box')
const loadBtn = document.getElementById('daha-cox')
const loadBox = document.getElementById('loadBox')

let visible = 3

const halHazirUrl = window.location.href
const yeniUrl = halHazirUrl.replace('categorys', `category-json/${visible}`)
console.log(halHazirUrl)
console.log(yeniUrl)


const handleGetCategory = () => {
    $.ajax({
        type: 'GET', //type:'GET' yazilmasindaki sebeb biz data gondermirik data cekiirik DataBaseden,eger data gonderseydik POST dan istfiade ederik birde csrfmiddlewaretokenden tehlukesizlik ucun POST adindan gorunudyuyuy kimi postalayib gondermek harasa
        url: `/category-json/${visible}`,
        success: function (response) {
            let maxSize = response.max_size
            let categorys = response.categorys
            
            categorys.forEach(function(item){
                console.log((item.category_picture))
            })

            console.log(halHazirUrl)
            console.log(yeniUrl)
            console.log(response)

            spinnerBox.classList.remove('d-none')

            setTimeout(function () { //yeni setTimeOut icindeki funksiya 1 saniye sonra isleyecek
                spinnerBox.classList.add('d-none')
                categorys.map(function (item) {
                    categoriesBox.innerHTML += `
                        <div class="col-sm-6 col-md-4 ">
                            <div class="box ">
                                <div class="img-box kitab">
                                    <img src="media/${item.category_picture}" alt="">
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        <a style="color: #30336b;" id="kategoryTitle" href="categorybook/${item.slug}">${item.title}</a>
                                    </h5>
                                <p>
                                    ${item.text}
                            </div>
                                </p>
                            </div>
                        </div>
                        `
                })

                if (maxSize == true) {
                    console.log('Done')
                    loadBtn.classList.add('d-none')

                    loadBox.innerHTML = `
                        <div class="alert alert-info alert-dismissible fade show" role="alert">
                            <strong>Kitablara Uygun Kategoriya Bitti</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        `
                }

            }, 1000)
        },

        error: function (err) {
            console.log('Hata ' + err)
        }
    })

}

handleGetCategory()
loadBtn.addEventListener('click', () => {
    visible += 3
    handleGetCategory()
    console.log('Lad Btn Tiklandi');
})

//handleGetCategory() //yeni ilk defe cagirmaliyigdaki ilk 3 post biz butona tiklamadan yuklesin seyfenin ilk acilisinda
