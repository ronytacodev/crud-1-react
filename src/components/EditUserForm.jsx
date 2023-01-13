import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    // console.log(props.currentUser)

    const { register, formState: { errors }, handleSubmit } = useForm({
        // defaultValues: props.currentUser
        defaultValues: {
            'name': props.currentUser.name,
            'username': props.currentUser.username,
        }
    });

    // setValue('name', props.currentUser.name);
    // setValue('username', props.currentUser.username);

    const onSubmit = (data, e) => {
        console.log(data);
        data.id = props.currentUser.id

        props.updateUser(props.currentUser.id, data);

        //limpiar campos
        e.target.reset();
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
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;