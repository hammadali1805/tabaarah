export const AboutUs = () => {
  return (
    <div className="bg-cream py-10 px-6 md:px-16 lg:px-32 text-slate-700">
      <h2 className="text-center text-4xl md:text-5xl font-medium mb-16 text-green font-serif">
        About Tabaarah
      </h2>

      {/* Our Story */}
      <div className="mb-20 max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-green font-serif">
          Our Story
        </h3>
        <p className="sm:text-lg leading-relaxed mb-4">
          Tabaaraah was born from a simple yet profound belief: that the act of
          gifting is one of life's purest joys. Founded in 2020, we set out to
          create a curated collection of thoughtful gifts that celebrate life's
          special moments and everyday connections.
        </p>
        <p className="sm:text-lg leading-relaxed">
          What began as a small passion project has grown into a beloved
          destination for those seeking meaningful gifts that convey care,
          appreciation, and love. Each item in our collection is carefully
          selected to bring joy not only to the recipient but also to the giver,
          embodying our core philosophy that "Gifting Is Bliss."
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Vision */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-green font-serif">
            Our Vision
          </h3>
          <p className="sm:text-lg leading-relaxed">
            To transform the gifting experience into a meaningful ritual that
            strengthens human connections and spreads joy. We envision a world
            where every gift tells a story and creates lasting memories.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-green">
            Our Mission
          </h3>
          <p className="sm:text-lg leading-relaxed">
            To curate exceptional products that inspire thoughtful gifting,
            celebrate special moments, and foster genuine connections. We are
            committed to offering unique items that reflect care, quality, and
            attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};
