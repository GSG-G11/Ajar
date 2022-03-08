const userName=document.querySelector('.username')
const email=document.querySelector('.email')
const password=document.querySelector('.password')
const signBtn=document.querySelector('signin')


signBtn.addEventListener('click',()=>{

let inputData ={username:userName.value, email:email.value, password:password.value } 
console.log(inputData)
fetch("/signin",{
    method:"POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
  },
    body:JSON.stringify(inputData)


})
}
)
