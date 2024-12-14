import React from 'react'

export default function Contact() {
    return (
        <section className='px-20'>
            <div className='flex'>
                <h1 className='border-2 border-text text-text text-3xl font-semibold rounded inline-block p-3 px-5 m-auto'>Let's Connect</h1>
            </div>
            <div className='flex items-center gap-24 px-20 py-10'>
                <div className='w-full border-4 rounded-xl border-primary p-10'>
                    <img src="./public/icons/contact.svg" alt="connect-img" />
                </div>
                <form name="contact" method="POST" data-netlify="true" className="w-full space-y-8" autoComplete='off' >
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium">Your email</label>
                        <input type="email" id="email" name="email" className="shadow-sm border text-sm rounded-lg block p-3 w-full outline-none bg-text text-background" placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" name="subject" className="shadow-sm border text-sm rounded-lg block p-3 w-full outline-none bg-text text-background" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" name="message" rows="6" className="shadow-sm border text-sm rounded-lg block p-3 w-full outline-none bg-text text-background" placeholder="Leave a comment..."></textarea>
                    </div>
                    {/* <button type='submit' className='p-2 px-5 rounded hover:scale-110 ease-in-out duration-300' style={{ background: 'linear-gradient(308deg, #8ee9be 0%, #821a58 113% 113%, #d87038 100%)' }}>Send Message</button> */}
                    <button type="submit" className='p-2 px-5 rounded hover:scale-110 ease-in-out duration-300 border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-text'>Send Message</button>
                </form>
            </div>
        </section>
    )
}
