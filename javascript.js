  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
     mx=e.clientX; 
     my=e.clientY;
     cursor.style.left=mx+'px'; 
    cursor.style.top=my+'px'; 
  });
  function animRing() {
     rx+=(mx-rx)*0.12; 
     ry+=(my-ry)*0.12; 
     ring.style.left=rx+'px'; 
     ring.style.top=ry+'px'; 
     requestAnimationFrame(animRing);
     }
  animRing();
  document.querySelectorAll('a,button,.stack-card,.road-card,.contact-link').forEach(el => {
    el.addEventListener('mouseenter',()=>{ 
      cursor.style.width='20px'
      ;cursor.style.height='20px'; 
      ring.style.width='60px';
      ring.style.height='60px'; 
    });
    el.addEventListener('mouseleave',()=>{
       cursor.style.width='12px';
       cursor.style.height='12px'; 
       ring.style.width='36px';
       ring.style.height='36px'; 
      });
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach((e,i) => {
      if(e.isIntersecting) {
        setTimeout(()=>e.target.classList.add('visible'), i*80);
        io.unobserve(e.target);
      }
    });
  }, { threshold:0.1 });
  reveals.forEach(r => io.observe(r));

  // Skill bar animation
  const skillIo = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.style.getPropertyValue('--w') || getComputedStyle(bar).getPropertyValue('--w');
        });
      }
    });
  }, {threshold:0.3});
  document.querySelectorAll('.skills-grid').forEach(g=>skillIo.observe(g));

  // Send button
  function handleSend(btn) {
    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'var(--accent2)';
    btn.style.color = '#050c14';
    setTimeout(()=>{ btn.textContent='Send Message ✉'; btn.style.background=''; btn.style.color=''; },3000);
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
    });
  });