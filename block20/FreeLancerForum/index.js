const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const div = document.getElementById("root");
    const heading = document.createElement("h1");
    heading.innerHTML = "FREELANCERS";
    div.appendChild(heading);
    heading.style.color = "white";
    heading.style.backgroundColor = 'blue';
    heading.style.border = '10px solid black' ;
    
    
    const ul = document.createElement('ul');

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = `Name: ${user.name}, age: ${user.age}, Occupation: ${user.occupation}`;
        ul.appendChild(li);
    });
    
    div.appendChild(ul); 
    
}

//call the main function
main();