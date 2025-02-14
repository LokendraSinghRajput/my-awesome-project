import { Building2, Mail, Phone } from 'lucide-react';
import { Formik, Form, Field, ErrorMessage ,FormikHelpers} from 'formik';
import * as Yup from 'yup';



const ContactUs = () => {
    // Initial form values
    // const initialValues = {
    //     name: '',
    //     email: '',
    //     company: '',
    //     message: ''
    // };

    // Your initialValues should match this interface
const initialValues: FormValues = {
    name: '',
    email: '',
    company: '',
    message: ''
};

    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Full name is required')
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name must be less than 50 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email format'),
        company: Yup.string()
            .required('Company name is required')
            .min(2, 'Company name must be at least 2 characters')
            .max(100, 'Company name must be less than 100 characters'),
        message: Yup.string()
            .required('Message is required')
            .min(10, 'Message must be at least 10 characters')
            .max(1000, 'Message must be less than 1000 characters')
    });

// Define the interface to match your form fields exactly
interface FormValues {
    name: string;
    email: string;
    company: string;
    message: string;
}

// Your submit handler with correct typing
const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
) => {
    console.log(values);
    setTimeout(() => {
        setSubmitting(false);
        resetForm();
    }, 1000);
};



   
    return (
        <>
            <section className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="fw-normal">Get in touch</h2>
                        <p className="text-muted">For general enquiries</p>
                        <p><Building2 className="me-3" size={20} /><strong>Address :-</strong> 110, 16th Road, Chembur, Mumbai - 400071</p>
                        <p> <Phone className="me-3" size={20} /><strong>Phone :-</strong> +91 22 25208822</p>
                        <p> <Mail className="me-3" size={20} /><strong>Email :-</strong> info@supremegroup.co.in</p>
                    </div>
                    <div className="col-lg-6 super-group-inputs-file">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Full name</label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-danger mt-1"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <Field
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Enter email address"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-danger mt-1"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="company" className="form-label">Company</label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="company"
                                            name="company"
                                            placeholder="Enter company name"
                                        />
                                        <ErrorMessage
                                            name="company"
                                            component="div"
                                            className="text-danger mt-1"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <Field
                                            as="textarea"
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Type your message"
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="div"
                                            className="text-danger mt-1"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactUs