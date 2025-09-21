import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const linkSections = [
    {
      title: "Information",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      title: "Service",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      title: "My Account",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      title: "Our Offers",
      links: [
        "About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
  ];

  return (
    <footer className="bg-[#BCDDFE] text-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-12 px-16 grid grid-cols-1  md:grid-cols-3 gap-8 mb-1 text-center md:text-left">
          <div className="w-full md:w-1/2 lg:w-[227px]">
            <div className="w-[123px] mx-auto md:mx-0">
              <img src="/Images/Group-491.png" alt="Company Logo" />
            </div>
            <p className="text-[12px] mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div> 

          <div className="w-full md:w-1/2 lg:w-[220px]">
            <h3 className="text-[18px] font-semibold mb-4">Follow Us</h3>
            <p className="text-[12px] mb-4">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a className="text-blue-600 hover:text-blue-800 cursor-pointer">
                <FaFacebookF size={20} />
              </a>
              <a className="text-cyan-500 hover:text-cyan-700 cursor-pointer">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-[220px]">
            <h3 className="text-[18px] font-semibold mb-4">Contact Us</h3>
            <p className="text-[12px]">
              E-Comm, 4578 <br />
              Marmora Road, <br />
              Glasgow D04 89GR
            </p>
          </div>
        </div>

        <div className="grid py-6 px-18 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link}>
                    <a className="text-[14px] hover:underline cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-50 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-zinc-300 mb-4 sm:mb-0">
            © 2025 All Rights Reserved
          </p>
          <div className="w-38 relative right-4">
           
            <img src="/Images/Brands.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
