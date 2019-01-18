const Book = require('./book')
const Author = require('./author')
const Client = require('./client')
const Library = require('./library')

test('create author', () => {
    author = new Author('Jan', 'Brzechwa')
    expect(author).toEqual({name: 'Jan', surrname: 'Brzechwa'})
})

test('create book', () => {
    author = new Author('Jan', 'Brzechwa')
    book = new Book(1, 'Akademia Pana Kleksa', author)
    expect(book).toEqual({id: 1, title: 'Akademia Pana Kleksa', author: author, loanBy: ''})
})

test('create client', () => {
    client = new Client(1, 'Jan', 'Kowalski')
    expect(client).toEqual({id: 1, name: 'Jan', surrname: 'Kowalski'})
})

describe('book loan testing', () => {
    beforeEach( () => {
        author = new Author('Jan', 'Brzechwa')
        client1 = new Client(1, 'Jan', 'Kowalski')
        client2 = new Client(2, 'Grzegorz', 'Brzeczyszczykiewicz')
        book1 = new Book(1, 'Akademia Pana Kleksa', author)
        book2 = new Book(2, 'Akademia Pana Kleksa', author)
    })

    test('loan book', () => {
        book1.loan(client1.id)
        expect(book1.isLoanBy()).toBe(client1.id)
    })

    test('loan_already_loaned_book', () => {
        book1.loan(client1.id)
        book1.loan(client2.id)
        expect(book1.isLoanBy()).not.toBe(client2.id)
    })
})

