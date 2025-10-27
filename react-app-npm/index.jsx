function Book({ book }) {
  return (
    <div className="card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>Price: ₹{book.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

const books = [
  {
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
    title: "Mathematics Essentials",
    price: 785,
  },
  {
    image: "https://m.media-amazon.com/images/I/61GmK-tpSxL._UF1000,1000_QL80_.jpg",
    title: "Chemistry Concepts",
    price: 375,
  },
  {
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400",
    title: "Physics Fundamentals",
    price: 465,
  },
];

function App() {
  return (
    <div className="book-list">
      {books.map((b, i) => (
        <Book key={i} book={b} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);