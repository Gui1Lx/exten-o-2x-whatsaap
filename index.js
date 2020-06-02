const interval = setInterval(() => {
    const header = document.querySelector("._3auIg")
    if (header) {
        clearInterval(interval);

        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("TwoTimesButton");

        button.addEventListener("click", () => {
            const audio = document.querySelectorAll("audio")
            audio.forEach((audio) => {
                audio.playbackRate = 2;
            })
        })

        header.appendChild(button)

    }
}, 1000);

