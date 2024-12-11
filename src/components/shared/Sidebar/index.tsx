import {
  ChevronRightIcon,
  InboxStackIcon,
  PresentationChartLineIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import {
  Box,
  createTheme,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  function handleSidebarExpand() {
    setIsSidebarExpanded((isExpanded) => !isExpanded);
  }

  const theme = createTheme({
    components: {
      MuiListItemButton: {
        styleOverrides: {
          root: {
            gap: "12px",
            "&.Mui-selected": {
              color: "rgb(0, 167, 111)",
              backgroundColor: "rgba(0, 167, 111, 0.08)",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "rgba(0, 167, 111, 0.16)",
                borderRadius: "10px",
              },
            },
            ":hover": {
              borderRadius: "10px",
            },
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: "unset",
            width: "24px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="aside"
        sx={{
          width: isSidebarExpanded ? 280 : 90,
          maxHeight: "100vh",
        }}
        className="relative border-l bg-zinc-50 p-4 transition-all duration-500 ease-in-out"
      >
        <button
          onClick={handleSidebarExpand}
          className="absolute -left-3 z-50 hidden cursor-pointer rounded-full border bg-zinc-50 p-1 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-800 md:block"
        >
          <ChevronRightIcon
            className={`${!isSidebarExpanded && "rotate-180"} size-3.5`}
          />
        </button>
        <nav className="h-full overflow-y-auto">
          <img src="fake_logo.png" width={80} className="mx-auto" />
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  selected={true}
                  sx={{
                    flexDirection: isSidebarExpanded ? "row" : "column",
                    transition: "all ease 100ms",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "inherit",
                    }}
                  >
                    <InboxStackIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="صفحه اصلی"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: isSidebarExpanded ? "14px" : "12px",
                      },
                    }}
                    sx={{
                      textAlign: isSidebarExpanded ? "right" : "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    flexDirection: isSidebarExpanded ? "row" : "column",
                    transition: "all ease 100ms",
                  }}
                >
                  <ListItemIcon>
                    <PresentationChartLineIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="گزارشات"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: isSidebarExpanded ? "14px" : "12px",
                      },
                    }}
                    sx={{
                      textAlign: isSidebarExpanded ? "right" : "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    flexDirection: isSidebarExpanded ? "row" : "column",
                    transition: "all ease 100ms",
                  }}
                >
                  <ListItemIcon>
                    <SparklesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="نسخه پرو"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: isSidebarExpanded ? "14px" : "12px",
                      },
                    }}
                    sx={{
                      textAlign: isSidebarExpanded ? "right" : "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    flexDirection: isSidebarExpanded ? "row" : "column",
                    transition: "all ease 100ms",
                  }}
                >
                  <ListItemIcon>
                    <SparklesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="نسخه پرو"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: isSidebarExpanded ? "14px" : "12px",
                      },
                    }}
                    sx={{
                      textAlign: isSidebarExpanded ? "right" : "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    flexDirection: isSidebarExpanded ? "row" : "column",
                    transition: "all ease 100ms",
                  }}
                >
                  <ListItemIcon>
                    <SparklesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="گزارش لحظه‌ای"
                    secondary="نسخه پرو"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: isSidebarExpanded ? "14px" : "12px",
                      },
                    }}
                    secondaryTypographyProps={{
                      sx: {
                        fontSize: isSidebarExpanded ? "12px" : "10px",
                      },
                    }}
                    sx={{
                      textAlign: isSidebarExpanded ? "right" : "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    flexDirection: isSidebarExpanded ? "row" : "column",
                    transition: "all ease 100ms",
                  }}
                >
                  <ListItemIcon>
                    <SparklesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="فعالیت‌های رانندگان"
                    secondary="نسخه پرو"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: isSidebarExpanded ? "14px" : "12px",
                      },
                    }}
                    secondaryTypographyProps={{
                      sx: {
                        fontSize: isSidebarExpanded ? "12px" : "10px",
                      },
                    }}
                    sx={{
                      textAlign: isSidebarExpanded ? "right" : "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    flexDirection: isSidebarExpanded ? "row" : "column",
                    transition: "all ease 100ms",
                  }}
                >
                  <ListItemIcon>
                    <SparklesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="نسخه پرو"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: isSidebarExpanded ? "14px" : "12px",
                      },
                    }}
                    sx={{
                      textAlign: isSidebarExpanded ? "right" : "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    flexDirection: isSidebarExpanded ? "row" : "column",
                    transition: "all ease 100ms",
                  }}
                >
                  <ListItemIcon>
                    <SparklesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="نسخه پرو"
                    primaryTypographyProps={{
                      sx: {
                        fontSize: isSidebarExpanded ? "14px" : "12px",
                      },
                    }}
                    sx={{
                      textAlign: isSidebarExpanded ? "right" : "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </nav>
      </Box>
    </ThemeProvider>
  );
}
