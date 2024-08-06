"use client";

import { Box, Button, CssBaseline, Drawer, List } from "@mui/material";
import MenuLinkButton from "@/components/ui/MenuLinkButton";
import Image from "next/image";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { ReactNode } from "react";
import ENVIRONMENT from "@/config/environment";
import { signOut } from "next-auth/react";

const drawerWidth = 280;
const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <HomeOutlinedIcon />,
  },
  {
    label: "My Appointments",
    href: "/my-appointments",
    icon: <ListAltOutlinedIcon />,
  },
  {
    label: "AI Assistant",
    href: "/ai-assistant",
    icon: <ChatOutlinedIcon />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <PersonOutlineOutlinedIcon />,
  },
];

type DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const handleSignout = () => signOut({ callbackUrl: "/" });
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          paddingTop={5}
          paddingBottom={12}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100vh"
        >
          <div>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              marginBottom={4}
            >
              <Image
                src={`${ENVIRONMENT.NEXT_PUBLIC_APP_URL}/images/logo.png`}
                alt="logo"
                width={120}
                height={80}
              />
            </Box>
            <List>
              {menuItems.map((item) => (
                <MenuLinkButton
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </List>
          </div>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingX={3}
          >
            <Button
              fullWidth
              sx={{
                color: "#464255",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "#deddd9",
                },
              }}
              disableElevation
              variant="contained"
              startIcon={<LogoutIcon />}
              onClick={handleSignout}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Box
        component="div"
        sx={{
          flexGrow: 1,
          bgcolor: "#f0f3f7",
          p: 3,
          height: "100%",
          minHeight: "100vh",
          paddingTop: 6,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
