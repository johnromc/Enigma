const d = document;
$panelBtn = d.querySelector('.panel-btn'),
$panel = d.querySelector('.panel'),


$panelBtn.addEventListener('click', (e)=>{
    $panel.classList.toggle('is-active');
    $panelBtn.classList.toggle('is-active');

})