import { useSelector } from "react-redux";
import "./App.css";
// import ModalMain from "./components/ModalMain";
// import LoginModal from "./components/LoginModal";
// import SignUpModal from "./components/SignUpModal";
import Index from "./Pages/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  // const { isOpen } = useSelector((store) => store.modal);
  // const { isLoginOpen, isSignUpOpen } = useSelector((store) => store.login);
  return (
    <div className="App">
      {/* {isLoginOpen && <LoginModal />}
      {isSignUpOpen && <SignUpModal />}
      {isOpen && <ModalMain />} */}
      <Index />
    </div>
  );
}

export default App;
