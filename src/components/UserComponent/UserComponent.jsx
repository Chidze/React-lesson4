import styles from './UserComponent.module.css'
import { useEffect } from "react";
import { useForm } from 'react-hook-form'
import { AuthService } from '../../services/apiServices';
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";


const UserComponent = () => {
    const schema = Joi.object({
        name: Joi.string().required().min(4).messages( {
            "string.empty":"Це поле обов'язкове для заповнення",
            "string.min":"Мінімальна довжина 4 символи"
            }),
        email: Joi.string().required().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).messages( {
            "string.empty":"Це поле обов'язкове для заповнення",
            "string.pattern.base": "Не вірно введена електронна пошта"
            
        }),
        password: Joi.string().required().min(6).messages( {
            "string.empty":"Це поле обов'язкове для заповнення",
            "string.min":"Мінімальна довжина 6 символи"
        }),
      });


const { 
    handleSubmit,
    register,
    formState: {errors}
} = useForm({
    resolver: joiResolver(schema)
});

const onSubmit = (data) => {
  AuthService.handleUser(data)
}

useEffect(()=>{
})


    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.label}>
                    Ім'я:
                    <input type="text" {...register('name', {required:true})} />
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                </label>
                <label className={styles.label}>
                    Електронна пошта:
                    <input  type="text" {...register('email', {required:true})} />
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                </label>
                <label className={styles.label}>
                    Пароль:
                    <input  type="text" {...register('password', {required:true})} />
                    {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                </label>
                
                <input className={styles.button} type="submit" value="Заєреструватися" />
            </form>
        </div>
    )
}
export default UserComponent;