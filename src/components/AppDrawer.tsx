import * as React from 'react';
import {Box, Drawer, List, ListItem, ListItemText} from '@mui/material';
import {Link} from 'react-router-dom';

interface AppDrawerProps {
    isOpen: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    menuItems: { text: string; link: string; }[];
}

export const AppDrawer: React.FC<AppDrawerProps> = ({ isOpen, toggleDrawer, menuItems }) => {
    return (
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer(false)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem
                            key={index}
                            component={Link}
                            to={item.link}
                            onClick={toggleDrawer(false)}
                        >
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
