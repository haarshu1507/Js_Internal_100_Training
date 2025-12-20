<p id="para">This is a paragraph</p>
<button onclick="toggle()">Show / Hide</button>

<script>
function toggle() {
    let p = document.getElementById("para");
    p.style.display = (p.style.display === "none") ? "block" : "none";
}
</script>
