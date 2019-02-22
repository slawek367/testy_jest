class Book {
    constructor(id, title, author) {
        this.id = id
        this.title = title
        this.author = author
        this.loanBy = ''
    }

    loan(id) {
        if (!this.loanBy){
            this.loanBy = id
        }
    }

    isLoanBy() {
        return this.loanBy
    }
}

module.exports = Book
