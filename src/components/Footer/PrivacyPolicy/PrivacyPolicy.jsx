import React from "react";
import backgroundImage from "../../../assets/pics/PrivacyPolicy.jpg";
import { useEffect, useRef } from "react";
import styles from "./PrivacyPolicy.module.css";
const PrivacyPolicy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div ref={containerRef} id="privacy-policy" className={styles.container}>
      <img
        className={styles.backgroundImage}
        src={backgroundImage}
        alt="Background"
      />
      <h1 className={styles.title}>Privacy & Data Protection Policy</h1>
      <h2 className={styles.heading2}>Introduction</h2>
      <p className={styles.paragraph}>
        Air Cairo is Committed to Protecting Your Personal Data and Privacy
        While Using Our Products and Services.
      </p>
      <p className={styles.paragraph}>
        The purpose of this Air Cairo Data Protection Policy is to inform you,
        as a visitor to Air Cairo website or as a user of Air Cairo services, of
        what kinds of information we may gather about you when you use our
        services, how we may use that information, to whom we disclose it, and
        the choices you have regarding our use of data.
      </p>
      <p className={styles.paragraph}>
        By making a booking or other purchase or otherwise giving your personal
        data to us, we will transfer, store, or process it as set out below. We
        will take all necessary steps to ensure that your data is treated
        securely and in accordance with this Privacy Policy.
      </p>
      <p className={styles.paragraph}>
        On some services we have arrangements with other carriers known as "Code
        Shares". This means that even if you have a reservation with us and hold
        a ticket where our name or airline designator code (SM) is indicated as
        the carrier, another carrier may operate the aircraft. In the event of a
        Code Share, Air Cairo will advise you of the Carrier operating the
        aircraft at the time you make your reservation.
      </p>
      <p className={styles.paragraph}>
        The legal basis for Air Cairo processing your personal data is the
        performance of our contracts with you (Article 6 (1) (b) GDPR),
        compliance with applicable law (Article 6 (1) (c) GDPR), and our
        legitimate interests (Article 6 (1) (f) GDPR). Our legitimate interests
        include ensuring the safety of our flights, services, and websites; and
        preventing fraud and other harm to us and third parties.
      </p>
      <h2 className={styles.heading2}>
        Which Companies does This Policy Apply to:
      </h2>
      <p className={styles.paragraph}>
        This Privacy Policy applies to sales of flight tickets and services
        offered by Air Cairo on Air Cairo managed websites and mobile websites,
        including, for example, aircairo.com, aircairoholidays.com, or through
        Air Cairo managed mobile applications, such as the Air Cairo App. In
        addition, this Policy does not apply to any other third-party website
        not owned and managed by Air Cairo.
      </p>
      <h2 className={styles.heading2}>
        What Types of Personal Data Do We Collect About You and Why
      </h2>
      <p className={styles.paragraph}>
        We collect certain personal data about you and about any other person
        you include in your booking. The sort of personal data we collect is
        information that you provide to us, that we collect from you or observe
        about you, or that we obtain from other sources.
      </p>
      <h2 className={styles.heading3}>
        The Types of Special Categories of Personal Information We Collect When
        you Make a Booking or Fly With Us Include:
      </h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Identity Data includes first name, middle name, last name, maiden
          name, username or similar identifier, marital status, title, date of
          birth, gender, passport number and.
        </li>
        <li className={styles.listItem}>
          Contact Data includes billing address, home address (if different),
          email address and telephone numbers.
        </li>
        <li className={styles.listItem}>
          For passengers landing in certain countries, we are required to
          provide details of the itinerary and booking details in our Passenger
          Name Record (PNR) system to border control, customs, and law
          enforcement officers at ports of entry and exit on your itinerary.
          This information is referred to as Advanced Passenger Information
          (API). We will share API with relevant authorities as required and
          permitted by local law. We will also share API with the relevant
          authorities if we are required to do so by law or if we believe that
          it is necessary to do so in order to protect our rights, protect your
          safety or the safety of others, investigate fraud, or respond to a
          government request.
        </li>
        <li className={styles.listItem}>
          Financial Data includes bank account and payment card details.
        </li>
        <li className={styles.listItem}>
          Transaction Data includes details about payments to and from you and
          other details of products and services you have purchased from us.
        </li>
        <li className={styles.listItem}>
          Technical Data includes internet protocol (IP) address, your login
          data, browser type and version, time zone setting, browser plug-in
          types and versions, operating system and platform, and other
          technology on the devices you use to access this website.
        </li>
        <li className={styles.listItem}>
          Profile Data includes your username and password, purchases or orders
          made by you, your interests, preferences, feedback and survey
          responses.
        </li>
        <li className={styles.listItem}>
          Usage Data includes information about how you use our website,
          products and services.
        </li>
        <li className={styles.listItem}>
          Marketing and Communications Data includes your preferences in
          receiving marketing from us and our third parties and your
          communication preferences.
        </li>
        <li className={styles.listItem}>
          Special Categories of Personal Data includes information about your
          health, including any medical conditions, disabilities, or dietary
          requirements, and any special assistance you may require.
        </li>
      </ul>
      <h2 className={styles.heading2}>How We Use Your Personal Data</h2>
      <p className={styles.paragraph}>
        We will only use your personal data when the law allows us to. Most
        commonly, we will use your personal data in the following circumstances:
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Where we need to perform the contract we are about to enter into or
          have entered into with you.
        </li>
        <li className={styles.listItem}>
          Where it is necessary for our legitimate interests (or those of a
          third party) and your interests and fundamental rights do not override
          those interests.
        </li>
        <li className={styles.listItem}>
          Where we need to comply with a legal or regulatory obligation.
        </li>
      </ul>
      <h2 className={styles.heading2}>Where We Store Your Personal Data</h2>
      <p className={styles.paragraph}>
        The data that we collect from you may be transferred to, and stored at,
        a destination outside the European Economic Area ("EEA"). It may also be
        processed by staff operating outside the EEA who work for us or for one
        of our suppliers. Such staff may be engaged in, among other things, the
        provision of support services. By submitting your personal data, you
        agree to this transfer, storing or processing. We will take all steps
        reasonably necessary to ensure that your data is treated securely and in
        accordance with this Privacy Policy.
      </p>
      <p className={styles.paragraph}>
        Unfortunately, the transmission of information via the internet is not
        completely secure. Although we will do our best to protect your personal
        data, we cannot guarantee the security of your data transmitted to our
        site; any transmission is at your own risk. Once we have received your
        information, we will use strict procedures and security features to try
        to prevent unauthorized access.
      </p>
      <h2 className={styles.heading2}>How Long We Keep Your Personal Data</h2>
      <p className={styles.paragraph}>
        We will only retain your personal data for as long as necessary to
        fulfil the purposes we collected it for, including for the purposes of
        satisfying any legal, accounting, or reporting requirements. To
        determine the appropriate retention period for personal data, we
        consider the amount, nature, and sensitivity of the personal data, the
        potential risk of harm from unauthorized use or disclosure of your
        personal data, the purposes for which we process your personal data and
        whether we can achieve those purposes through other means, and the
        applicable legal requirements.
      </p>
      <h2 className={styles.heading2}>How We Protect Your Personal Data</h2>
      <p className={styles.paragraph}>
        We have put in place appropriate security measures to prevent your
        personal data from being accidentally lost, used or accessed in an
        unauthorized way, altered or disclosed. In addition, we limit access to
        your personal data to those employees, agents, contractors and other
        third parties who have a business need to know. They will only process
        your personal data on our instructions and they are subject to a duty of
        confidentiality.
      </p>
      <p className={styles.paragraph}>
        We have put in place procedures to deal with any suspected personal data
        breach and will notify you and any applicable regulator of a breach
        where we are legally required to do so.
      </p>
      <h2 className={styles.heading2}>What Are Your Rights</h2>
      <p className={styles.paragraph}>
        Under certain circumstances, you have rights under data protection laws
        in relation to your personal data. These include the right to:
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Request access to your personal data (commonly known as a "data
          subject access request"). This enables you to receive a copy of the
          personal data we hold about you and to check that we are lawfully
          processing it.
        </li>
        <li className={styles.listItem}>
          Request correction of the personal data that we hold about you. This
          enables you to have any incomplete or inaccurate data we hold about
          you corrected, though we may need to verify the accuracy of the new
          data you provide to us.
        </li>
        <li className={styles.listItem}>
          Request erasure of your personal data. This enables you to ask us to
          delete or remove personal data where there is no good reason for us
          continuing to process it. You also have the right to ask us to delete
          or remove your personal data where you have exercised your right to
          object to processing (see below).
        </li>
        <li className={styles.listItem}>
          Object to processing of your personal data where we are relying on a
          legitimate interest (or those of a third party) and there is something
          about your particular situation which makes you want to object to
          processing on this ground as you feel it impacts on your fundamental
          rights and freedoms. You also have the right to object where we are
          processing your personal data for direct marketing purposes.
        </li>
        <li className={styles.listItem}>
          Request the restriction of processing of your personal data. This
          enables you to ask us to suspend the processing of personal data about
          you, for example if you want us to establish its accuracy or the
          reason for processing it.
        </li>
        <li className={styles.listItem}>
          Request the transfer of your personal data to you or to a third party.
          We will provide to you, or a third party you have chosen, your
          personal data in a structured, commonly used, machine-readable format.
          Note that this right only applies to automated information which you
          initially provided consent for us to use or where we used the
          information to perform a contract with you.
        </li>
        <li className={styles.listItem}>
          Withdraw consent at any time where we are relying on consent to
          process your personal data. However, this will not affect the
          lawfulness of any processing carried out before you withdraw your
          consent. If you withdraw your consent, we may not be able to provide
          certain products or services to you. We will advise you if this is the
          case at the time you withdraw your consent.
        </li>
      </ul>
      <p className={styles.paragraph}>
        If you wish to exercise any of the rights set out above, please contact
        us.
      </p>
      <h2 className={styles.heading2}>No fee usually required</h2>
      <p className={styles.paragraph}>
        You will not have to pay a fee to access your personal data (or to
        exercise any of the other rights). However, we may charge a reasonable
        fee if your request is clearly unfounded, repetitive or excessive.
        Alternatively, we may refuse to comply with your request in these
        circumstances.
      </p>
      <h2 className={styles.heading2}>What We May Need From You</h2>
      <p className={styles.paragraph}>
        We may need to request specific information from you to help us confirm
        your identity and ensure your right to access your personal data (or to
        exercise any of your other rights). This is a security measure to ensure
        that personal data is not disclosed to any person who has no right to
        receive it. We may also contact you to ask you for further information
        in relation to your request to speed up our response.
      </p>
      <h2 className={styles.heading2}>Time Limit to Respond</h2>
      <p className={styles.paragraph}>
        We try to respond to all legitimate requests within one month.
        Occasionally it may take us longer than a month if your request is
        particularly complex or you have made a number of requests. In this
        case, we will notify you and keep you updated.
      </p>
      <h2 className={styles.heading2}>Changes to Our Privacy Policy</h2>
      <p className={styles.paragraph}>
        We may change this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
