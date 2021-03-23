const game=[
    ['','',''],
    ['','',''],
    ['','',''],
]

let currentUser='O';//Variable del usuario actual

function checkStatus(user){
    if (game[0][0]==user && game[0][1]==user && game[0][2]==user){
        return true;
    }

    if (game[1][0]==user && game[1][1]==user && game[1][2]==user) {
        return true;
    }

    if (game[2][0]==user && game[2][1]==user && game[2][2]==user) {
        return true;
    }

    if (game[0][0]==user && game[1][0]==user && game[2][0]==user) {
        return true;
    }

    if (game[0][1]==user && game[1][1]==user && game[2][1]==user) {
        return true;
    }

    if (game[0][2]==user && game[1][2]==user && game[2][2]==user) {
        return true;
    }

    if (game[2][0]==user && game[1][1]==user && game[0][2]==user){
        return true;
    }

    if (game[0][0]==user && game[1][1]==user && game[2][2]==user){
        return true;
    }
    
    return false;
}

function setWinner(user){
    console.log(`Ganó el Usuario ${user}`);
}

function selectItem(){
    game[this.dataset.row] [this.dataset.column]=currentUser;
    setBoard();
    if (checkStatus(currentUser)) {
        setWinner(currentUser)
    }

    if (currentUser=='O'){
        currentUser='X';
    }else{
        currentUser='O'
    }
//console.log(this.textContent)
}

function render({content,row,column},container){
    const elemento=document.createElement('span');
    elemento.textContent = `${content}`
    elemento.dataset.row=row;
    elemento.dataset.column=column;
    elemento.addEventListener('click',selectItem);
    container.append(elemento);
}

function setBoard(){
    container.innerHTML='';
    game.forEach((row,indexRow)=>{
        row.forEach((column,indexColumn)=>{
            //console.log(column);
            render({
                content: column,
                row: indexRow,
                column:indexColumn,
            }, window.container)
        })
    })
}
setBoard();