let dbuser =[
    {
        username : "soo",
        password: "password",
        name: "Soo Yew Guan",
        email: "soo@utem.edu.my "
    },

    {
        username: "ali",
        password: "123456",
        name: "ali",
        email: "ali@utem.edu.my "
    },

    {
        username: "wee",
        password: "1234567",
        name: "wee",
        email: "wee@utem.edu.my "
    },

    {
        username: "hee",
        password: "hee123",
        name: "hee",
        email: "hee@utem.edu.my "
    },

    {
        username: "utah",
        password: "gdyyrgg",
        name: "utah",
        email: "uuuu@utem.edu.my "
    },
]

function login(username,password){
    console.log("someone try to login with",username,password)
    let matched = dbuser.find(Element=>
        Element.username == username
    )
    if(matched){
        if(matched.password == password ) {
            return matched
        } else {
            return "Password not matched"
        }
    } else {
        return "username not found"
    }
}

//try to login
console.log(login("soo","password"))
console.log( login("soo","123456"))