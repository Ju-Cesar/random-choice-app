const tagsContainer = document.querySelector('.tags');
const textArea = document.querySelector('textarea');

textArea.addEventListener('keyup',(e)=> {
    createTags(e.target.value);
    if(e.key === 'Enter') {
        setTimeout(()=> {
            e.target.value = '';
        },100);
        randomSelect()
    }
    
})

function createTags(input) {
    const choices = input.split(',')
                    .filter(tag => tag.trim() !== '')
                    .map(tag => tag.trim());
    tagsContainer.textContent = '';
    choices.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.textContent = tag;
        tagsContainer.append(tagEl);
    });
}

function randomSelect() {
    const times = 30;
    const interval = setInterval(()=> {
        const randomTag = pickRandomTag();
        highlight(randomTag);
        setTimeout(()=> {
            unhighlight(randomTag)
        },200)
    },200);

    setTimeout(()=> {
        clearInterval(interval);
        setTimeout(() => {
            const tag = pickRandomTag();
            highlight(tag);
        }, 200);
    },times * 200);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
    tag.classList.add('highlight');
}

function unhighlight(tag) {
    tag.classList.remove('highlight');
}