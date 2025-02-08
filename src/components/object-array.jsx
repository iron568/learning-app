export function InfoObjArray() {
  let library = [
    {
      section: "Fiction",
      books: [
        {
          title: "1984",
          author: "George Orwell",
          availableCopies: 4,
          genres: ["Dystopian", "Political Fiction"],
          location: { shelf: "A1", row: 2 },
        },
        {
          title: "Brave New World",
          author: "Aldous Huxley",
          availableCopies: 2,
          genres: ["Science Fiction", "Dystopian"],
          location: { shelf: "A1", row: 3 },
        },
        {
          title: "asdf",
          author: "Aeeew",
          availableCopies: 2,
          genres: ["Science Fiction", "Dystopian"],
          location: { shelf: "A1", row: 3 },
        },
      ],
    },
    {
      section: "Education",
      books: [
        {
          title: "Sapiens: A Brief History of Humankind",
          author: "Yuval Noah Harari",
          availableCopies: 5,
          genres: ["History", "Anthropology"],
          location: { shelf: "B2", row: 1 },
        },
      ],
    },
  ];

  return (
    <div className="library-contain">
      {library.map(function (libraryItem) {
        return (
          <div key={libraryItem} className="library-item">
            Section {libraryItem.section}
            {libraryItem.books.map(function (bookItem, bookIndex) {
              return (
                <div className="book-item" key={bookItem}>
                  Book Details {bookIndex + 1}
                  <div>Authro :{bookItem.author}</div>
                  <div>Available Copies:{bookItem.availableCopies}</div>
                  <div>Genre 1:{bookItem.genres[0]}</div>
                  <div>Genre 2:{bookItem.genres[1]}</div>
                  <div>Shelf Location :{bookItem.location.shelf}</div>
                  <div>Row Location:{bookItem.location.row}</div>
                </div>
              );
            })}
            <hr />
          </div>
        );
      })}
    </div>
  );
}
