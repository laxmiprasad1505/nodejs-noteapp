
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./note.js')
const { demandOption } = require('yargs')
// const getnotess = require('./getnotes.js')
// const msg = getnotess()
// console.log(chalk.bgGreen(msg))
// const name='andrew'
// console.log(chalk.inverse.bgGrey(name))
// console.log(add(3,4))
// console.log(validator.isEmail('abc@gmail.com'))
// console.log(validator.isURL('http://abc.com'))

//input from user by commanline
//process.argv is used which has list of three values
// const command = process.argv[2]
// console.log(process.argv)

//to create methods for the note app
//methods add , remove , list , read
//add
yargs.command({
    command:'add',
    describe:'to add a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        //console.log('adding notes')
        notes.add(argv.title,argv.body)
    }
})
//create remove
yargs.command({
    command:'remove',
    describe:'to remove note',
    builder:{
        title:{
            describe:'to remove',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//show list
yargs.command({
    command:'list',
    describe:'to list all the notes',
    handler(){
        notes.listNotes()
    }
})
//create read
yargs.command({
    command:'read',
    describe:'to read the notes',
    builder:{
        title:{
            describe:'to read ',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.version('5.1.0')

yargs.parse()
