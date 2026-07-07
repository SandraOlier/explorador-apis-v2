import { useForm } from "react-hook-form";

interface FormData {
  nombre: string;
  email: string;
}

function Contacto() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Datos enviados:", data);
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("nombre", { required: "El nombre es obligatorio" })} placeholder="Tu nombre" />
        {errors.nombre && <p>{errors.nombre.message}</p>}

        <input {...register("email", { required: "El email es obligatorio", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Email inválido" } })} placeholder="Tu email" />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;

