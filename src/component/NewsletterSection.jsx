import React from "react";

const NewsletterSection = () => (
  <section className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Abonnez-vous à ma newsletter</h2>
        <p className="mb-8">Recevez mes derniers articles, conseils et actualités directement dans votre boîte mail.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input type="email" placeholder="Votre adresse email" className="flex-1 px-4 py-3 rounded-lg focus:outline-none bg-gray-800 border border-gray-700" />
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">S'abonner</button>
        </form>
      </div>
    </div>
  </section>
);

export default NewsletterSection; 