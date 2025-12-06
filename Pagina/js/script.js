// Atualizar o script.js existente com estas funções adicionais

document.addEventListener('DOMContentLoaded', function() {
    // ... código anterior ...
    
    // Adicionar efeito de header ao rolar
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // ... código anterior de ativação de seções ...
    });
    
    // Adicionar elementos decorativos
    function addDecorativeElements() {
        const heroSection = document.querySelector('.hero');
        const demoSection = document.querySelector('.demo');
        
        if (heroSection) {
            const leaf1 = document.createElement('i');
            leaf1.className = 'fas fa-leaf decorative-leaf decorative-leaf-1 floating';
            heroSection.appendChild(leaf1);
            
            const leaf2 = document.createElement('i');
            leaf2.className = 'fas fa-seedling decorative-leaf decorative-leaf-2 floating';
            heroSection.appendChild(leaf2);
            
            // Ajustar timing da animação
            leaf2.style.animationDelay = '1.5s';
        }
        
        if (demoSection) {
            const leaf3 = document.createElement('i');
            leaf3.className = 'fas fa-leaf decorative-leaf';
            leaf3.style.cssText = 'top: 20%; right: 10%; font-size: 8rem; color: rgba(255, 255, 255, 0.1); transform: rotate(45deg);';
            demoSection.appendChild(leaf3);
        }
    }
    
    addDecorativeElements();
    
    // Adicionar efeito de digitação no hero (opcional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        const speed = 50;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        // Iniciar apenas quando a seção estiver visível
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(heroTitle);
    }
    
    // Adicionar confetes ao clicar no botão principal
    const primaryButtons = document.querySelectorAll('.btn-primary');
    
    primaryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Criar confetes verdes
            for (let i = 0; i < 20; i++) {
                createConfetti(e.clientX, e.clientY);
            }
        });
    });
    
    function createConfetti(x, y) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: ${Math.random() > 0.5 ? '#4CAF50' : '#2E7D32'};
            border-radius: 50%;
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
            z-index: 10000;
        `;
        
        document.body.appendChild(confetti);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = x;
        let posY = y;
        let opacity = 1;
        
        function animate() {
            posX += vx;
            posY += vy;
            vy += 0.1; // gravidade
            opacity -= 0.02;
            
            confetti.style.left = posX + 'px';
            confetti.style.top = posY + 'px';
            confetti.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        }
        
        animate();
    }
    
    // Efeito de hover nos cards de funcionalidades
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #f8fff8, #ffffff)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = '';
        });
    });
});