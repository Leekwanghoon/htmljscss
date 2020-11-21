// null checking

function print(person) {
    if (person === undefined || person === null )  {
        return;
    }
    console.log(person.name);
}

const person = {
    name: 'John'
};

print(person);

// Falthy한 값들 (아래) 나머지는 Truthy한 값
console.log(!undefined); //false
console.log(!null);//false
console.log(!0);//false
console.log(!'');//false
console.log(!NaN);//false