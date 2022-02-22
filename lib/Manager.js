const Employee = require('./Employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    createCard(){
        return `        
        <div class="w-1/4 rounded overflow-hidden shadow-lg m-10">
        <div class="px-6 py-4 bg-teal-50">
            <h2>${this.name}</h2>
            <h3><span class="fa-solid fa-user pr-3"></span>Manager</h3>
        </div>
        <div class="px-6 py-4 text-lg">
            <table class="table-auto">
                <tbody>
                    <tr>
                        <td class="pr-3 font-semibold">ID Number</td>
                        <td>${this.id}</td>
                    </tr>
                    <tr>
                        <td class="pr-3 font-semibold">Email</td>
                        <td><a class="text-teal-600 underline" href="mailto: ${this.email}">${this.email}</a></td>
                    </tr>
                    <tr>
                        <td class="pr-3 font-semibold">Office Number</td>
                        <td>${this.officeNumber}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
    }
}

module.exports = Manager