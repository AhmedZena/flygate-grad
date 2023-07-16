import React from "react";
import backgroundImage from "../../../assets/pics/TermsAndConditions.jpg";
import styles from "./TermsAndConditions.module.css";
import { useEffect, useRef } from "react";

const TermsAndConditions = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div
      className={styles.container}
      ref={containerRef}
      id="terms-and-conditions"
    >
      <img
        className={styles.backgroundImage}
        src={backgroundImage}
        alt="Background"
      />
      <h1 className={styles.title}>Terms and Conditions</h1>
      <p className={styles.paragraph}>
        By accessing and using this website, you agree to be bound by the
        following terms and conditions:
      </p>
      <h2 className={styles.heading}>Intellectual Property Rights</h2>
      <p className={styles.paragraph}>
        All intellectual property rights in the website and its content belong
        to us or our licensors. You may not reproduce or use any of the content
        without our prior written consent.
      </p>
      <h2 className={styles.heading}>Disclaimer</h2>
      <p className={styles.paragraph}>
        The content on this website is provided on an "as is" basis without any
        representations or warranties, express or implied. We do not warrant
        that the website or its content will be accurate, reliable, or free from
        errors or omissions.
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          We reserve the right to modify or discontinue the website at any time
          without notice.
        </li>
        <li className={styles.listItem}>
          We are not responsible for any loss or damage that may arise from your
          use of the website or its content.
        </li>
        <li className={styles.listItem}>
          We are not responsible for the content of any third-party websites
          linked to from this website.
        </li>
      </ul>
      <h2 className={styles.heading}>Indemnification</h2>
      <p className={styles.paragraph}>
        You agree to indemnify and hold us harmless from any and all claims,
        liabilities, damages, and expenses (including attorneys' fees) arising
        from your use of the website or its content.
      </p>
      <h2 className={styles.heading}>Governing Law</h2>
      <p className={styles.paragraph}>
        These terms and conditions shall be governed by and construed in
        accordance with the laws of the United States.
      </p>
    </div>
  );
};

export default TermsAndConditions;
