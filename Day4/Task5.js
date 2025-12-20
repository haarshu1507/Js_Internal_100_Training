<button onclick="decrease()">-</button>
<span id="count">0</span>
<button onclick="increase()">+</button>

<script>
let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrease() {
    if (count > 0) {
        count--;
        document.getElementById("count").innerText = count;
    }
}
</script>
