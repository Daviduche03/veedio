const btn = document.querySelector('#btn');

btn.addEventListener('click', async () => {
    const inputText = document.querySelector('#input').value;
    const split = inputText.split('?');
    const secondSplitting = split[0].split('e/');
    const videoUrl = 'https://cdn.loom.com/sessions/thumbnails/' + secondSplitting[1] + '-00001.mp4';

    try {
        // Fetch the video content
        const response = await fetch(videoUrl);
        const videoBlob = await response.blob();

        // Create a Blob URL for the video content
        const blobUrl = URL.createObjectURL(videoBlob);

        // Create a link element
        const link = document.createElement('a');
        link.href = blobUrl;
        link.setAttribute('download', 'downloadedVideo.mp4');

        // Trigger a click on the link to start the download
        link.click();
        alert('Video downloaded')
    } catch (error) {
        console.error('Download failed:', error.message);
    }
});
