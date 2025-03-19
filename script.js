document.addEventListener("DOMContentLoaded", function () {
    const bookForm = document.getElementById("bookForm");

    if (!bookForm) {
        console.error("Форма #bookForm не найдена!");
        return;
    }

    bookForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        const title = document.getElementById("title").value.trim();
        const author = document.getElementById("author").value.trim();

        if (title === "" || author === "") {
            alert("Заполните все поля!");
            return;
        }

        let books = JSON.parse(localStorage.getItem("books")) || [];
        books.push({ title, author });
        localStorage.setItem("books", JSON.stringify(books));

        alert("Книга добавлена!");
        bookForm.reset();
    });
});
