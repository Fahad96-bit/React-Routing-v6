import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { BookList } from "./Pages/BookList";
import { Book } from "./Pages/Book";
import { NewBook } from "./Pages/NewBook";
import { NotFound } from "./Pages/NotFound";
import { BookLayout } from "./Pages/BookLayout";
import { BookRoutes } from "./Pages/BookRoutes";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/*" element={<BookRoutes></BookRoutes>} />

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
