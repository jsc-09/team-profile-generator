const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
    createCard(){
        return `        
        <div class="w-1/4 rounded overflow-hidden shadow-lg m-10">
        <div class="px-6 py-4 bg-teal-50">
            <h2>${this.name}</h2>
            <h3><span class="fa-solid fa-robot pr-3"></span>Engineer</h3>
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
                        <td><a href="mailto: ${this.email}">${this.email}</a></td>
                    </tr>
                    <tr>
                        <td class="pr-3 font-semibold">Github</td>
                        <td><a href="http://github.com/${this.github}">${this.github}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
}
}

module.exports = Engineer