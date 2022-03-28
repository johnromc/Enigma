const d= document;

export default function slider(){
    const $nextBtn = d.querySelector('.slider-buttons .next'),
     $prevBtn = d.querySelector('.slider-buttons .prev'),
     $slides = d.querySelectorAll('.slider-slide'),
     $sliders = d.querySelector('.slider-slides');

     let i = 0;
     d.addEventListener('click', (e)=>{
         if(e.target === $prevBtn){
             e.preventDefault();
             $slides[i].classList.remove('active');
             i--;

             if(i<0){
                 i = $slides.length - 1;
             }

            $slides[i].classList.add('active');
         }
         if(e.target === $nextBtn){
             e.preventDefault();
             $slides[i].classList.remove('active');
             i++;

             if(i>= $slides.length){
                 i = 0;
             }

            $slides[i].classList.add('active');
         }

     })
     let playSlider;

     let repeater = ()=>{
         playSlider = setInterval(function() {
             $slides[i].classList.remove('.active');
             i++;

             if(i>= $slides.length){
                 i = 0;
             }

            $slides[i].classList.add('active');
         }, 4000);
     }
     repeater();
    
     $sliders.addEventListener('mouseover', ()=>{
         clearInterval(playSlider)
     })

     $sliders.addEventListener('mouseout',()=>{
         repeater()
     })

}