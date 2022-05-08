import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Box,
  Stack,
} from "@mui/material";
import { UserContext } from "../user/reducer/userReducer";
import AccountCard from "./AccountCard";
import EditForm from "./EditForm";

function Account() {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(UserContext);
  // console.log(userState.user);
  const isLogin = !!userState.user;
  if (isLogin === false)
    // navigate("/"); 왜안되지..? //임시...
    window.location.replace("/");
  const { name, email, password } = userState.user;

  return (
    <Box
      sx={{
        marginLeft: "5%",
        marginRight: "5%",
      }}
      // clssName={style.bo}
    >
      <Stack className="AccountContent">
        <Grid item xs={12} md={12} mt={13}>
          <Grid container>
            <Grid item xs={4} md={3}></Grid>
            <Grid item xs={4} md={6}>
              <AccountCard props={{ name, email, password }} />
            </Grid>
            <Grid item xs={4} md={3}></Grid>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Account;
