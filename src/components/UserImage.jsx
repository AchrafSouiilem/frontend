import { Box } from "@mui/material";

const baseURL = "https://backend-pi-gilt.vercel.app"

const UserImage = ({ image , size = "55px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${baseURL}/assets/${image}`}
        />
    </Box>
  );
};

export default UserImage;
