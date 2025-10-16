import './style.css';
function Book({book}){
    return (
        <div className="card">
            <img src={book.image} height="200" width="200" alt="book image"/>
            <h3>Title:(book.title)</h3>
            <h4>price:₹(book.price)</h4>
            <button>Add to cart</button>
        </div>
    )
}

const books=[{image:"",title:"math",price:785},
    {image:"",title:"chemistry",price:375},
    {image:"",title:"physics",price:465}
];
function App(){
    return(
        <div>
            {books.map((b,i)=>(
                <Book key={i} book={b}/>
            ))}
        </div>
    )
}