import React from 'react'
//next
import  Link  from 'next/link';
import Head from "next/head";
//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


//Components
import RegisterBox from '../components/RegisterBox/RegisterBox';


const Register = () => {
    return (
        <>
        <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <div className="Register">
            <div className="blue-overlay"></div>
            <Link href="/"><i  className=" step-back fas fa-chevron-left"></i></Link>
            <div className="register-content">
                    <RegisterBox />
            </div>
                
            
        </div>
        </>
    )
}

export default Register
