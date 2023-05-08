const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: "Agne",
    age: 33,
    hobbies: ["Dancing", "Making myself laugh"],
    role: [2, 'author'] // tuple - restricted number and types of array values
};

// person.role.push('admin'); PUSH STILL WORKS!!!!!!!
// person.role[1] = 10; ERROR (as supposed to)
// person.role = [0, 'admin', 'user']; ERROR (as supposed to)

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); ERROR!!!
}