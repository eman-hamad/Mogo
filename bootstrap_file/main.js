// software
// liberary .... framework
// $.noconflict('asdasda')
// framework bootstrap .. components 
// lib ... lang  NOT new lang .... 
// jQuery ... js codes for reusable 

// let x = document.getElementById('demo')

// jQuery
// $ ====> jQuery ==> object of js methods


/* 

height -- width --- opacity
hide()
show()
toggle()



-->height
slideUp
slideDown

-->opacity
fadeIn
fadeOut
fadeToggle
fadeTo

chaning
*/
// $('#demo').hide(4000)

// $('#demo').slideUp(2000, function () {
//     $('#btn').slideUp(2000, function () {
//         $('#demo').slideDown(2000)
//     })
// });
// click --> addEventListner



/*

setter /getter
.html()
.text()
val()
attr
css 
*/
// let x = document.getElementById('demo');
// x.style.backgroundColor
$('#demo').click( function () {
  
    // $('#demo').animate({ width: '100vw', height:'100vh' }, 2000)
    // $('#demo').animate({ borderRadius: '50%' }, 2000)
    // $('#demo').animate({ width: '50vw' }, 2000)
    // $('#demo').slideUp(2000).slideDown(2000).fadeOut(1000);
// document.getElementById('demo').innerHTML = 'adsdas
    // let x = $('#demo').text(); // getter
    // console.log(x)
    // $('#demo').html('<p>Hello</p>')
    // $('#demo').text('HEllo FE') // setter
    // $('#name').val() //getter
    // $('#name').val('asdasdasdad') //getter

    // let y = $('#demo').css('backgroundColor')
    // let x = document.getElementById('mainImg')

    // let y = $('#mainImg').attr('src','../images/2.jpg')
    // console.log(y)
    // console.log(y)

    let x = $('#demo').outerWidth(true)
    console.log(x)
    // $('#demo h3').before('<a href="google.com">Google</a>')
    $('#demo h3').hide(2000)

})

// width() ,, only width ... pure width
// innerWidth() width with padding
// outerWidth() width with padding border 
// outerWidth(true) width with padding and margin



/* next
nextAll
nextUntil
// prev
prevAll
prevUntil
siblings
parent
parents
children
find
first
last
eq ==> equal
*/
// $('#demo-text').parents().css('backgroundColor','black')
// $('#demo-text').parents().css('backgroundColor','black')
$('div span').eq(6).css('backgroundColor','black')
console.log($('div span')[1])

for (let i = 0; i < $('div span').length; i++){
    console.log($('div span').eq(i))
}



toggleClass('test')


replaceClass('test','ay7aga')



//append
// prepend

//after
// before

// addClass
// removeClass
// toggleClass

$('.img-item').click(function () {
    let imgSrc = $(this).attr('src')
    $('.img-item').toggleClass('border')
    // $(this).addClass('border')
    $('#mainImg').attr('src', imgSrc)
})


// offset

let recipesOffset = $('#recipes').offset().top;

console.log($('#recipes').offset() , 'HERE WE GO ... THIS IS THE RECIPES OFFSET')
$(window).scroll(function () {
    let wScroll = $(window).scrollTop()
    if (wScroll > recipesOffset) {
        $('#main-nav').css("backgroundColor","red")
    } else {
        $('#main-nav').css("backgroundColor", "gray")
    }

    if (wScroll > 700) {
        $('#backTop').fadeIn(2000)
    } else {
        $('#backTop').fadeOut(1000)
    }
})

$('#backTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 3000)
})


// $('a').not("a[href^=''https")
$('a[href^="#"]').click(function() {
    // console.log()
    let aHref = $(this).attr('href')

    let aOffset = $(aHref).offset().top;
    console.log(aOffset)
    $('html,body').animate({ scrollTop: aOffset }, 1000)
})
$(document).ready(function () {

    $('.spinner-container').fadeOut(1000)
    // $('.our-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // });
});






 







// $('#name').keyup(function () {
//     console.log('chage')
// })
// $('#demo').animate({ width: '100%' }, 2500)
// $('#demo').animate({ height: '100vh' }, 1500, () => {
//     $('#demo h1').fadeIn(1000, function () {
//         $('#demo .col-4').slideDown(1000)
//     })
// })









$('#stop').click(() => {
    $('#demo').stop()
    //  $('#demo').stop(true,true )
    //  $('#demo').stop(stopAll,  goToTheEnd )

})

function name(params) {
    
}

// $ => jQuery => object that contain all method

// '#demo' '.demo' 'div > a', 'p span'  ANY CSS SELECTOR


// hide

// 4000 duration milscends --> 4s

