const column1 = document.querySelector('.column1')
const column2 = document.querySelector('.column2')
const column3 = document.querySelector('.column3')
const drop = document.querySelectorAll('div')

column1.ondragover = allDrop;
column2.ondragover = allDrop;
column3.ondragover = allDrop;

function allDrop (e) {
    e.preventDefault()
}

drop.forEach(e => {
    e.ondragstart = drag
});

function drag(e) {
    e.dataTransfer.setData('id', e.target.id)
}

column1.ondrop = dropp
column2.ondrop = dropp
column3.ondrop = dropp

function dropp(e) {
    let itemId = e.dataTransfer.getData('id')
    e.target.closest('section').append(document.getElementById(itemId))

}