document.getElementById("book-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    const book = { title, author };
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));

    loadBooks();
});

function loadBooks() {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    books.forEach(book => {
        const li = document.createElement("li");
        li.textContent = ${book.title} - ${book.author};
        bookList.appendChild(li);
    });
}

loadBooks();
