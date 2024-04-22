import CartHeader from "./CartComponent/Cart/CartHeader";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CommentComponent from "./CartComponent/Comments/CommentComponent";

// import CommentComponent from "./CartComponent/Comments/CommentComponent";

// import Comment from "./CartComponent/Comments/Comment";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CartHeader />} />
          <Route index element={<CartHeader />} />
          <Route path="/" element={<CommentComponent />} />
        </Routes>
      </BrowserRouter>

      {/* <CommentComponent></CommentComponent> */}
    </>
  );
}

export default App;
