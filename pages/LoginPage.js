class LoginPage{
    constructor(page){
        this.page=page
        this.username="#username"
        this.password="#password"
        this.submit="#submit"
    }


    async enterUsername(user){
        await this.page.fill(this.username,user)
    }
     async enterPassword(pwd){
        await this.page.fill(this.password,pwd)
    }
     async enterSubmit(){
        await this.page.click(this.submit)
    }

    async login(user , pwd){

        await   this.enterUsername(user)
        await this.enterPassword(pwd)
        await this.enterSubmit()
    }
}

module.exports = LoginPage