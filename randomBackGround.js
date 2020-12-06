const imageUrls = [
    "https://my.alfred.edu/zoom/_images/foster-lake.jpg",
    "https://wallpapercave.com/wp/zldNYKr.jpg",
    "https://wallpapercave.com/wp/MkslXhR.jpg",
    "https://wallpapercave.com/wp/drHGKXe.jpg",
    "https://wallpapercave.com/wp/aLrx4ut.jpg"
]

const html = document.querySelector("html")

const randomIndex = Math.ceil(Math.random() * imageUrls.length) - 1;

html.style.backgroundImage = `url(${imageUrls[randomIndex]})`;
html.style.backgroundSize = "cover";