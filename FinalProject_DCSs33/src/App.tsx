import "./style.css";
import Authentication from "./authentication";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase.js";
import { loginUser, setLoading } from "./useSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <div className="bg-[black] text-[white]">
      {isLoading ? (
        <div className="fixed z-[9999] w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)] left-0 top-0">
          <div className="w-[120px] h-[120px] rounded-[50%] animate-[spin_2s_linear_infinite] border-t-[16] border-t-[#3498db] border-[16px] border-solid border-[#f3f3f3]"></div>
        </div>
      ) : (
        <>{user ? <div>Hello</div> : <Authentication />}</>
      )}
    </div>
  );
}

export default App;
