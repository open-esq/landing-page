import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Image from "reusecore/src/elements/Image";
import Button from "reusecore/src/elements/Button";
import Container from "../../../components/UI/Container";

const ContactSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  buttonStyle,
  buttonWrapper
}) => {
  return (
    <Box {...sectionWrapper} as="section" id="contactSection">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Let’s Work Together" />
          <Text
            {...secDescription}
            content="Get in touch with us to chat about how blockchain technology can propel your business or organization into the future."
          />
        </Box>

        <Box {...buttonWrapper}>
          <a href="mailto:info@openesq.tech">
            <Button
              title="INFO@OPENESQ.TECH"
              className="portfolio_button"
              {...buttonStyle}
            />
          </a>
        </Box>
        <Box {...buttonWrapper}>
          <Text
            as="span"
            content="Become part of our ever growing community."
          />

          <span>&nbsp;</span>

          <Link href="https://t.me/OpenEsquire">
            <a className="">Join us on Telegram. </a>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  replyWrapper: PropTypes.object,
  replyTime: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonWrapper: PropTypes.object
};

ContactSection.defaultProps = {
  sectionWrapper: {
    pt: ["70px", "80px", "100px", "110px", "140px"],
    pb: ["70px", "80px", "100px", "110px", "140px"],
    bg: "#f9f9f9"
  },
  secTitleWrapper: {
    mb: "30px"
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
    textAlign: "center"
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    textAlign: "center",
    width: "600px",
    maxWidth: "100%",
    ml: "auto",
    mr: "auto",
    mb: "0"
  },
  replyWrapper: {
    flexBox: true,
    alignItems: "center",
    justifyContent: "center"
  },
  replyTime: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#302b4e",
    mb: 0
  },
  buttonStyle: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    pl: "23px",
    pr: "23px"
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
    mt: "50px"
  }
};

export default ContactSection;
