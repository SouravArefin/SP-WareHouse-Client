import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import googleLogo from '../../Google__.svg.png'
import githubLogo from '../../GitHub-Logo.wine.svg'
import fbLogo from '../../Facebook_i.svg.png'
import { auth } from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { faEnvelope, faEye, faEyeSlash, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import {  signInWithPopup,FacebookAuthProvider } from "firebase/auth";
const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors },trigger } = useForm();
    // const [email, setEmail] = useState(' ')
    // const [firstName, setFirstName] = useState(' ')
    // const [lastName, setLastName] = useState(' ')
    // const [password, setPassword] = useState(' ')
    // const [confirmPassword, setConfirmPassword] = useState(' ')
    // const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const [conshow, setConShow] = useState(false)
    const [userFB,setUser]=useState({})
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
   
    
   
    console.log(user)
    
    const [signInWithGoogle, user2,loading2, error2] = useSignInWithGoogle(auth)
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [updateProfile, updating, error3] = useUpdateProfile(auth);
   
    console.log(user2,'signup')
   
    
    const navigate = useNavigate()
    const location = useLocation()
    
    const from = location?.state?.from?.pathname || '/'
   
    const handleCreateUser = async e => {
        
      
      
        const fullName = e.firstname + '' + e.lastname;
       console.log(e.firstname +''+e.lastname)
       console.log(e,"eeeeeee");
        if (e.password !=e.confirmPassword) {
            toast.error("password didn't match")
            return;
        }

        toast('Profile create successfully');
        
           await createUserWithEmailAndPassword(e.email, e.password)
        await updateProfile({ displayName: fullName });
   
        
            navigate('/')
    
           
     
    }
   
 // react-firebase-hooks


 
 const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then( () =>{
        navigate(from, {replace: true})
    })
    }
    const facebookProvider = new FacebookAuthProvider();
    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    //console.log(user)
    setUser(user)
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    // const credential = FacebookAuthProvider.credentialFromResult(result);
    // const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.email;
    // // The AuthCredential type that was used.
    // const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
    }
    let errorMsg;
    if ( error1 || error3 || error2) {
    errorMsg = <p className='text-red-700'>Error : {error1?.message} {error3?.message} {error2?.message}</p>;
    }
    let loader;
    if (loading || loading1 || loading2) {
        loader =
            <>
  <button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
    <svg role="status" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
    </svg>
    Loading...
</button>
      </>
    } 
    return (
        <div className='mt-32 mb-10 w-full md:w-1/2 mx-auto custom-shadow bg-[#e8eaec] pt-10 pb-10 px-10 rounded-lg'>
            <h1 className='text-2xl md:text-3xl font-medium text-slate-500 text-center mb-10 sp-style'>Please <span className='pl-5'>SignUp </span> <span className='pl-5'>to </span> <span className='pl-5'>Continue </span></h1>
            <form onSubmit={handleSubmit(handleCreateUser)}>
            {/* <form onSubmit={handleCreateUser}> */}

                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input  type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                      {...register("firstname", {
                        required: 'first name is Required',
                        minLength: {
                            value: 3, message: 'Minimum 3 character required'
                        }
                      })}
                      // register function er fitor condition r message gula object akare likhte hoy
                      onKeyUp={() => {
                        trigger('firstname')
                            }}
                        />
                        <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        <p className='text-red-500 text-sm'>{errors?.firstname?.message}</p>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input  type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                         {...register("lastname", {
                            required: 'last name is Required',
                            minLength: {
                                value: 3, message: 'Minimum 3 character required'
                            }
                         })}
                           // register function er fitor condition r message gula object akare likhte hoy
                      onKeyUp={() => {
                        trigger('lastname')
                            }}
                        
                        />
                        <label htmlFor="floating_last_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        <p className='text-red-500 text-sm'>{errors?.lastname?.message}</p>
                    </div>


                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input  type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                    
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid Email"
                        }
                    })}
                    //Regex use korte hole pattern likhe object create korte hobe
                    onKeyUp={() => {
                        trigger('email')
                    }}
                    
                    />
                    <FontAwesomeIcon className="absolute top-0 left-0 mt-5" icon={faEnvelope} ></FontAwesomeIcon>
                    <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              
                    <p className='text-red-500 text-sm'>{errors?.email?.message}</p>
              
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input  type={show?'password' :"text"} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "Minimum eight characters, at least one letter and one number"
                            }
                        })}
                        onKeyUp={() => {
                            trigger('password')
                        }}
                    />
                    
                    {
                        show ?
                        <>
                                <FontAwesomeIcon className='absolute top-0 right-0 mt-4' onClick={() => setShow(!show)} icon={faEyeSlash} />
                                <FontAwesomeIcon className="absolute top-0 left-0 mt-5" icon={faLockOpen} ></FontAwesomeIcon>
                        </>
                          
                            :
                            <>
                               <FontAwesomeIcon className='absolute top-0 right-0 mt-4' onClick={() => setShow(!show)} icon={faEye} />
                            <FontAwesomeIcon className="absolute top-0 left-0 mt-5" icon={faLock} ></FontAwesomeIcon> 
                            </>
                            
                    
                    }
                    
                    <p className='text-red-500 text-sm'>{errors?.password?.message}</p>

                    <label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>


                <div className="relative z-0 mb-6 w-full group">
                    <input  type={conshow?'password' :"text"} name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required=""
                    
                    {...register('confirmPassword', {
                        required: 'confirm-Password is required',
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: "Minimum eight characters, at least one letter and one number"
                        }
                    })}
                    onKeyUp={() => {
                        trigger('confirmPassword')
                    }}
                   
                    />
                   
                     {
                        conshow ?
                        
                            <>
                                <FontAwesomeIcon className="absolute top-0 left-0 mt-5" icon={faLockOpen} ></FontAwesomeIcon>
                                <FontAwesomeIcon className='absolute top-0 right-0 mt-4' onClick={() => setConShow(!conshow)} icon={faEyeSlash} />
                            </>
                            
                            :
                            <>
                            <FontAwesomeIcon className="absolute top-0 left-0 mt-5" icon={faLock} ></FontAwesomeIcon>
                            <FontAwesomeIcon className='absolute top-0 right-0 mt-4' onClick={() => setConShow(!conshow)} icon={faEye} />
                            </>
                            
                    }
                    <label htmlFor="floating_repeat_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>

                <div className="flex items-center h-5 mb-5">

                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    <div className="ml-3 text-sm ">
      <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
           </div>
   
      
          
                <button  type="submit" className="text-white bg-[#4ea227] hover:bg-[#2a680d] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>
            <p style={{ color: 'red' }}> {error3?.message}</p>
            {errorMsg}
                {

                    loader

                }
            <p className='mt-10 text-xl'>

                Already Have an Account ?<span className='text-blue-800 h-2 w-2  ml-2 p-2 rounded '><Link className='form-link ' to='/signin'>Go To Login</Link></span> 

            </p>
            <div className='or-style'>
                <div style={{ height: '1px',width:'50%',backgroundColor: 'black',marginRight: '20px'}} className='w-50 mt-2'></div>
                <p className='mt-2 px-2'> or </p>
                <div style={{ height: '1px',width:'50%',backgroundColor: 'black',marginLeft: '20px'}} className=' w-50 mt-2'></div>
                </div>
                <div className="text-center sign mt-5">
                <button onClick={handleGoogleSignIn} className='flex sign bg-amber-400 items-center mx-auto google-button rounded '><img className='w-10 h-10 rounded-full mr-3 ' src={googleLogo} alt="" /><p style={{paddingRight:'30px'}}className='ml-5 text-lg text-black'>Signin with Google</p></button>
            </div>
            <div className="text-center ">
                <button onClick={()=> signInWithGithub()}className='flex sign w-100 bg-white mt-5 items-center mx-auto google-button rounded '><img className='w-15 h-10 rounded-full mr-3' src={githubLogo} alt="" /><p className='ml-2  text-lg' style={{paddingRight:'30px'}}>Signin with GitHub</p></button>
            </div>
            <div className="text-center ">
                <button style={{ backgroundColor: '#3B5998' }} onClick={handleFacebookSignIn} className='flex sign w-100 mt-5  items-center mx-auto google-button rounded facebook-sign'><img className='w-10 h-10  mr-3' src={fbLogo} alt="" /><p style={{paddingRight:'30px'}}className='ml-2 text-white text-lg'>Signin with FaceBook</p></button>
            </div>
  <ToastContainer/>
        </div>
    );
};

export default SignUp;