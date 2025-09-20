import React from 'react'

const ContactForm = () => {
  return (
     <div>
            <form>
                <input type="checkbox" id="" className="hidden" style={{display:'none'}} name="botcheck" />
                <div className="mb-5">
                    <input type="text" placeholder="Full Name" autoomplete="false"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                        name="name" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email_address" className="sr-only">Email Address</label>
                    <input id="email_address" type="email" placeholder="Email Address" autoComplete="false"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                        name="email" />
                </div>
                <div className="mb-3">
                    <textarea placeholder="Your Message"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                        name="message">
                    </textarea>
                </div>
                <button type="submit"
                    className="w-full py-4 font-semibold text-white transition-colors bg-blue-700 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black ">Send
                    Message
                </button>
            </form>
        </div>
  )
}

export default ContactForm