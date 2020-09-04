require('./user')

// const  users = [
//     {name: "Сережа", age: 23, rule: "admin" },
//     {name: "Петя", age: 28, rule: "user" },
//     {name: "Света", age: 33, rule: 'admin' },
//     {name: "Илья", age: 43, rule: 'admin'},
//     {name: "Женя", age: 21, rule: 'user'},
//     {name: "Вова", age: 15, rule: 'user'},
//     {name: "Денис", age: 72, rule: 'user'},
//     {name: "Даша", age: 20, rule: 'user'}, 
//     {name: "Соня", age: 7, rule: 'user'},
//     {name: "Люда", age: 35, rule: "user"}

// ]
//  function User(user)  {
//    this.name= user.name; 
//    this.age= user.age;
//    this.rule = user.rule; 
//    this.perentSelector = 'body';
//    this.showUser = ()=>{
//      console.log(`${this.name} ${this.age} ${this.rule} `)
//    }   
// this.renderUser = () =>{
//   const userElement = document.createElement('p');
//  userElement.innerText = `${this.name} ${this.age} ${this.rule} `;
//  document.querySelector(this.perentSelector).appendChild(userElement)
// }

//  }
//  users.map(user=> new User(user)) 
//  .map(user => {
//    user.showUser();
//    user.renderUser() ;
//  }
//  )


// console.log( "длина массива", users.length);

// const age=[]

// for (let i =0; i< users.length; i++){
//   if ( users[i].age >= 22){
//     age.push(users[i])
//   }
// }
// console.log(age);

// const adult = users.filter(users =>  users.age >70)

// console.log("старший", adult);


// const child = users.filter(users => users.age < 10)
 
// console.log("младший", child);

// const howUsers = users.filter(users => users.rule === 'user')
// console.log( 'только пользователей',howUsers) // ? выводит только одного


// const howAdmin = users.filter(users => users.rule === 'admin')
// console.log( 'только админов',howAdmin) // почему один?


// let amount = 0
// for ( let i=0; i<users.length; i++){
//   amount+=users[i].rule==='admin'
// }
// console.log( 'сколько админов', amount)



// let aMount = users.reduce((total, users) => {
//   console.log(total,users)

//   return total +(users.rule==='user')
// }, 0)
// console.log( 'сколько пользователей', aMount) 