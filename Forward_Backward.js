const video = document.querySelector('video');
const handleKeyDown = (event) => {
    event.preventDefault();
    const skipTime = 10; // Time to skip (forward or backward) in seconds

    if (event.keyCode === 39) { // Right arrow key (forward)
        video.currentTime += skipTime; // Skip forward by 10 seconds
    } else if (event.keyCode === 37) { // Left arrow key (backward)
        video.currentTime -= skipTime; // Rewind by 10 seconds
    }
    else if (event.keyCode === 32) {
        if(video.play){
            video.pause()
        }
        else if(video.pause){
            video.play()
    }
};

// Attach the event handler
document.addEventListener('keydown', handleKeyDown);
 
