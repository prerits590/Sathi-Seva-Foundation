import "./policy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap max-md:px-4 max-md:pt-32 px-20 py-24 mx-auto items-center">
          <div className="md:w-full md:pr-12 md:py-8  mb-10 md:mb-0 pb-10">
            <h1 className="sm:text-3xl text-2xl font-medium  mb-2 text-gray-900">
              Privacy Policy
            </h1>

            <p>
              Thank you for visiting{" "}
              <span className="text-blue-500">
                https://sathisewa.netlify.app
              </span>{" "}
              website. We respect your privacy and are committed to protecting
              your personal information. This Privacy Policy outlines how we
              collect, use, disclose, and safeguard your information when you
              visit our website.
            </p>
            <br />

            {/* ---------- 1 ------------ */}
            <div className="text-box">
              <h2 className="font-medium text-black">
                1. Information We Collect
              </h2>
              <br />
              <p>
                We collect personal information when you voluntarily provide it
                to us, such as when you fill out forms on our website, subscribe
                to newsletters, or make donations. The information may include
                but is not limited to your name, email address, phone number,
                and donation details.
              </p>
              <br />
            </div>

            {/* ------------ 2 ------------- */}
            <div className="text-box">
              <h2 className="font-medium text-black">
                2. How We Use Your Information
              </h2>
              <br />
              <p>
                We use the collected information for the following purposes:
                <br /> <br />
                <ol type="a">
                  <li>To process donations and provide receipts.</li>
                  <li>
                    To communicate with you about our activities, campaigns, and
                    events.
                  </li>
                  <li>To send newsletters and updates.</li>
                  <li>To improve our website and services.</li>
                  <li>To comply with legal and regulatory requirements.</li>
                </ol>
              </p>
              <br />
            </div>

            {/* ---------- 3 ------------ */}
            <div className="text-box">
              <h2 className="font-medium text-black">
                3. Sharing of Information
              </h2>
              <br />
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information with
                trusted partners and service providers who assist us in
                operating our website and conducting our activities. These third
                parties are bound by confidentiality agreements and are
                prohibited from using your information for any other purpose.
              </p>
              <br />
            </div>

            {/* ------------ 4 ------------- */}
            <div className="text-box">
              <h2 className="font-medium text-black">
                4. Cookies and Tracking Technologies
              </h2>
              <br />
              <p>
                We use cookies and similar technologies to enhance your
                experience on our website. These technologies collect
                information about your browsing behavior and help us analyze
                website traffic. You can control cookie preferences through your
                browser settings.
              </p>
              <br />
            </div>

            {/* ---------- 5 ------------ */}
            <div className="text-box">
              <h2 className="font-medium text-black">5. Security Measures</h2>
              <br />
              <p>
                We take reasonable and appropriate measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, and destruction. However, no method of transmission
                over the internet or electronic storage is completely secure,
                and we cannot guarantee absolute security.
              </p>
              <br />
            </div>

            {/* ------------ 6 ------------- */}
            <div className="text-box">
              <h2 className="font-medium text-black">
                6. Links to Third-Party Websites
              </h2>
              <br />
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                websites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>
              <br />
            </div>

            {/* ---------- 7 ------------ */}
            <div className="text-box">
              <h2 className="font-medium text-black">
                7. Changes to this Privacy Policy
              </h2>
              <br />
              <p>
                We reserve the right to update and modify this Privacy Policy at
                any time. Any changes will be effective immediately upon posting
                on our website. Please check this page periodically for updates.
              </p>
              <br />
            </div>

            {/* ------------ 8 ------------- */}
            <div className="text-box">
              <h2 className="font-medium text-black">8. Contact Information</h2>
              <br />
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy, please contact us at [Your Contact Email
                Address].
              </p>
              <br />
            </div>

            <p>
              By using our website, you consent to the terms of this Privacy
              Policy.
            </p>
            <br />

            <div className="text-box">
              <h2 className="text-black font-medium">
                Address of Sathi Sewa Foundation -{" "}
              </h2>
              <a href="https://g.co/kgs/ddLpgCk">
                <p className="text-blue-500">
                  Mill Road, Ganj Basoda (M.P) , India Pin- 464221
                </p>
              </a>
              <a href="tel:+91 88391 70393">+91 88391 70393</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
