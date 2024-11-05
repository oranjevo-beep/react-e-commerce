import React from 'react';
import './SignIn.scss';
import {
  signInWithGoogle,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(response);
  };
  return (
    <div className="sign-in">
      <h1>SignIn</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam
        ratione reprehenderit reiciendis sequi nihil eaque distinctio magnam?
        Quos ducimus dignissimos itaque? Et, dolorum? Nobis porro quo distinctio
        inventore quod.
      </p>
      <button className="sign-in-button" onClick={logGoogleUser}>
        Sign In With Google
      </button>
    </div>
  );
}
