class Student {
	constructor(name, surname, school) {
		this.name = name;
		this.surname = surname;
		this.school = school;
	}

    get fullname(){
        return this.name + " " + this.surname;
    }
	
}


const matthew = new Student('matthew', 'Park', '상명대학교');
console.log(matthew.fullname);
