const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
// const getNotes = require('./notes.js');


//Customize yargs versions
// yargs.version('1.1.0');
 
//Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            description:'Note detail',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)

    }
});
//Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
});
//Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title);
    }
})

//Create List Command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes();
    }
})
yargs.parse();