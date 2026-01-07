/* eslint-disable react/no-unescaped-entities */
"use client";

import { Mail, Phone, MessageCircle, Info, HelpCircle } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-2">
          <HelpCircle />
          Help & Support
        </h1>
        <p className="text-gray-600 mt-2">
          We're here to make your ride smooth and stress-free.  
          Find answers to common questions, or contact support anytime.
        </p>
      </div>

      {/* FAQ SECTION */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h2>

        {/* Question 1 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800">
            How do I request a ride?
          </h3>
          <p className="mt-2 text-gray-600">
            Go to the Ride page, enter your pickup & drop location, review the fare,
            and confirm the ride. A nearby captain will be assigned.
          </p>
        </div>

        {/* Question 2 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800">
            How can I cancel my ride?
          </h3>
          <p className="mt-2 text-gray-600">
            You can cancel the ride from the trip detail screen before pickup.
            Cancellation fees may apply at certain stages.
          </p>
        </div>

        {/* Question 3 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800">
            What payment options are available?
          </h3>
          <p className="mt-2 text-gray-600">
            We currently accept cash and UPI payments. Wallet coming soon.
          </p>
        </div>

        {/* Question 4 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <h3 className="font-semibold text-gray-800">
            My captain didn’t arrive. What do I do?
          </h3>
          <p className="mt-2 text-gray-600">
            You can cancel and rebook a ride, or contact support using chat/email
            below. We apologize for any inconvenience.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Need more help? Contact us.
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-indigo-50 rounded-xl p-6 text-center">
            <Mail className="mx-auto mb-3" />
            <h4 className="font-semibold">Email Support</h4>
            <p className="text-gray-600 text-sm mt-1">support@quickride.in</p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 text-center">
            <Phone className="mx-auto mb-3" />
            <h4 className="font-semibold">Call Us</h4>
            <p className="text-gray-600 text-sm mt-1">+91 987-654-3210</p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 text-center">
            <MessageCircle className="mx-auto mb-3" />
            <h4 className="font-semibold">Live Chat</h4>
            <p className="text-gray-600 text-sm mt-1">Available 24/7</p>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <p className="text-center text-gray-500 text-sm mt-14">
        QuickRide © {new Date().getFullYear()} — Your reliable ride partner.
      </p>
    </div>
  );
}
