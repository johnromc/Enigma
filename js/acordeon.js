const $title =document.querySelectorAll('.title');
const $text = document.querySelectorAll('.text');

$title.forEach( (title, i) => {
    $title[i].addEventListener('click', (e)=>{
        $text.forEach((cadaTitulo, i)=>{
            $text[i].classList.remove('active')
        })
        $text[i].classList.add('active')
    })
});