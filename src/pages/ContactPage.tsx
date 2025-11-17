import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon } from 'lucide-react';
export function ContactPage() {
  const businessHours = [{
    day: 'Monday',
    hours: '7:30 AM - 5:30 PM'
  }, {
    day: 'Tuesday',
    hours: '7:30 AM - 5:30 PM'
  }, {
    day: 'Wednesday',
    hours: '7:30 AM - 5:30 PM'
  }, {
    day: 'Thursday',
    hours: '7:30 AM - 5:30 PM'
  }, {
    day: 'Friday',
    hours: '7:30 AM - 5:30 PM'
  }, {
    day: 'Saturday',
    hours: '7:30 AM - 5:30 PM'
  }, {
    day: 'Sunday',
    hours: '7:30 AM - 5:30 PM'
  }];
  return <div className="min-h-screen bg-gray-50 py-4 sm:py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-red-600 text-white px-4 py-6 sm:px-6 sm:py-8 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
              Contact Us
            </h1>
            <p className="text-red-100 text-sm sm:text-base md:text-lg">
              Get in touch with Eshan Enterprises for all your equipment rental
              needs
            </p>
          </div>
          <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-base sm:text-lg">
                        Address
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        PW5X+6CW, 1st Cross Street of Raja Samaranayake Mawatha
                        <br />
                        Panadura
                      </p>
                      <a href="https://www.google.com/maps?q=PW5X%2B6CW,+1st+Cross+Street+of+Raja+Samaranayake+Mawatha,+Panadura" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 sm:mt-3 text-red-600 hover:text-red-700 font-medium text-sm active:text-red-800">
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-base sm:text-lg">
                        Phone
                      </h3>
                      <a href="tel:0764460357" className="text-gray-600 hover:text-red-600 active:text-red-700 transition-colors text-lg sm:text-xl font-medium">
                        076 446 0357
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
                      Business Hours
                    </h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      {businessHours.map(schedule => <div key={schedule.day} className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-gray-600 font-medium">
                            {schedule.day}
                          </span>
                          <span className="text-gray-900 text-right ml-2">
                            {schedule.hours}
                          </span>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6 sm:pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Need Help?
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
                <p className="text-gray-600 text-sm sm:text-base">
                  Our team is here to assist you with:
                </p>
                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                    <span>Equipment rental inquiries and quotations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                    <span>Technical specifications and recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                    <span>Delivery and pickup arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                    <span>Payment terms and rental agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                    <span>Equipment maintenance and support</span>
                  </li>
                </ul>
                <div className="pt-3 sm:pt-4">
                  <p className="text-gray-900 font-medium text-sm sm:text-base">
                    Contact us today to discuss your construction equipment
                    needs!
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-base sm:text-lg">
                Quick Response Guarantee
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We aim to respond to all inquiries within 2 hours during
                business hours. For urgent requests, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}