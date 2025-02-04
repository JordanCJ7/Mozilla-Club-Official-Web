export default function About() {
  return (
    <div className="py-12 bg-[#faf9f6]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-16 relative">
          <span className="relative inline-block">
            About Us
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/20"></div>
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="p-8 border border-primary/10 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Vision</h2>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/20"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/20"></div>
              <p className="text-gray-600 text-center leading-relaxed">
                To create a vibrant community of tech enthusiasts at SLIIT who are passionate about open source technologies
                and committed to making the web a better place for everyone.
              </p>
            </div>
          </div>

          <div className="p-8 border border-primary/10 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Mission</h2>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/20"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/20"></div>
              <p className="text-gray-600 text-center leading-relaxed">
                Our mission is to empower students with the knowledge and skills needed to contribute to open source projects,
                foster innovation, and build a strong tech community within SLIIT.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12 relative">
            <span className="relative inline-block">
              Strategy
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary/20"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white border border-primary/10 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <h3 className="font-semibold mb-4">Education</h3>
                <div className="w-12 h-1 bg-primary/20 mx-auto mb-4"></div>
                <p className="text-gray-600">Regular workshops, seminars, and hands-on sessions on various technologies</p>
              </div>
            </div>
            <div className="p-6 bg-white border border-primary/10 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <h3 className="font-semibold mb-4">Community Building</h3>
                <div className="w-12 h-1 bg-primary/20 mx-auto mb-4"></div>
                <p className="text-gray-600">Creating opportunities for networking and collaboration</p>
              </div>
            </div>
            <div className="p-6 bg-white border border-primary/10 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <h3 className="font-semibold mb-4">Project Development</h3>
                <div className="w-12 h-1 bg-primary/20 mx-auto mb-4"></div>
                <p className="text-gray-600">Working on real-world projects that benefit the community</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 relative">
            <span className="relative inline-block">
              Our Story
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary/20"></div>
            </span>
          </h2>
          <div className="prose max-w-none">
            <div className="bg-white p-8 border border-primary/10 rounded-lg shadow-sm">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary/20"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary/20"></div>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  The Mozilla Campus Club at SLIIT was established with the vision of bringing together passionate
                  students interested in web technologies and open source development. Since our inception, we have
                  grown into a thriving community of learners, developers, and innovators.
                </p>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  Our journey began with a small group of enthusiastic students who wanted to make a difference
                  in the tech community. Today, we have evolved into one of the most active tech clubs at SLIIT,
                  organizing numerous events, workshops, and hackathons throughout the academic year.
                </p>
                <p className="text-gray-600 text-center leading-relaxed">
                  We continue to grow and adapt, always staying true to our core values of openness, innovation,
                  and community building. Our members have gone on to make significant contributions to various
                  open source projects and have established successful careers in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}