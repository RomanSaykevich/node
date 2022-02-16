// const path = require('path')
//
// const fs = require('fs')

// fs.mkdir(path.join(__dirname, 'main'),(err)=>{
//     if(err){
//         console.log(err)
//         throw err
//     }
// });

// fs.mkdir(path.join(__dirname, 'main', 'online'),(err)=>{
//     if(err){
//         console.log(err)
//         throw err
//     }
// });

// fs.mkdir(path.join(__dirname, 'main', 'inPerson'),(err)=>{
//     if(err){
//         console.log(err)
//         throw err
//     }
// });

// const onlineUsers = [{
//     name: "Din",
//     age: 40,
//     city: "Priston"
// }];

// const inPersonUsers = [{
//     name: "Sem",
//     age: 35,
//     city: "Las_Vegas"
// }];
//
// for ( const user of onlineUsers) {
//     fs.writeFile(path.join(__dirname, 'main', 'online', 'userOnline.txt'), `\nName:${user.name}\nAge:${user.age}\nCiti:${user.city}`, (err) => {
//         if (err) {
//             console.log(err)
//             throw err
//         }
//     })
// };

// for (const person of inPersonUsers) {
//     fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'userInPerson.txt'), `\nName:${person.name}\nAge:${person.age}\nCiti:${person.city}`, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// };

// fs.readFile(path.join(__dirname, 'main', 'online', 'userOnline.txt'), 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'userInPerson.txt'), `${data}`, {flag: 'w'}, (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// });

// fs.readFile(path.join(__dirname, 'main', 'inPerson', 'userInPerson.txt'), 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     fs.appendFile(path.join(__dirname, 'main', 'online', 'userOnline.txt'), `${data}`, {flag: 'w'}, (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// });
