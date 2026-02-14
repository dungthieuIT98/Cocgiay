import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>

        <p className="text-xl text-gray-600">
          We are always ready to support you
        </p>

      </div>


      <div className="grid md:grid-cols-2 gap-8">


        {/* ================= CONTACT FORM ================= */}
        <div className="bg-white rounded-xl shadow-md p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Message
          </h2>


          <form className="space-y-4">


            {/* NAME */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />

            </div>


            {/* EMAIL */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />

            </div>


            {/* PHONE */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Phone / WhatsApp
              </label>

              <input
                type="tel"
                placeholder="+84 0914 94 33 94"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />

            </div>


            {/* MESSAGE */}
            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Enter your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />

            </div>


            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition"
            >

              <Send size={20} />
              Send Message

            </button>


          </form>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="space-y-8">


          {/* CONTACT INFO */}
          <div className="bg-white rounded-xl shadow-md p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>


            <div className="grid md:grid-cols-2 gap-6 items-center">


              {/* LEFT */}
              <div className="space-y-6">


                {/* PHONE */}
                <div className="flex items-center gap-4">

                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-green-600" size={24} />
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-800">
                      WhatsApp
                    </h3>

                    <p className="text-gray-600">
                      +84 0914 94 33 94
                    </p>

                  </div>

                </div>


                {/* EMAIL */}
                <div className="flex items-center gap-4">

                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={24} />
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-800">
                      Email
                    </h3>

                    <p className="text-gray-600">
                      thunga.hoang@gmail.com
                    </p>

                  </div>

                </div>


                {/* ADDRESS */}
                <div className="flex items-start gap-4">

                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="text-green-600" size={24} />
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-800">
                      Address
                    </h3>

                    <p className="text-gray-600">
                      37 DC13 Street<br />
                      Tan Binh Industrial Park<br />
                      Tay Thanh Ward, Tan Phu District<br />
                      Ho Chi Minh City, Vietnam
                    </p>

                  </div>

                </div>


                {/* WORKING HOURS */}
                <div className="flex items-start gap-4">

                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="text-green-600" size={24} />
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-800">
                      Working Hours
                    </h3>

                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>

                    <p className="text-gray-600">
                      Saturday - Sunday: 9:00 AM - 5:00 PM
                    </p>

                  </div>

                </div>


              </div>


              {/* RIGHT - QR */}
              <div className="flex flex-col items-center text-center">

                <img
                  src="/images/image.png"
                  alt="WhatsApp QR"
                  className="w-56 h-56 object-contain border-2 border-green-600 rounded-xl shadow-lg"
                />

                <p className="text-gray-500 mt-3 text-sm">
                  Scan QR code to chat via WhatsApp
                </p>

              </div>


            </div>

          </div>


          {/* MAP */}
          <div className="bg-white rounded-xl shadow-md p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Location Map
            </h2>


            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.910554330909!2d106.62528961079366!3d10.81815685837771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bdf73ac93d7%3A0x8d81527c156d1f3e!2zMzcgxJDGsOG7nW5nIFTDonkgVGjhuqFuaCwgVMOieSBUaOG6oW5oLCBUw6JuIFBow7osIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1770970144692!5m2!1svi!2s"
              width="100%"
              height="350"
              className="rounded-lg border-0"
              loading="lazy"
              title="Google Map"
            />


          </div>


        </div>


      </div>

    </div>
  );
}
