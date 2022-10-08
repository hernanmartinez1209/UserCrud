import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
const defaultValues = {
    email:'',
    password:'',
    first_name:'',
    last_name:'',
    birthday:''
  }
const FormUsers = ({createUser,upgradeInfoUser,upgradeUserById,setUpgradeInfoUser}) => {

useEffect(() => {
  if (upgradeInfoUser) {
      reset(upgradeInfoUser)
    }
}, [upgradeInfoUser])

    console.log(upgradeInfoUser);
 const {handleSubmit ,reset ,register} =  useForm()
 
 const submit = data =>{
     if (upgradeInfoUser) {
         //Updaqte
         upgradeUserById(upgradeInfoUser.id ,data)
         setUpgradeInfoUser()

        }else{
            createUser(data)
            // create
        }
        reset(defaultValues)
    }
    return (
    <form className='Form-User' onSubmit={ handleSubmit(submit)}>
        <h1>{upgradeInfoUser? 'Upgrade' :'Create'}</h1>
<div className='box-input-user'>
    <label htmlFor="email">Email User</label>
      <input className='input-user1 input_hov'  type="email" id="email" {...register('email')} />
</div>
<div className='box-input-user' >
    <label htmlFor="password">Password</label>
      <input className='input-user2 input_hov'  type="password" id="password"  {...register('password')}/>
</div>
<div className='box-input-user' >
    <label htmlFor="first_name">First Name</label>
     <input  className='input-user3 input_hov' type="text" id="first_name"  {...register('first_name')}/>
</div>
<div className='box-input-user' >
    <label htmlFor="last_name">Last Name</label>
      <input className='input-user4 input_hov'  type="text" id="last_name" {...register('last_name')}/>
</div>
<div className='box-input-user' >
    <label htmlFor="birthday">BirthDay</label>
     <input  className='input-userb input_hov' type="date" id="birthday"  {...register('birthday')}/>
</div>
<button className='btn__form'>{upgradeInfoUser? 'Upgrade' :'Create'}</button>
</form>
    // <form onSubmit={ handleSubmit(submit)}>
    //     <div>
    //     <label htmlFor="email">email</label>
    //     <input type="email" id='email' {...register('email')} />
    //     </div>
    //     <div>
    //     <label htmlFor="password">password</label>
    //     <input type="password" id='password' {...register('password')} />
    //     </div>
    //     <div>
    //     <label htmlFor="firs_name">firs_name</label>
    //     <input type="text" id='firs_name' {...register('firs_name')} />
    //     </div>
    //     <div>
    //     <label htmlFor="last_name">last_name</label>
    //     <input type="text" id='last_namel' {...register('last_namel')} />
    //     </div>
    //     <div>
    //     <label htmlFor="birthday">birthday</label>
    //     <input type="date" id='birthday' {...register('birthday')} />
    //     </div>
       
    //     <button>Create</button>
             
    // </form>
  )
}

export default FormUsers