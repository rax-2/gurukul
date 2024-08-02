
const content_box = document.getElementById("content_box")

function createDiv(dataArray) {
    const div = document.createElement('div');
    div.classList.add('my-div');

    const heading = document.createElement('h2');
    heading.classList.add("topic_head")
    heading.textContent = dataArray[0];
    div.appendChild(heading);

    const div2 = document.createElement('div');
    div2.classList.add("inner_div")
    div.appendChild(div2);

    for (let i = 2; i < dataArray.length; i++) {
        const aTag = document.createElement('a');
        aTag.href = `${dataArray[1]}/page${i}.html`;
        aTag.textContent = dataArray[i];
        aTag.classList.add("page_link")
        div2.appendChild(aTag);
    }

    return div;
}


function embedYouTubeVideos(videoLinks) {
    const videoContainer = document.getElementById('videoContainer');

    videoLinks.forEach(link => {
        // Extract the video ID from the link
        const videoId = link.split('v=')[1].split('&')[0];

        // Create the iframe element
        const iframe = document.createElement('iframe');
        iframe.classList.add("youtube_videos_container")
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        // Append the iframe to the video container
        videoContainer.appendChild(iframe);
    });
}

// Essential Study Materials
