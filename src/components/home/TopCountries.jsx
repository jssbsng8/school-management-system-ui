// import { Avatar, Box, Stack, Typography } from "@mui/material";
// import React from "react";
// import { countriesData } from "../../data/TopCountries";

// const TopCountries = () => {
//   return (
//     <Box sx={{ padding: "15px" }}>
//       <Typography variant="h5">Top Countries</Typography>
//       <Typography sx={{ fontSize: "12px", opacity: 0.7 }}>
//         Sales perfomance by country
//       </Typography>
//       <Box sx={{ my: 2 }}>
//         {countriesData.map(({ id, name, amount, flag }) => (
//           <Stack
//             direction={"row"}
//             alignItems="center"
//             justifyContent={"space-between"}
//             spacing={2}
//             key={id}
//             sx={{ my: 3 }}
//           >
//             <Stack direction={"row"} alignItems="center" spacing={1}>
//               <Avatar src={flag} sx={{ width: 30, height: 30 }} />
//               <Typography>{name}</Typography>
//             </Stack>
//             <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
//               ${amount}
//             </Typography>
//           </Stack>
//         ))}
//       </Box>
//     </Box>
//   );
// };

import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Users } from "../../data/customers";
import { transactions, transactionsColumns } from "../../data/transactions";
import Table from "../Table";

const TransactionCustomer = () => {
  return (
        <Paper
          sx={{
            boxShadow: "none !important",
            borderRadius: "12px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "divider",

            padding: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" sx={{ pb: 1 }}>
              Teachers List
            </Typography>
            <FaEllipsisH />
          </Box>
          <Divider />
          <Box sx={{ marginTop: 1 }}>
            {Users
              .slice(0, 2)
              .map(({ customer_id, customer_name, email, img }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "10px 0",
                  }}
                  key={customer_id}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar src={img} sx={{ width: 30, height: 30 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: "18px" }}>
                        {customer_name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
                        {email}
                      </Typography>
                    </Box>
                  </Box>
                  <FaEllipsisH />
                </Box>
              ))}
          </Box>
          <Divider />
          <Typography variant="subtitle1" sx={{ textAlign: "center", mt: 1 }}>
            <Link to="/customers" className="link">
              View more
            </Link>
          </Typography>
        </Paper>
  );
};

export default TransactionCustomer;
