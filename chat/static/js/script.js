const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const firstMsgTime = get(".time-right");
firstMsgTime.innerHTML = formatDate(new Date())

const BOT_IMG = "{{ url_for('static', filename='bot.png') }}";
const PERSON_IMG = "{{ url_for('static', filename='man.png') }}";
const BOT_NAME = "Assistant virtuel";
const PERSON_NAME = "Vous";

msgerForm.addEventListener("submit", event => {
    event.preventDefault();

    const msgText = msgerInput.value;
    if (!msgText) return;

    appendMessage("container darker", PERSON_NAME, PERSON_IMG, "right", msgText, "left");
    msgerInput.value = "";
    botResponse(msgText);
});

function appendMessage(msgContainer, userName, img, avatarSide, text, timeSide) {
    const msgHTML = `<div class="${msgContainer}">
        <img src="${img}" alt="Avatar" class="${avatarSide}">
        <span id="userName">${userName}</span>
        <p>${text}</p>
        <span class="time-${timeSide}">${formatDate(new Date())}</span>
    </div>`;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
}


function botResponse(rawText) {
    fetch('/get', {
            method: 'POST',
            body: rawText,
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            const msgText = data;
            appendMessage("ct", BOT_NAME, BOT_IMG, "left", msgText, "right");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Utils
function get(selector) {
    return document.querySelector(selector)
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
}


