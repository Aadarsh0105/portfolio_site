import { ArrowRight, Calendar, Zap, Shield, Headset, CheckCircle, Code2, Rocket } from 'lucide-react';
import Image from 'next/image';
export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#E8ECFF] flex items-center pt-20 lg:pt-24 pb-5">
      {/* Background — right-anchored flowing strands like the reference */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft color tint on the right */}
        <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-l from-[#DCE4FF]/80 via-[#E9EDFF]/40 to-transparent"></div>

        {/* Flowing line waves anchored to the right edge */}
        <svg
          className="absolute top-0 right-0 h-full w-[75%] max-w-none"
          viewBox="0 0 800 900"
          preserveAspectRatio="xMaxYMid slice"
          xmlns="http://www.w3.org/2000/svg">

          <defs>
            <linearGradient id="strandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          {/* A bundle of nearly-parallel curves sweeping from top-center to bottom-right */}
          {Array.from({
            length: 26
          }).map((_, i) => {
            const o = i * 13;
            return (
              <path
                key={i}
                d={`M${120 + o},-20 C${260 + o},${180 + o * 0.6} ${180 + o},${420 + o * 0.5} ${340 + o},${560 + o * 0.4} C${480 + o},${690 + o * 0.3} ${420 + o},${820} ${600 + o},${940}`}
                fill="none"
                stroke="url(#strandGrad)"
                strokeWidth="1"
                opacity={0.18 + i % 6 * 0.05} />);


          })}
        </svg>

        {/* Faint dotted grid, lower-center like the reference */}
        <svg
          className="absolute bottom-[8%] left-[42%] w-44 h-28 opacity-60"
          xmlns="http://www.w3.org/2000/svg">

          <defs>
            <pattern
              id="heroDots"
              x="0"
              y="0"
              width="14"
              height="14"
              patternUnits="userSpaceOnUse">

              <circle cx="2" cy="2" r="1.4" fill="#A5B4FC" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroDots)" />
        </svg>

        {/* Faint geometric accents */}
        <div className="absolute top-[18%] right-[8%] w-2.5 h-2.5 rounded-full border border-blue-300/60"></div>
        <div className="absolute top-[24%] right-[26%] w-4 h-4 rotate-45 border border-indigo-300/50"></div>
        <div className="absolute top-[16%] right-[18%] w-1.5 h-1.5 rounded-full bg-purple-300/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gap-12 lg:gap-8 items-center">
        <div className="grid lg:grid-cols-12">
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 lg:gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-slate-100">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm font-semibold text-blue-600">
                Your Trusted Technology Partner
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[700px] text-3xl md:text-4xl lg:text-5xl font-black leading-[1.05] tracking-[-0.05em] text-slate-900">
              Build Your Professional <br className="hidden md:block" />
              Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">
                Websites </span> and <br />
              Android & iOS <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">
                 Mobile App </span>
                {/*<br />
              Starting at <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">
                Just ₹ 9,999
              </span> */}
              {/* Custom Web & Mobile
              Solutions That
              Drive Business Growth */}
            </h1>

            {/* Paragraph */}
            <p className="text-md md:text-lg text-slate-600 max-w-[540px] leading-relaxed">
              We help startups, enterprises and growing businesses build scalable
              websites, mobile apps and digital products that accelerate growth
              and create real impact.
            </p>

            {/* Mobile Mockup */}
            <div className="lg:hidden relative w-full flex justify-center mt-2 mb-4">
              <Image
                src="/ChatGPT_Image_Jun_18,_2026,_12_12_11_PM.png"
                alt="Custom web and mobile application development"
                width={900}
                height={700}
                priority
                className="w-full max-w-[420px] h-auto object-contain"
              />

              {/* Floating Code Chip */}
              <div className="absolute top-4 left-4 bg-white p-2 rounded-2xl shadow-lg -rotate-12">
                <Code2 className="w-5 h-5 text-purple-600" />
              </div>

              {/* Floating Rocket Chip */}
              <div className="absolute bottom-4 right-4 bg-white p-2 rounded-2xl shadow-lg rotate-12">
                <Rocket className="w-5 h-5 text-blue-600" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-base transition-all shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)]">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 px-6 py-3 rounded-full font-semibold text-base transition-all shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-200 hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
                <Calendar className="w-5 h-5 text-slate-600" />
                Book Free Consultation
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Mockup */}
          <div className="hidden lg:flex lg:col-span-6 relative w-full items-center justify-center mt-12 lg:mt-0">
            {/* Floating Chip: Code */}
            <div className="absolute top-[2%] left-[2%] z-30 bg-white p-3 lg:p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] transform -rotate-12 animate-[bounce_6s_ease-in-out_infinite]">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <Code2 className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
              </div>
            </div>

            {/* Floating Chip: Rocket */}
            <div className="absolute -bottom-[6%] right-[4%] z-30 bg-white p-3 lg:p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] transform rotate-12 animate-[bounce_5s_ease-in-out_infinite_reverse]">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
              </div>
            </div>

            {/* Mockup image */}
            <Image src="/ChatGPT_Image_Jun_18,_2026,_12_12_11_PM.png" alt="Custom web and mobile application development"
              width={1200} height={900} priority className="relative z-10 w-full h-auto
            object-contain drop-shadow-[0_30px_60px_rgba(59,130,246,0.18)]"/>

          </div>
        </div>

        {/* Full Width Trust Bar */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white p-3 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Zap className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-slate-900">
                    Fast Delivery
                  </h3>
                  <p className="text-sm text-slate-500">
                    On-time execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white p-3 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-green-50 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-slate-900">
                    Secure & Scalable
                  </h3>
                  <p className="text-sm text-slate-500">
                    Built for growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white p-3 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                  <Headset className="h-7 w-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-slate-900">
                    Dedicated Support
                  </h3>
                  <p className="text-sm text-slate-500">
                    Direct communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-white p-3 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-cyan-50 flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-slate-900">
                    Transparent Pricing
                  </h3>
                  <p className="text-sm text-slate-500">
                    No hidden costs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>);

}