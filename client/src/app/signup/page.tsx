"use client";

import SignupPageAxios from "@/components/signup.axios";
import SignupPageRedux from "@/components/signup.redux.axios";


const SignupPage = () => {
 


  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black px-4 gap-4">
      
     <SignupPageAxios/>
     <SignupPageRedux/>

    
      
    </div>
  );
};

export default SignupPage;
