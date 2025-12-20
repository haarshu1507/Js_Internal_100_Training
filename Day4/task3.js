<img id="img" src="img1.jpg" width="200">
<br><br>
<button onclick="prev()">Previous</button>
<button onclick="next()">Next</button>

<script>
let images = ["img1.jpg", "img2.jpg"];
let index = 0;

function next() {
    index = (index + 1) % images.length;
    document.getElementById("img").src = images[index];
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("img").src = images[index];
}
</script>
