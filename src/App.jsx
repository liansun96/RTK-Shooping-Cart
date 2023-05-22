import React from "react";
import { Route, Routes } from "react-router-dom";
import Porducts from "./components/Porducts";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Search from "./components/Search";
import RouteGuard from "./components/RouteGuard";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Porducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/search"
          element={
            <RouteGuard>
              <Search />
            </RouteGuard>
          }
        />
      </Routes>
    </>
  );
};

export default App;
