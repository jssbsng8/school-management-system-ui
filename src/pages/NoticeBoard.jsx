import React, { useState } from "react";
import {
  Typography,
  Paper,
  Box,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import { MdMessage } from "react-icons/md";
import { useUser } from "../components/utils/userContext";
import requestHandler from "../apiCalls/requestHandler";
import { USER_ENDPOINTS } from "../apiCalls/endpoints";
import { Link } from "react-router-dom";

const NoticeBoard = () => {
  const { notifications } = useUser();
  const [drawerState, setDrawerState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const handleNoticeClick = async (notice) => {
    try {
      await requestHandler(
        "patch",
        USER_ENDPOINTS.UPDATE_NOTIFICATION_STATUS(notice.id),
        { read: true }
      );
    } catch (error) {
      console.error("Failed to update notification status:", error);
    }
    setDrawerState({ ...drawerState, right: true });
  };

  const renderNoticeDetails = (notice) => (
    <Box
      sx={{
        width: 500,
        paddingTop: "30px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
      role="presentation"
    >
      <Typography variant="h6">Notice Details</Typography>
      <Divider sx={{ bgcolor: "#fff" }} />
      <br />
      <div>
        <Typography variant="h6">{notice.subject}</Typography>
        <Typography>{notice.message}</Typography>
        <br />
        {notice.subject.includes("New User Registration") && (
          <>
            If the user's profile has been reviewed, you can approve the user
            profile using this link <Link to="/users">Approve User</Link>.
          </>
        )}
      </div>
    </Box>
  );

  return (
    <React.Fragment key="right">
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <Typography variant="h6" sx={{ marginBottom: "14px" }}>
          Notice Board
        </Typography>
        {notifications.map((notice) => (
          <Paper
            key={notice.id}
            sx={{
              boxShadow: "none !important",
              borderRadius: "12px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "divider",
              p: "20px",
              mb: "16px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <IconButton onClick={() => handleNoticeClick(notice)} size="small">
              <MdMessage />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ marginLeft: "10px" }}
              onClick={() => handleNoticeClick(notice)}
            >
              {notice.subject}
            </Typography>
            <Drawer
              anchor="right"
              open={drawerState["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {renderNoticeDetails(notice)}
            </Drawer>
          </Paper>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default NoticeBoard;
