const add = () => {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    addToLocal(name, id);
}
const addToLocal = (name, id) => {
    const persons1 = {name, id};
    const previousLocal = JSON.parse(localStorage.getItem('person')) ;
    const arrayOfPerson = [];
    if(previousLocal){
        console.log(persons1);
        const idCheck = previousLocal.find(person => person.id == id);
        console.log(idCheck);
        if(idCheck){
            alert('This is added earlier');
        }
        else{
            arrayOfPerson.push(...previousLocal, persons1);
            localStorage.setItem('person', JSON.stringify(arrayOfPerson))
        }
    }
    else{
        arrayOfPerson.push(persons1);
        localStorage.setItem('person', JSON.stringify(arrayOfPerson));
    }
    const show = document.getElementById('show');
    arrayOfPerson.forEach(person => {
        show.innerHTML += 
        `Name : <span>${person.name}</span><br>
         Id : <span>${person.id}</span><br>
        `
    })
}

