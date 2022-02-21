const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
//card HTML
    createCard(){
        return `        
        <div class="w-1/4 rounded overflow-hidden shadow-lg m-10">
        <div class="px-6 py-4 bg-teal-50">
            <h2>${this.name}</h2>
            <h3><span class="fa-solid fa-user-graduate pr-3"></span>Intern</h3>
        </div>
        <div class="px-6 py-4 text-lg">
            <table class="table-auto">
                <tbody>
                    <tr>
                        <td class="pr-3">ID Number</td>
                        <td>${this.id}</td>
                    </tr>
                    <tr>
                        <td class="pr-3">Email</td>
                        <td><a href="mailto: ${this.email}>${this.email}</a></td>
                    </tr>
                    <tr>
                        <td class="pr-3">College</td>
                        <td>${this.school}.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
    }
}




module.exports = Intern