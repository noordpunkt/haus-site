import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 py-8 px-8">

        <div className="text-xs text-gray-800 space-y-4 mb-16">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Haus works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        </div>

        <div className="text-xs text-gray-800 space-y-4 mb-16">
        <h5 className="font-bold">PRIVACY</h5>
        <p>Privacy policy</p>
        </div>

        <div className="text-xs text-gray-800 space-y-4 mb-16">
        <h5 className="font-bold">TERMS</h5>
        <p>Terms of service</p>
        </div>

        <div className="text-xs text-gray-800 space-y-4 mb-16">
        <h5 className="font-bold">Destinations</h5>
        <p>Europe</p>
        <p>North America</p>
        <p>Latin America</p>
        <p>Asia</p>
        </div>


      </div>
    </div>
  );
}
