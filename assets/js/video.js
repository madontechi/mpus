document.getElementById('muteButton').addEventListener('click', function () {
    let video = document.getElementById('videoPlayer');
    let icon = this.querySelector('i');

    if (video.muted) {
        video.muted = false;
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    } else {
        video.muted = true;
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    }
});
