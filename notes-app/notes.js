const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => "Your notes....";

function addNote(title, body) {
    const noteArr = loadNotes();
    // const duplicateNotes = noteArr.filter((note) => note.title.toLowerCase() === title.toLowerCase());
    const duplicateNote = noteArr.find((note) => note.title.toLowerCase() === title.toLowerCase())
    
    if (!duplicateNote){
        noteArr.push({
            title: title,
            body: body
        });
        saveNotes(noteArr);
        console.log(chalk.green.inverse('new note add!'));
    } else {
        console.log(chalk.red.inverse('Note title taken..'));
    }
};

function removeNote(title) {
    const noteArr = loadNotes();
    let noteToKeep = noteArr.filter(n => n.title.toLowerCase() !== title.toLowerCase());
    saveNotes(noteToKeep);
    if (noteArr.length > noteToKeep.length) {
        console.log(chalk.green.inverse('remove ' + title + ' succesful..'));
    } else {
        console.log(chalk.red.inverse('remove failed.....'));
    }
}

// Reusable-Method to load and saved
function saveNotes(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

function listNotes() {
    const Arr = loadNotes();
    if(Arr.length===0){
        console.log(chalk.red("No note found....")); 
    }else{
        console.log(chalk.blue.inverse("Here is it!!"));
        Arr.forEach((e,i) => {
            i++;
            console.log(chalk.green.inverse(i + ': '+e.title +' '+ e.body));
        }); 
    }
}

function readNotes(params) {
    const Arr = loadNotes();
    const sameNote = Arr.find((note) => note.title.toLowerCase() === params.toLowerCase());
    if(sameNote){
        console.log(chalk.green.inverse('description: '+sameNote.body));
    }else{
        console.log(chalk.redBright.inverse('No note found :( pls type exist note\'s name '));
    };
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes:readNotes
}