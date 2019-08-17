// const fs = require('fs')
// fs.writeFileSync('notes.txt','Thois is')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
// console.log(process.argv)
// console.log(yargs.argv)
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOptions: true,
            type: 'string'
        },
        body: {
            describe: 'Notes Body',
            demandOptions: true,
            type: 'string'
        },
    },
    handler: function(argv){
        // console.log('Title: '+argv.title)
        // console.log('Notes : ' +argv.body)
        notes.addNote(argv.title, argv.body)
    }

})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOptions: 'true',
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }

})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function(){
        notes.listNote()
    }

})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title:{
            describe:'Note title',
            demandOptions:'true'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }

})
yargs.parse()
// console.log(yargs.argv)