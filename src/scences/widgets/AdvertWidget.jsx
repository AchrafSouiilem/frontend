import { Box, Typography } from "@mui/material";
import { FlexBetween } from "../../components/Flex.jsx";
import WidgetWrapper from "../../components/WidgetWrapper.jsx";
import LOGO from "../../images/white-logo.png";

const AdvertWidget = () => {
  const dark = "#E0E0E0";
  const medium = "#858585";

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Box color={dark} variant="h5" fontWeight="500" noWrap>
          Sponsored
        </Box>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={LOGO}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Typography color={dark} style={{ textAlign: "justify", padding: "5px" }}>
        Our goal is to create an environment that nurtures learning, provides
        opportunities for practice, and enables you to turn your dreams into
        reality.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
