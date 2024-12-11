import { Box, List, ListItem } from "@mui/material";
import AccountMenu from "./AccountMenu";

export default function Header() {
  return (
    <Box component="header" className="flex h-14 items-center md:h-16">
      <List className="flex w-full px-10">
        <ListItem
          sx={{
            justifyContent: "end",
          }}
        >
          <AccountMenu />
        </ListItem>
      </List>
    </Box>
  );
}
