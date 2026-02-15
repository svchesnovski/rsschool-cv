document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.bar i').forEach(function(el){
    const w = el.style.width || '0%';
    el.style.width = '0%';

    setTimeout(() => el.style.transition =
      'width 1800ms cubic-bezier(.2,.9,.2,1)', 50);

    setTimeout(() => el.style.width = w, 100);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
},{threshold:0.2});

document.querySelectorAll('.reveal').forEach(el=>{
  observer.observe(el);
});