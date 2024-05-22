import styles from './CommentComponent.module.css'
import { useEffect } from "react";
import { useForm } from 'react-hook-form'

const CommentComponent = () => {
    const { 
        handleSubmit,
        register,
        formState: {errors}
    } = useForm();
    
    const onSubmit = (data) => {
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST', 
            body: JSON.stringify(data)})
       .then((response) => response.json())
       .then((data) => console.log(data))
    
    }
    
    useEffect(()=>{
    })
    
        return (
            <div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.label}>
                        Ім'я:
                        <input type="text" {...register('name', {required:true})} />
                        {errors.name && <span className={styles.error}>Це поле обов'язкове для заповнення</span>}
                    </label>
                    <label className={styles.label}>
                        Електронна пошта:
                        <input  type="text" {...register('email', {required:true})} />
                        {errors.email && <span className={styles.error}>Це поле обов'язкове для заповнення</span>}
                    </label>
                    <label className={styles.label}>
                        Комент:
                        <textarea  type="text" {...register('comment', {required:true})} />
                        {errors.comment && <span className={styles.error}>Це поле обов'язкове для заповнення</span>}
                    </label>
                    
                    <input className={styles.button} type="submit" value="Опублікувати" />
                </form>
            </div>
        )
   
}
export default CommentComponent;