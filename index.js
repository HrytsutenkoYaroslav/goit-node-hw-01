const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();


const  invokeAction = async ({ action, id, name, email, phone }) =>{
  switch (action) {
    case 'list':
      const allContacts = await books.listContacts();
            return console.log(allContacts);
      
    case 'get':
      const oneContact = await contacts.getById(id);
            return console.log(oneContact);
      
    case 'add':
      const newContact = await books.add({name, email, phone});
            return console.log(newContact);

    case 'remove':
      const deleteContact = await contacts.deleteById(id);
            return console.log(deleteContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);