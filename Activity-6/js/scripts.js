// message Array
let messages = [];

const messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

const data = [
    {
        type: messageType.out,
        user: 'Marquis',
        message: 'hey, did you see that new movie that just came out??'
    },
    {
        type: messageType.in,
        user: 'Marcus',
        message: 'nah, which one are you talking about?'
    },
    {
        type: messageType.out,
        user: 'marquis',
        message: 'my fault, I was talking about the terrifier.'
    }
];

function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message) {
    const messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    const messageEl = document.createElement('div');
    messageEl.appendChild(messageText);
    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event) {
    let user, type;
    const messageInput = document.getElementById('message-input');
    const messagesContainerEl = document.getElementById('message-container');

    switch (event.target.id) {
        case 'send-button':
            user = 'Marquis';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Marcus';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    if (messageInput.value !== '') {
        const message = new Message(type, user, messageInput.value);
        messages.push(message);

        const el = createMessageElement(message);
        messagesContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

function loadSeedData() {
    for (let i = 0; i < data.length; i++) {
        const message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    const messagesContainerEl = document.getElementById('message-container');
    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        const el = createMessageElement(message);
        messagesContainerEl.appendChild(el);
    }
}

const init = function() {
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
};

init();
