import { Routes, Route } from "react-router-dom";
import { BookList } from "./BookList";
import { Book } from "./Book";
import { NewBook } from "./NewBook";
import { BookLayout } from "./BookLayout";

export function BookRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BookLayout></BookLayout>}>
          <Route index element={<BookList></BookList>}></Route>
          <Route path=":id" element={<Book></Book>}></Route>
          <Route path="new" element={<NewBook></NewBook>}></Route>
        </Route>
      </Routes>
    </>
  );
}
