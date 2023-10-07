import {
  EditOutlined,
  DeleteOutlined,
  ImageOutlined,
  GifBoxOutlined,
  AttachFileOutlined,
  MicOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { createPost } from "../../Redux/Actions/postActions.js";
import { FlexBetween } from "../../components/Flex.jsx";
import Dropzone from "react-dropzone";
import UserImage from "../../components/UserImage.jsx";
import WidgetWrapper from "../../components/WidgetWrapper.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const MyPostWidget = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("");
  const [isImage, setIsImage] = useState(false);
  const { _id } = useSelector((state) => state.authReducer.user);
  const userId = _id
  const user = useSelector(state => state.authReducer.user)
  const userImage = user.picturePath.path
  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", description);
    if (!image) {
      formData.append("picture", image);
      formData.append("image", image.name);
    }

    dispatch(createPost({description, image, userId}, userId ));
    setImage("");
    setDescription("");
  };

  const mediumMain = "#A3A3A3";
  const medium = "#858585";
  
  const isNonMobileScreens = useMediaQuery("(max-width: 412px)");
  return (
    <WidgetWrapper marginBottom={"20px"}>
      <FlexBetween gap="1.5rem">
        <UserImage image={userImage} />
        <InputBase
          placeholder="What's on your mind..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{
            color: "#E0E0E0",
            width: "100%",
            backgroundColor: "#333333",
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed #00D5FA`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p style={{ color: "#99EEFD", margin: "0px"}}>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography style={{ color: "#99EEFD", margin: "0px"}}>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage("")}
                    sx={{ width: "15%", color: "#fffaf3" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}
      <div>
      <Divider sx={{ margin: "1.25rem 0" }} />
      </div>

      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>
        {isNonMobileScreens ? (<></>
        ) : (
        <>
        <FlexBetween gap="0.25rem">
          <GifBoxOutlined sx={{ color: mediumMain }} />
          <Typography color={mediumMain}>Clip</Typography>
        </FlexBetween>

        <FlexBetween gap="0.25rem">
          <AttachFileOutlined sx={{ color: mediumMain }} />
          <Typography color={mediumMain}>Attachment</Typography>
        </FlexBetween>

        <FlexBetween gap="0.25rem">
          <MicOutlined sx={{ color: mediumMain }} />
          <Typography color={mediumMain}>Audio</Typography>
        </FlexBetween>
        </>
        )}
        <Button
          disabled={!description}
          onClick={handlePost}
          sx={{
            color: "#1A1A1A",
            backgroundColor: "#00D5FA",
            borderRadius: "3rem",
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
