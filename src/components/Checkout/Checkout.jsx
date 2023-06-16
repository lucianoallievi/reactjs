import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const schema = Yup.object().shape({
  nombre: Yup.string()
    .required("Debe ingresar su nombre")
    .min(6, "Debe ingresar su nombre completo")
    .max(25, "El nombre es demasiado largo"),
});

const Checkout = () => {
  return (
    <div>
      <h2 className="container my-5">Finalice su compra</h2>
      <hr />
      <Formik
        initialValues={{
          nombre: "",
        }}
        validationSchema={schema}
      >
        {() => (
          <Form>
            <Field name="nombre" type="text" className="form-control my-2" />
            <ErrorMessage name="nombre" component={"p"} />

            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
