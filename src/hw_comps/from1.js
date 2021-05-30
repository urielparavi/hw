import React from 'react';
import {useForm} from 'react-hook-form';




function Form1(props) {
  let {register, handleSubmit , getValues, formState:{errors}} = useForm()

  const onFormSub = (data) => {
    console.log(data)
    //In real project we send the data to api in post /put /delete request
  }

  let nameRef = register("name",{required:true,minLength:2})
  let emailRef = register("email",{required:true,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i});
  let pass1Ref = register("password1" , {required:true,minLength:3});
  // validate -> מפעיל פונקציה שמחזיר ערך אמת או שקר
  // getValues() -> יכולת חדשה שמאפשרת לשלוף מידע מאינפוט אחר שקיים בטופס
  let pass2Ref = register("password2", 
  {required:true,validate:(value) => value === getValues().password1}
  )

  return (
    <div className="container">
      <h1>Form order:</h1>
      <form onSubmit={handleSubmit(onFormSub)}  className="col-lg-6 mx-auto shadow p-3 rounded mt-3">
        <div>
          <label>Email:</label>
          <input {...emailRef} type="text" className="form-control" />
          {errors.email && <span className="text-danger">Enter valid email</span>}
        </div>
        <div> 
          <label>Password:</label>
          <input {...pass1Ref} type="text" className="form-control" />
          {errors.password1 && <span className="text-danger">Enter valid password (min length 3 charts)</span>}
        </div>
        <div>
          <label>Write Password again:</label>
          <input {...pass2Ref} type="text" className="form-control" />
          {errors.password2 && <span className="text-danger">Password not match</span>}
        </div>
        <div>
          <label>Full name:</label>
          <input {...nameRef} type="text" className="form-control" />
          {errors.name && <span className="text-danger">Enter valid name (min length charts 2 letters)</span>}
        </div>
        <button className="btn btn-info mt-3">Sign up</button>
      </form>
    </div>
  )
}

export default Form1