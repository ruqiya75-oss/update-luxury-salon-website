const Testimonials = () => {
  return (
    <section className="py-20 text-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-10">Client Reviews</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        <div className="bg-black p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Sarah</h3>

<p className="text-gold text-lg mb-2">★★★★★</p>

<p className="mt-4">Amazing salon experience.</p>
        </div>

        <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-xl font-semibold">Ayesha</h3>
          

<p className="text-gold text-lg mb-2">★★★★★</p>

<p className="mt-4">Amazing salon experience.</p>
        </div>

        <div className="bg-black p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Anaya</h3>

<p className="text-gold text-lg mb-2">★★★★★</p>

<p className="mt-4">Amazing salon experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;