import React, { useState } from "react";
import { Typography, Paper, Box, IconButton, Drawer, Divider } from "@mui/material";
import { MdMessage } from "react-icons/md";
import { notices } from "../data/noticesboardData";


const NoticeBoard = () => {
    const [drawerState, setDrawerState] = useState({ right: false });
    const [selectedNotice, setSelectedNotice] = useState(null);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
          return;
        }
        setDrawerState({ ...drawerState, [anchor]: open });
      };
    
      const handleNoticeClick = (notice) => {
        setSelectedNotice(notice);
        setDrawerState({ ...drawerState, right: true });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: 500, paddingTop: "30px", paddingLeft: "20px", paddingRight: "20px" }}
          role="presentation"
        >
          <Typography variant="h6">Notice Details</Typography>
          <Divider sx={{ bgcolor: '#fff' }}/><br />
          {selectedNotice && (
            <div>
              <Typography variant="h6">{selectedNotice.title}</Typography>
              <Typography>{selectedNotice.message}</Typography>
            </div>
          )}
          
        </Box>
    );
    return (
        <React.Fragment key="right">
        <Box sx={{ pt: "80px", pb: "20px" }}>
            <Typography variant="h6" sx={{ marginBottom: "14px" }}>
            Notice Board
            </Typography>
            {notices.map((notice) => (
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
                <Typography variant="h6" sx={{ marginLeft: "10px" }} onClick={() => handleNoticeClick(notice)}>
                {notice.title}
                </Typography>
            </Paper>
            ))}
        </Box>
        <Drawer anchor="right" open={drawerState["right"]} onClose={toggleDrawer("right", false)}>
            {list("right")}
        </Drawer>
        </React.Fragment>
    );
};

export default NoticeBoard;
