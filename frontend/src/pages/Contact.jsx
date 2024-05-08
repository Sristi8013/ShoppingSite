import React from 'react'

const Contact = () => {
  return (
    <div>
      <section class="bg-yellow-200 dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="text-4xl mb-12 mt-2 bg-gradient-to-r from-orange-800 from-30% via-yellow-600 via-50% to-yellow-300 to-90% text-transparent font-extrabold bg-clip-text text-center  uppercase">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-semibold text-center text-orange-800 dark:text-gray-400 sm:text-xl">Got issue regarding order? Want to send feedback about a product? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-xl font-bold text-orange-800 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-yellow-50 border border-yellow-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="abc@xyz.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-xl font-bold text-orange-800 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-yellow-50 rounded-lg border border-yellow-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-xl font-bold text-orange-800 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-yellow-50 rounded-lg shadow-sm border border-yellow-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    </div>
  )
}

export default Contact