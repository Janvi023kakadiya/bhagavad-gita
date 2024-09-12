const book = document.getElementById('book');

function toggleBook() {
    book.classList.toggle('open');
}

let gita = document.getElementById('chapters');
let slok = document.getElementById('sloks');

const chapters = () => {
    fetch('https://vedicscriptures.github.io/chapters').then((res) => {
        return res.json();
    }).then((data) => {
        data.forEach(element => {
            gita.innerHTML += `<li onclick="return slokList(${element.chapter_number}, ${element.verses_count})"> ${element.name}</li>`;
        });
    }).catch((err) => {
        console.log("err", err);
    })
}

chapters();

const slokList = (id, verses_count) => {
    slok.innerHTML = "";
    toggleBook(); 

    for (let x = 1; x < verses_count; x++) {
        fetch(`https://vedicscriptures.github.io/slok/${id}/${x}/`).then((res) => {
            return res.json();
        }).then((data) => {
            slok.innerHTML += data.slok + "<br><br>";
        }).catch((err) => {
            console.log(err);
        });
    }
}