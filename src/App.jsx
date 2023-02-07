import "./App.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Name needs to be filled in"),
    email: yup.string().required("Email needs to be filled in").email(),
    phone: yup
      .string()
      .required("Phone needs to be filled in"),
    address: yup.string().required("Address needs to be filled in"),
  });

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    
    console.log(data)
    reset()

    
}
  

 

  return (
    <div className="container">
      <h2>Fill in the form</h2>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Name" {...register("name")} />
        <input placeholder="Email" {...register("email")} />
        <input placeholder="Phone - +XX XXX-XXX-XXX" {...register("phone")} />
        <input placeholder="Address" {...register("address")} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
