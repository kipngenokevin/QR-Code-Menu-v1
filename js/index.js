<script>
  document.addEventListener('DOMContentLoaded', function() {
    function insertVideosAfterFoodCategory(videoSources, width = 640, height = 360) {
      var foodCategory = document.querySelector('.food-category');

      if (foodCategory && videoSources.length > 0) {
        var videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');

        var video = document.createElement('video');
        video.width = width;
        video.height = height;
        video.controls = true;

        var source = document.createElement('source');
        video.appendChild(source);
        videoContainer.appendChild(video);

        // Insert the video container after the food-category element
        foodCategory.parentNode.insertBefore(videoContainer, foodCategory.nextSibling);

        // Function to update the video source
        let currentVideoIndex = 0;
        function updateVideoSource() {
          source.src = videoSources[currentVideoIndex];
          video.load();
          video.play();
          currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        }

        // Start the first video
        updateVideoSource();

        // Set interval to change the video every 10 seconds
        setInterval(updateVideoSource, 10000);
      } else {
        console.error('No element with the class "food-category" found or no video sources provided.');
      }
    }

    // Example usage:
    const videos = ['', '', ''];
    insertVideosAfterFoodCategory(videos);
  });
</script>
