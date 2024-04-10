document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.responsive-video');
    
    video.play().catch(error => {
        console.error('La reproducción automática fue bloqueada:', error);
    });
});
