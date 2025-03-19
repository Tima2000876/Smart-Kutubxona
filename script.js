document.addEventListener("DOMContentLoaded", function() {
    let books = JSON.parse(localStorage.getItem("books")) || [];

    // Добавление книги
    const bookForm = document.getElementById("bookForm");
    if (bookForm) {
        bookForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let title = document.getElementById("title").value;
            let author = document.getElementById("author").value;
            
            books.push({ title, author });
            localStorage.setItem("books", JSON.stringify(books));

            alert("Книга добавлена!");
            bookForm.reset();
        });
    }

    // Поиск книги
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        window.searchBook = function() {
            let query = searchInput.value.toLowerCase();
            let results = books.filter(book => book.title.toLowerCase().includes(query));

            let resultsList = document.getElementById("searchResults");
            resultsList.innerHTML = "";

            results.forEach(book => {
                let li = document.createElement("li");
                li.textContent = ${book.title} - ${book.author};
                resultsList.appendChild(li);
            });
        };
    }
});
