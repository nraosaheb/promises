// const posts = [];

// function getPosts(){
//     setTimeout(()=>{
//      let output = '';
//      posts.forEach((post,index)=>{
//         output += `<li>${post.title}</li>`;
//      });
//      document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             const error = false;

//             if(!error){
//                 resolve();
//             }else{
//                 reject('Error');
//             }
//         }, 2000);
//     });
// }

// function updateLastUesrActivityTime(){

// }

// createPost({title:'Post one', body:'This is Post one'})
// .then(getPosts)
// .catch(err => console.log(err));


// console.log('person1: shows tickets');
// console.log('person2: shows tickets');

// const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve('ticket');
//     },3000)
// })


// const getPopcorn = promiseWifeBringingTicks.then((t)=>{
//     console.log('wife: i have the tics');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
// });

// const getButter = getPopcorn.then((t)=>{
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject)=> resolve(`${t} butter`));
// });

// getButter.then((t)=> console.log(t));

// console.log('person4: shows tickets');
// console.log('person5: shows tickets');

