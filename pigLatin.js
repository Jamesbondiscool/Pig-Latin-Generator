let detectVowel = (word) => {
    let vowels = "aeiou";

for(let i =0; i < word.length; i++) {
    if(vowels.indexOf(word[i]) !== -1) {
        console.log(i)
        return i;
    }
}
}


let pigLatin = (word) => {
    
    word = word.toLowerCase().trim();

    let firstvowel = detectVowel(word)

    if(firstvowel > 0) {
        return word.slice(firstvowel) + word.slice(0, firstvowel) +
        "ay";
    }
    return word + "yay";
}

let audioPig = () => {
    let mySound = document.getElementById("music");

    mySound.play()
    console.log("audio playing")
}

let translation = () => {

    audioPig()

    let inputBox = document.getElementById("inputElement")

    let englishWord = inputBox.value

    let pigWord = pigLatin(englishWord)

    let displayWord = document.getElementById("outputElement")

    document.querySelector(".display h1").style.display = "none";
    document.querySelector(".display").classList.add("spinner");

    setTimeout(() => {
        document.querySelector(".display").classList.remove("spinner");
        document.querySelector(".display h1").style.display = "block";
    }, 1000)

    displayWord.innerText = pigWord
}


window.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        translation();
    }
})

let port = process.env.PORT || 5500;

app.listen(port, ()=>{
    console.log(`App started on port ${port}`)
})