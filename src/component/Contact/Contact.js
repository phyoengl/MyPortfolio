import './Contact.css'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Contact({name, icon}) {
    return (
        <div id={name}>
            <div className='container-fluid my-5'>
                <div className='row justify-content-center bg-light'>
                    <div className='contact-box col-lg-5 px-5'>
                        <ContactHeader />
                        <ContactBody icon={icon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactHeader() {
    return <div className='contact-header my-4'>
        <h6>
            Get in touch
        </h6>
        <h1>
            Contact me
        </h1>
    </div>;
}

function ContactBody({icon}) {
    const formik = useFormik(
        {
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
            },
            validationSchema: Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address').required('Required'),
                phone: Yup.number('Invalid number')
                    .max(15, 'Must be 15 digit or less')
                    .integer('invalid number')
                    .positive('invalid number')
                    .required('Required'),
            }),
            onSubmit: values => {
                console.log("onSubmit", values);
            },
        })

    return <div className='contact-body my-5'>
        <form onSubmit={formik.handleSubmit}>

            <div className='mb-3 row'>
                <div className='col-6'>
                    <label htmlFor="firstName"
                        className='form-label'>
                        Firstname
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />

                    {/* validation */}
                    {
                        formik.touched.firstName && formik.errors.firstName ? (
                            <div className='custom-alert'>
                                <FontAwesomeIcon className='me-1' icon={icon} />
                                {formik.errors.firstName}
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-6'>
                    <label htmlFor="lastName"
                        className='form-label'>
                        Lastname
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />

                    {/* validation */}
                    {
                        formik.touched.lastName && formik.errors.lastName ? (
                            <div className='custom-alert'>
                                <FontAwesomeIcon className='me-1' icon={icon} />
                                {formik.errors.lastName}
                            </div>
                        ) : null
                    }
                </div>
            </div>

            <div className='mb-3 row'>
                <div className='col-6'>
                    <label htmlFor='email'
                        className='form-label'>
                        Email
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {/* validation */}
                    {
                        formik.touched.email && formik.errors.email ? (
                            <div className='custom-alert'>
                                <FontAwesomeIcon className='me-1' icon={icon} />
                                {formik.errors.email}
                            </div>
                        ) : null
                    }
                </div>

                <div className='col-6'>
                    <label htmlFor='phone'
                        className='form-label'>
                        Phone
                    </label>
                    <input
                        id='phone'
                        name='phone'
                        type='text'
                        className='form-control'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {/* validation */}
                    {
                        formik.touched.phone && formik.errors.phone ? (
                            <div className='custom-alert'>
                                <FontAwesomeIcon className='me-1' icon={icon} />
                                {formik.errors.phone}
                            </div>
                        ) : null
                    }
                </div>
            </div>

            <div className='mb-3'>
                <label htmlFor='message'
                    className='form-label'>
                    Message
                </label>
                <textarea
                    id='message'
                    name='message'
                    rows={6}
                    className='form-control'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                />
            </div>

            <div className='mb-3'>
                <button
                    type='submit'
                    className='btn btn-secondary'>
                    Contact
                </button>
            </div>

        </form>
    </div>
}
