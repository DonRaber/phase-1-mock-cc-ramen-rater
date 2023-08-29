// FETCH

fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => renderRamen(data))


// RENDER

function renderRamen(ramens) {
    console.log(ramens)
    
    // MAIN DIVS
    const ramenMenu = document.getElementById('ramen-menu')
    // const ramenDetail = document.getElementById('ramen-detail')
    
    ramens.forEach((ramen) => {
        
        // IMAGES
        const ramenImg = document.createElement('img')
        ramenImg.src = ramen.image
        ramenImg.alt = `This is ${ramen.name} ramen`
        ramenMenu.append(ramenImg)

        ramenImg.addEventListener('click', (e) => {
            detailName.textContent = String(ramen.name)
            detailImg.src = ramen.image
            detailRest.textContent = String(ramen.restaurant)
            detailRating.textContent = String(ramen.rating)
            detailComnt.textContent = String(ramen.comment)
        })
        
        //RAMEN DETAILS
    
        detailName = document.querySelector('.name')
        detailImg = document.querySelector('.detail-image')
        detailRest = document.querySelector('.restaurant')
        detailRating = document.getElementById('rating-display')
        detailComnt = document.getElementById('comment-display')
        
        
    });
}

// NEW RAMEN FORM
const ramenForm = document.querySelector('form')
ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newRamen = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : e.target['new-comment'].value
    }
    renderRamen([newRamen])
})