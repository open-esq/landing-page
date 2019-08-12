import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Icon from "react-icons-kit";
import Box from "reusecore/src/elements/Box";
import data from "../../../data/Agency";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Container from "../../../components/UI/Container";
import GlideCarousel from "../../../components/GlideCarousel";
import GlideSlide from "../../../components/GlideCarousel/glideSlide";

import PricingTable, {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper
} from "./pricing.style";

import { checkmark } from "react-icons-kit/icomoon/checkmark";
import { italic } from "ansi-colors";

const PricingSection = ({
  sectionWrapper,
  row,
  secTitleWrapper,
  secHeading,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  priceLabelStyle,
  buttonStyle,
  buttonFillStyle,
  listContentStyle
}) => {
  const [state, setState] = useState({
    active: true
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(function() {
      setLoading(true);
    }, 500);
  });

  return (
    <Box {...sectionWrapper} id="pricing_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="PRICING" />
          <Heading
            {...secHeading}
            content="We accept Stripe, DAI, and USDC"
            style={{fontStyle: "italic"}}
          />
        </Box>
        <Box {...row}>
          <div className="wrapper">
            <>
              {data.pricingTable.map((pricingTable, index) => (
                <Container key={`pricing-table-${index}`}>
                  <PricingTable
                    freePlan={pricingTable.freePlan}
                    className="pricing_table"
                  >
                    <PricingHead>
                      <Heading content={pricingTable.name} {...nameStyle} />
                      <Text
                        content={pricingTable.description}
                        {...descriptionStyle}
                      />
                    </PricingHead>
                    <PricingPrice>
                      <Text content={pricingTable.price} {...priceStyle} />
                    </PricingPrice>
                    <a href={pricingTable.url}>
                      <Button
                        title={pricingTable.buttonLabel}
                        {...buttonFillStyle}
                      />
                    </a>
                  </PricingTable>
                </Container>
              ))}
            </>
            <style jsx>{`
              .wrapper {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 5px;
                text-align: center;
              }
            `}</style>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

PricingSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  nameStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  priceStyle: PropTypes.object,
  priceLabelStyle: PropTypes.object,
  listContentStyle: PropTypes.object
};

PricingSection.defaultProps = {
  sectionWrapper: {
    as: "section",
    pt: ["100px", "100px", "100px", "140px", "160px"],
    pb: ["60px", "80px", "80px", "100px"]
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center"
  },
  secTitleWrapper: {
    mb: ["50px", "75px"]
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "primary",
    mb: "5px"
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["15px", "20px"],
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    lineHeight: "1.67"
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: "15px",
    pl: "15px"
  },
  nameStyle: {
    fontSize: ["20px", "20px", "22px", "22px", "22px"],
    fontWeight: "500",
    color: "headingColor",
    letterSpacing: "-0.025em",
    textAlign: "center",
    mb: "12px"
  },
  descriptionStyle: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "textColor",
    lineHeight: "1.75",
    textAlign: "center",
    mb: "0"
  },
  priceStyle: {
    as: "span",
    display: "block",
    fontSize: ["36px", "36px", "40px", "40px", "40px"],
    color: "headingColor",
    textAlign: "center",
    mb: "5px",
    letterSpacing: "-0.025em"
  },
  priceLabelStyle: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    color: "textColor",
    lineHeight: "1.75",
    textAlign: "center",
    mb: "0"
  },
  buttonStyle: {
    type: "button",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "4px",
    pl: "10px",
    pr: "10px",
    bg: "#fff",
    color: "#2aa275",
    colors: "primaryWithBg",
    width: "222px",
    maxWidth: "100%"
  },
  buttonFillStyle: {
    type: "button",
    fontSize: "14px",
    fontWeight: "600",
    color: "white",
    borderRadius: "4px",
    pl: "10px",
    pr: "10px",
    colors: "primaryWithBg",
    width: "200px",
    maxWidth: "100%"
  },
  listContentStyle: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "textColor",
    mb: "0"
  }
};

export default PricingSection;
