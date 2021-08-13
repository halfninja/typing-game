// @ts-check

/**
 * @param {any[]} args
 */
function log(...args) {
    console.log('🍓', ...args);
}

log('Welcome');

// TODO split these into sections
const emoji = [
'💖', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💔', '❣', '💕', '💞', '💓', '💗', '💘', '💝', '💟', 
'😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '🥱', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵', '🥴', '😠', '😡', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🥳', '🥺', '🤠', '🤡', '🤥', '🤫', '🤭', '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '☠', '👻', '👽', '👾', '🤖', '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🐱', '🐱', '💻', '🐱', 
'🙈', '🙉', '🙊', '🐵', '🐶', '🐺', '🐱', '🦁', '🐯', '🦒', '🦊', '🦝', '🐮', '🐷', '🐗', '🐭', '🐹', '🐰', '🐻', '🐨', '🐼', '🐸', '🦓', '🐴', '🦄', '🐔', '🐲', '🐽', '🐾', '🐒', '🦍', '🦧', '🦮', '🐕', '🦺', '🐩', '🐕', '🐈', '🐅', '🐆', '🐎', '🦌', '🦏', '🦛', '🐂', '🐃', '🐄', '🐖', '🐏', '🐑', '🐐', '🐪', '🐫', '🦙', '🦘', '🦥', '🦨', '🦡', '🐘', '🐁', '🐀', '🦔', '🐇', '🐿', '🦎', '🐊', '🐢', '🐍', '🐉', '🦕', '🦖', '🦦', '🦈', '🐬', '🐳', '🐋', '🐟', '🐠', '🐡', '🦐', '🦑', '🐙', '🦞', '🦀', '🐚', '🦆', '🐓', '🦃', '🦅', '🕊', '🦢', '🦜', '🦩', '🦚', '🦉', '🐦', '🐧', '🐥', '🐤', '🐣', '🦇', '🦋', '🐌', '🐛', '🦟', '🦗', '🐜', '🐝', '🐞', '🦂', '🕷', '🕸', '🦠', '🧞', '♀',' ️', '🧞', '♂',' ️', '🗣', '👤', '👥', '👁', '👀', '🦴', '🦷', '👅', '👄', '🧠', '🦾', '🦿', '👣', '🤺', '⛷',
'💌', '💥', '🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤', '⚫', '⚪', '🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '🟫', '⬛', '⬜', '◼', '◻', '◾', '◽', '▪', '▫', '🔶', '🔸', '🔷', '🔹', '🔺', '🔻', '🔲', '🔳', '💭', '🗯', '💬', '🗨', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧'
];

const typingZone = document.getElementById('typing-zone');

function typeText(text) {
    const range = getSelection().getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(text));
    range.collapse(false);
}

function populateEmojiPicker() {
    const picker = document.getElementById('emoji-selector');
    emoji.forEach(emote => {
        const button = document.createElement('button');
        button.insertAdjacentText('afterbegin', emote);
        picker.appendChild(button);
        button.addEventListener('click', function() {
            typeText(button.innerText);
            typingZone.focus();
        });
    });
}

populateEmojiPicker();
typingZone.focus();

document.addEventListener('click', function() {
    document.body.requestFullscreen({ navigationUI: 'hide' }).then(
        () => log('Fullscreened'),
        (err) => log('Not fullscreen', err),
    );
});