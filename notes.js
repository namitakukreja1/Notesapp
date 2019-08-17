const fs = require('fs')
const chalk = require('chalk')
const show = function() {
    return 'Your notes'
}

const addNote = function(title,body) {
    const notes = loadNotes()
    // const duplicate = notes.filter(function(note){
    //     return note.title === title
    // })
    const dupl = notes.find((note) =>note.title===title)

    

    if(!dupl)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    }
    else {
        console.log('Title already taken')
    }

}

const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , dataJson)
}
const loadNotes = function(){
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
    }
    catch (e) {
        return[]
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length>notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    }
    
    else {
        console.log(chalk.red.inverse('No such note found'))
    }
}

const listNote = () => {

    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log('Note not found')
    }
}
module.exports = {
    show:show,
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
}