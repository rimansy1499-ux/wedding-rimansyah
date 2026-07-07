const button = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const content = document.getElementById("content");

button.addEventListener("click", () => {
    cover.style.display = "none";
    content.style.display = "block";
});

const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
    document.getElementById("guestName").innerText =
        decodeURIComponent(guest.replace(/\+/g, " "));
}
