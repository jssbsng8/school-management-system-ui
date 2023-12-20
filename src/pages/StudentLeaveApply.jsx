import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { successToast, errorToast } from "../components/utils/toastUtils";
import {
  Box,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const StudentLeaveApply = () => {
    const [loading, setLoading] = useState(false);
    const imageInput = useRef(null);
    const [image, setImage] = useState("");
    const [fromDate, setFromDate] = useState(null);
    const [tillDate, setTillDate] = useState(null);

    const handleFromDateChange = (date) => {
        setFromDate(date);
    };

    const handleTillDateChange = (date) => {
        setTillDate(date);
    };

    const handleFormSubmit = async() => {
        setLoading(true)
        // Handle logic for checking exam results based on selectedSession and selectedClassroom
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        const response = {"ok": false, "status_code": 200};
        if (response.ok){
            console.log({
                "image": image,
                "fromDate": fromDate,
                "tillDate": tillDate,
            });
            setLoading(false)
            successToast('Submitted!')
        }
        else{
            errorToast('Error Submitting Form')
            setLoading(false)
        }
    };

    const UploadBox = styled(Box)({
        marginTop: 30,
        height: 200,
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderStyle: "dashed",
        borderWidth: "2px",
        borderColor: "divider",
    });

    return (
        <Box sx={{ pt: "80px", pb: "20px" }}>
        <Typography variant="h6" sx={{ marginBottom: "14px" }}>
            Apply For Leave of Absence
        </Typography>
        <Paper
            sx={{
            boxShadow: "none !important",
            borderRadius: "12px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "divider",
            p: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            cursor: "pointer",
            overflow: "hidden",
            }}
        >
            <Box sx={{ my: 2 }}>
            <TextField
                label="Student Name"
                variant="outlined"
                size="small"
                fullWidth
            />
            </Box>
            <Box sx={{ mt: 4 }}>
            <TextField
                label="Reason"
                variant="outlined"
                rows={4}
                fullWidth
                multiline
            />
            </Box>
            <Box sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                label="From"
                required
                fullWidth
                name="dob"
                type="date"
                id="dob"
                autoComplete="dob"
                onChange={(e) => handleFromDateChange(e.target.value)}
                />
            </Grid>
            </Box>
            <Box sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                required
                label="To"
                fullWidth
                name="dob"
                type="date"
                id="dob"
                autoComplete="dob"
                onChange={(e) => handleTillDateChange(e.target.value)}
                />
            </Grid>
            </Box>
            <input
            type="file"
            hidden
            ref={imageInput}
            onChange={(e) => setImage(e.target.files[0])}
            />
            <UploadBox onClick={() => imageInput.current.click()}>
            {image ? (
                <img
                src={image && URL.createObjectURL(image)}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
            ) : (
                <Box sx={{ textAlign: "center" }}>
                <BiImageAdd style={{ fontSize: "50px", color: "#027edd" }} />
                <Typography>
                    Drop Image Evidence here or{" "}
                    <span style={{ color: "#027edd", cursor: "pointer" }}>
                    browse
                    </span>
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                    JPG, PNG and GIF images are allowed
                </Typography>
                </Box>
            )}
            </UploadBox>
            <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "30px",
            }}
            >
            <LoadingButton 
                variant="contained" 
                // type="submit"
                onClick={handleFormSubmit} 
                loading={loading}
                loadingPosition="start"
                sx={{ mt: 3, mb: 2, width: "25%" }}
                >
                {loading ? 'Submitting...' : 'Submit'}
            </LoadingButton>
            </Box>
        </Paper>
        </Box>
    );
};

export default StudentLeaveApply;
