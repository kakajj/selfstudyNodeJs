const fs = require('fs');
const chalk = require('chalk');
const getNotes = function () {
    return "Your notes....";
}

const addNote = function (title, body) {
    const noteArr = loadNotes();
    const duplicateNotes  = noteArr.filter(function (note) {
        return note.title.toLowerCase() === title.toLowerCase();
    })
    if(duplicateNotes.length===0){
    noteArr.push({
        title: title,
        body: body
    })
    saveNotes(noteArr);
    console.log(chalk.green.inverse('new note add!'));
    }else{
        console.log(chalk.red.inverse('Note title taken..'));
    }
}
const removeNote = function (title) {
     const noteArr = loadNotes();
     let noteToKeep =  noteArr.filter(n => { 
         return n.title.toLowerCase() !== title.toLowerCase()}
    );
    saveNotes(noteToKeep);
    if(noteArr.length > noteToKeep.length){
        console.log(chalk.green.inverse('remove '+title+' succesful..'));
    }else{
        console.log(chalk.red.inverse('remove failed.....'));
    }
}

// Reusable-Method to load and saved
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
}