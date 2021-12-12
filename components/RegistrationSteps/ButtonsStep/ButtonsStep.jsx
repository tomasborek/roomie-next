import React, {useEffect} from 'react'
//Next
import { useRouter } from 'next/router';
//Contexts
import { useAuth } from '../../../contexts/AuthContext';
import { useLoading } from '../../../contexts/LoadingContext';

const ButtonsStep = ({setType, setStep}) => {
    const {currentUser} = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useLoading();
    useEffect(() => {
        if(currentUser && !loading){
            router.push("/explore/flatmates");
        }
    }, [currentUser])
    return (
        <div className="content-buttons">
            <button onClick={() => {
               setType("offerer");
                setStep(1);
            }} className="acc-btn">Hledám spolubydlícího</button>
            <button onClick={() => {
              setType("flatmate");
               setStep(1);
            }} className="main-btn">Hledám domov</button>
         </div>
    )
}

export default ButtonsStep
