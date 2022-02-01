import React, {useRef, useState} from 'react';
//next
import { useRouter } from 'next/router';

//context
import {useFunctions} from "../../contexts/FunctionsContext";
import { useLoading } from '../../contexts/LoadingContext';
import {useSnackBar} from "../../contexts/SnackBarContext";

const ResetPassword = () => {
    const router = useRouter();
    const {id} = router.query;
    const {callable} = useFunctions();
    const [loading, setLoading] = useLoading();
    const {snackBar} = useSnackBar();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const resetPassword = callable("userUpdates-resetPassword");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const password = passwordRef.current.value;
        const confirmPassword = passwordConfirmRef.current.value;
        if(password != confirmPassword){
            setError("Hesla se neshodují");
            setLoading(false);
            return;
        }
        resetPassword(JSON.stringify({
            id,
            password
        })).then((response) => {
            setLoading(false);
            snackBar("Vaše heslo bylo změněno", "success");
            setTimeout(() => {
                router.push("/login");
            }, 1000);
        }).catch((error) => {
            setLoading(false);
            setError("Něco se nepovedlo");
        })

    }

  return (
      <div className='reset-password'>
          {error && <h3 className='reset-password-error'>{error}</h3>}
        <form>
            <div>
                <p>Nové heslo</p>
                <input ref={passwordRef} type="password" placeholder='Nové heslo...' />
            </div>
            <div>
                <p>Heslo znovu</p>
                <input ref={passwordConfirmRef} type="password" placeholder='Heslo znovu...' />
            </div>
            <button onClick={(e) => handleSubmit(e)} className='btn'>Změnit heslo</button>
        </form>
      </div>
  );
};

export default ResetPassword;
