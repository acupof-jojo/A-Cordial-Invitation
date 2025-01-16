import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";

export const Auth = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
          };
        localStorage.setItem("auth", JSON.stringify(authInfo));
        navigate("/home");
    }
    return (
        <div className="login-page">
            <p>Sign in with Google to continue.</p>
            <button className="login-button" onClick={signInWithGoogle}>
                {" "}
                Sign in
            </button>
        </div>
);
};