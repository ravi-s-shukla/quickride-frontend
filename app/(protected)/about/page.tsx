/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Car, Users, Shield, Clock, Heart, Award, Globe, Zap, MapPin, DollarSign, Star, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Moving people, <span className="text-indigo-600">transforming cities</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              QuickRide is reimagining the way the world moves. We're building technology that connects riders with drivers at the tap of a button, making transportation more accessible, affordable, and reliable.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">50M+</div>
                <div className="text-gray-600 mt-2">Rides Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">500K+</div>
                <div className="text-gray-600 mt-2">Active Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">100+</div>
                <div className="text-gray-600 mt-2">Cities Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">4.8★</div>
                <div className="text-gray-600 mt-2">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We exist to make transportation as reliable as running water, everywhere and for everyone. Whether you&apos;re commuting to work, heading to the airport, or exploring a new city, QuickRide is committed to getting you there safely, quickly, and affordably.
                </p>
                <p className="text-lg text-gray-600">
                  Our platform empowers millions of drivers to earn a flexible income while helping riders get where they need to go. We&apos;re not just building a service—we're creating opportunities and connecting communities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 rounded-2xl p-6 text-center">
                  <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Always Available</h3>
                  <p className="text-sm text-gray-600">24/7 service in every city we operate</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 text-center">
                  <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Safe & Secure</h3>
                  <p className="text-sm text-gray-600">Verified drivers and GPS tracking</p>
                </div>
                <div className="bg-yellow-50 rounded-2xl p-6 text-center">
                  <div className="bg-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Fair Pricing</h3>
                  <p className="text-sm text-gray-600">Transparent fares with no surprises</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 text-center">
                  <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Lightning Fast</h3>
                  <p className="text-sm text-gray-600">Average pickup time under 5 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer support
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">People First</h3>
              <p className="text-gray-600">
                Every decision we make starts with the people who use our platform. We listen to our riders and drivers, constantly improving based on their feedback and needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600">
                We're committed to creating positive change in every community we serve, from reducing traffic congestion to providing flexible earning opportunities for thousands of drivers.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We set the highest standards for safety, reliability, and service quality. Our commitment to excellence drives us to constantly innovate and improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How QuickRide Works</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* For Riders */}
              <div>
                <h3 className="text-2xl font-bold text-indigo-600 mb-8 flex items-center gap-3">
                  <Car size={28} />
                  For Riders
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Request a Ride</h4>
                      <p className="text-gray-600">Open the app, enter your destination, and request a ride. See the estimated fare and arrival time instantly.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Get Matched</h4>
                      <p className="text-gray-600">Our smart algorithm connects you with a nearby verified driver. Track their location in real-time.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Enjoy Your Ride</h4>
                      <p className="text-gray-600">Relax while your driver takes the optimal route. Rate your experience and pay seamlessly through the app.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Drivers */}
              <div>
                <h3 className="text-2xl font-bold text-indigo-600 mb-8 flex items-center gap-3">
                  <Users size={28} />
                  For Drivers
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Sign Up & Get Verified</h4>
                      <p className="text-gray-600">Complete a simple background check and vehicle inspection. Start earning within 48 hours.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Go Online</h4>
                      <p className="text-gray-600">Open the driver app and start accepting ride requests. Work on your own schedule, whenever and wherever you want.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Earn Money</h4>
                      <p className="text-gray-600">Complete rides, earn money, and get paid weekly. Plus, keep 100% of your tips and earn bonuses during peak hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Safety is Our Priority</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've built multiple layers of protection to ensure every ride is safe and secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Background Checks</h3>
              <p className="text-gray-600 text-sm">All drivers undergo comprehensive background screening and vehicle inspections</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Real-Time GPS</h3>
              <p className="text-gray-600 text-sm">Every ride is tracked in real-time and can be shared with friends and family</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">Two-Way Ratings</h3>
              <p className="text-gray-600 text-sm">Riders and drivers rate each other, ensuring accountability on both sides</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Our safety team is available around the clock to assist with any concerns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-indigo-50 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Globe className="text-indigo-600 mx-auto mb-3" size={40} />
                      <div className="text-3xl font-bold text-indigo-600 mb-1">100+</div>
                      <div className="text-gray-600 text-sm">Cities Worldwide</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="text-green-600 mx-auto mb-3" size={40} />
                      <div className="text-3xl font-bold text-green-600 mb-1">2M+</div>
                      <div className="text-gray-600 text-sm">Daily Rides</div>
                    </div>
                    <div className="text-center">
                      <Users className="text-purple-600 mx-auto mb-3" size={40} />
                      <div className="text-3xl font-bold text-purple-600 mb-1">10M+</div>
                      <div className="text-gray-600 text-sm">Active Users</div>
                    </div>
                    <div className="text-center">
                      <Car className="text-orange-600 mx-auto mb-3" size={40} />
                      <div className="text-3xl font-bold text-orange-600 mb-1">500K+</div>
                      <div className="text-gray-600 text-sm">Verified Drivers</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Growing Every Day</h2>
                <p className="text-lg text-gray-600 mb-6">
                  What started in a single city has grown into a global movement. Today, QuickRide operates in over 100 cities across 25 countries, completing millions of rides every day.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our growth is driven by one simple goal: making transportation accessible to everyone. Whether you're in New York, London, Tokyo, or Mumbai, QuickRide is there when you need it.
                </p>
                <p className="text-lg text-gray-600">
                  But we're not stopping here. We're constantly expanding to new cities and improving our service based on your feedback. The future of transportation is being built today, and you're a part of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Join the QuickRide Community</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you want to ride or drive, we're here to help you get where you're going
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                Download the App
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition">
                Become a Driver
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2025 QuickRide. All rights reserved.</p>
            <p className="text-sm">Making transportation accessible, one ride at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;