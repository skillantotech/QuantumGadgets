import React from 'react'
import { Formik, Form, Field } from 'formik'

function ContactForm() {
    const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.459619412002!2d85.81698327475105!3d20.322622711657942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a12c21f18d5b%3A0x88ab551c798ed908!2sSkillanto%20Private%20Limited%20-%20IT%2FSoftware%20Company%20in%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1728024293917!5m2!1sen!2sin";
    return (
        <>
            <h2 className='text-secondary font-semibold text-center text-3xl my-4'>Contact Us</h2>
            <div className='flex px-[1%] md:px-[5%] xl:px-[10%] py-8 bg-slate-50 justify-between flex-col lg:flex-row'>
                <div className='bg-white'>
                    <Formik
                        initialValues={{ name: '', email: '', phone: '', description: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {() => (
                            <Form className="max-w-lg p-4 mx-auto">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="block mb-2" htmlFor="name">Name</label>
                                        <Field
                                            className="w-full p-2 border rounded"
                                            type="text"
                                            name="name"
                                            id="name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2" htmlFor="email">Email</label>
                                        <Field
                                            className="w-full p-2 border rounded"
                                            type="email"
                                            name="email"
                                            id="email"
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-2">
                                        <label className="block mb-2" htmlFor="phone">Phone</label>
                                        <Field
                                            className="w-full p-2 border rounded"
                                            type="text"
                                            name="phone"
                                            id="phone"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block mb-2" htmlFor="description">What&#39;s on your mind?</label>
                                    <Field
                                        className="w-full p-2 border rounded"
                                        as="textarea"
                                        name="description"
                                        id="description"
                                        rows="4"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="p-2 mt-4 text-white bg-blue-500 rounded"
                                >
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='w-[50%]'>
                    <iframe
                        src={url}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className='w-full h-full'
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default ContactForm