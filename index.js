import * as contactsService from "./contacts.js";
import yargs from "yargs";


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const allContacts = await contactsService.listContacts();
        console.log(allContacts);
        break;

    case 'get':
       const oneContact = await contactsService.getContactById(id);
        console.log(oneContact);
      break;

    case 'add':
          const newContact = await contactsService.addContact(name, email, phone);
          console.log(newContact);
      break;

    case 'remove':
      const listWithoutRemoved = await contactsService.removeContact(id);
      console.log(listWithoutRemoved);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
const {argv} = yargs (process.argv. slice (2)) ;
 invokeAction(argv);
