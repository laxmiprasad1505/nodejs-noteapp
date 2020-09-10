const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')
console.log('this is note.js')

const getnotes =()=>{
    return 'this is getnotes function'
}

const add = (title,body)=>{
    const notes = loadnote()
    const depulicatenotes = notes.find((note)=>note.title === title)
    //const depulicatenote = notes.filter((note)=>note.title === title)
    //const depulicatenote = notes.filter(function(note){
        //return note.title === title
    //})
    debugger
    if (!depulicatenotes){
        notes.push(
            {
                title:title,
                body:body
            }
        )
        savenote(notes)
        console.log(chalk.blueBright('new notes added'))

    }else{
        console.log(chalk.bgRed('the title taken!'))
    }
}
const savenote = (notes)=>{
    const datajson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson)
}

const loadnote = ()=>{
    try{
        const databuffer = fs.readFileSync('notes.json')
        const jsondata = databuffer.toString()
        return JSON.parse(jsondata)

    }catch(error){
        return []

    }
    
}

//removeNote function
const removeNote = (title)=>{
    const remove = loadnote()
    const notestokeep = remove.filter((discard)=>discard.title !== title)
    if (remove.length > notestokeep.length){
        console.log(chalk.bgGreen('removed a note'))
    }else{
        console.log(chalk.bgRed('sorry not removed'))
    }
    savenote(notestokeep)
}
//list notes
const listNotes = () =>{
    const list = loadnote()
    console.log(chalk.bgMagentaBright('Your Notes'))
    const listingNotes = list.forEach((heading)=>{
        console.log(heading.title)
    })
    
}
//read note
const readNote = (title) =>{
    const read = loadnote()
    const search = read.find((head)=>{
        return head.title === title
    })
    if(search){
        console.log(chalk.bgCyanBright(search.title))
        console.log(search.body)
    }else{
        console.log(chalk.bgRed('no such title exist'))
    }

}
module.exports = {
    getnotes : getnotes,
    add : add,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}