import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // console.log(data);

        props.addUser(data);

        //limpiar campos
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name"
                placeholder="Ingresa tu nombre"
                {...
                register('name', {
                    required: { value: true, message: 'Campo obligatorio' }
                })
                }
            ></input>
            <div>
                {errors?.name?.message}
            </div>

            <label>Username</label>
            <input type="text" name="username"
                placeholder="Ingresa tu usuario"
                {...
                register('username', {
                    required: { value: true, message: 'Campo obligatorio' }
                })
                }
            ></input>
            <div>
                {errors?.username?.message}
            </div>
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;