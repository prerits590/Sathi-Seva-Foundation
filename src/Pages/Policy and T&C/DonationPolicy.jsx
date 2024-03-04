import "./policy.css";

const DonationPolicy = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap max-md:px-4 max-md:pt-32 px-20 py-24 mx-auto items-center">
          <div className="md:w-full md:pr-12 md:py-8  mb-10 md:mb-0 pb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Donation Policy
            </h1>

            <br />

            {/* ---------- 1 ------------ */}
            <div className="text-box">
              <h2 className="font-medium text-black">1. Our Commitment:</h2>
              <br />
              <p>
                Sathi Sewa Foundation is committed to making a positive
                impact on society by [we are a ngo community where we help
                everyone to rise funds and make impact on rural area ]. We rely
                on the generous support of individuals and organizations to help
                us achieve our mission. This donation policy outlines our
                commitment to transparency, accountability, and the responsible
                use of funds.
              </p>
              <br />
            </div>

            {/* ------------ 2 ------------- */}
            <div className="text-box">
              <h2 className="font-medium text-black">2. Types of Donations:</h2>
              <br />
              <p>
                We accept donations in the form of one-time contributions,
                recurring donations, and corporate sponsorships. Whether big or
                small, every donation is instrumental in driving positive
                change.
              </p>
              <br />
            </div>

            {/* ---------- 3 ------------ */}
            <div className="text-box">
              <h2 className="font-medium text-black">
                3. Transparency and Accountability:
              </h2>
              <br />
              <p>
                We are dedicated to maintaining transparency in all our
                financial transactions. Donors can request information about how
                their contributions are utilized, and we provide regular updates
                on the impact of our programs. Financial statements and reports
                are available upon request.
              </p>
              <br />
            </div>

            {/* ------------ 4 ------------- */}
            <div className="text-box">
              <h2 className="font-medium text-black">
                4. Privacy and Security:
              </h2>
              <br />
              <p>
                We prioritize the privacy and security of our donors' personal
                information. All financial transactions made through our website
                are encrypted and comply with industry standards for security.
                We do not share or sell donor information to third parties.
              </p>
              <br />
            </div>

            {/* ---------- 5 ------------ */}
            <div className="text-box">
              <h2 className="font-medium text-black">5. Tax Deductibility:</h2>
              <br />
              <p>
                Sathi Sewa Foundation is a registered non-profit
                organization, and donations are tax-deductible to the extent
                allowed by law. Donors will receive a receipt for their
                contributions, detailing the amount donated and confirming our
                non-profit status.
              </p>
              <br />
            </div>

            {/* ------------ 6 ------------- */}
            <div className="text-box">
              <h2 className="font-medium text-black">6. Refund Policy:</h2>
              <br />
              <p>
                If a donor makes an error in their donation amount or wishes to
                request a refund, they may contact us within 30 days of the
                donation date. Refunds will be issued using the original method
                of payment.
              </p>
              <br />
            </div>

            {/* ---------- 7 ------------ */}
            <div className="text-box">
              <h2 className="font-medium text-black">
                7. Corporate Social Responsibility (CSR) Partnerships:
              </h2>
              <br />
              <p>
                We actively seek partnerships with corporations interested in
                supporting social causes. If your company is interested in a CSR
                collaboration, please reach out to our team to discuss potential
                projects and collaborations.
              </p>
              <br />
            </div>

            {/* ------------ 8 ------------- */}
            <div className="text-box">
              <h2 className="font-medium text-black">8. Contact Information</h2>
              <br />
              <p>
                For any inquiries related to donations or our donation policy,
                please contact us at [satyajitsamal329@gmail.com] or
                [6371313613].
              </p>
              <br />
            </div>

            {/* ------------- 9 ------------ */}

            <div className="text-box">
              <h2 className="text-black font-medium">
                9. Modifications to this Policy:
              </h2>
              <br />

              <p>
                Sathi Sewa Foundation reserves the right to modify this
                donation policy at any time. Any changes will be posted on our
                website, and donors are encouraged to review this policy
                periodically.
                <br /> <br />
                Thank you for supporting [Sathi Sewa Foundation] in our
                mission to create positive change in the world!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonationPolicy;
