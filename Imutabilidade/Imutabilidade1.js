const user = {
    name: 'Jefferson',
    lastName:'Brito de Oliveira'
};

function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const UserWithFullName = getUserWithFullName(user);

console.log(UserWithFullName);