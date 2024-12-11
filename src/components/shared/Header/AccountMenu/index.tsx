import {
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";

export default function AccountMenu() {
  const [menuElement, setMenuElement] = React.useState<null | HTMLElement>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuElement(event.currentTarget);
  };

  const handleClose = () => {
    setMenuElement(null);
  };

  return (
    <React.Fragment>
      <Tooltip
        title="تنظیمات کاربر"
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [5, -10],
                },
              },
            ],
          },
        }}
      >
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={menuElement ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={menuElement ? "true" : undefined}
        >
          <Avatar className="size-9">
            <img src="https://avatar.iran.liara.run/public/boy" />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={menuElement}
        id="account-menu"
        open={menuElement !== null}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "auto",
              filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.2))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: 20,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} className="flex gap-2">
          <Avatar />
          پروفایل
        </MenuItem>
        <MenuItem onClick={handleClose} className="flex gap-2">
          <Avatar />
          اکانت
        </MenuItem>
        <Divider variant="middle" />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <UserPlusIcon className="size-5" />
          </ListItemIcon>
          افزودن اکانت دیگر
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Cog6ToothIcon className="size-5" />
          </ListItemIcon>
          تنظیمات
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ArrowRightStartOnRectangleIcon className="size-5" />
          </ListItemIcon>
          خروج
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
