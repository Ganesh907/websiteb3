import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['HOME', 'TECHNOLOGY', 'RECRUITMENT', 'CONTACT', 'ABOUT US', 'CAREER'];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElHomeMenu, setAnchorElHomeMenu] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenHomeMenu = (event) => {
    setAnchorElHomeMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseHomeMenu = () => {
    setAnchorElHomeMenu(null);
  };

  return (
    <div className='p-[2px] m-auto fixed w-full z-50 top-[0px]'>
      <AppBar position='sticky'
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          margin: { xs: '0', md: '15px auto' },
          width: { xs: '100%', md: '90%' },
          borderRadius: '10px',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <div className='flex align-middle'>
                <h1 className='text-[#0d6efd] font-bold text-2xl p-1 bg-white rounded-full text-center w-10 h-10 me-4'>B3</h1>
                <h1 className='align-middle text-2xl justify-center items-center flex' style={{ letterSpacing: '.3rem' }}>BitByBit Solutions</h1>
              </div>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{
              flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', columnGap: '50px'
            }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={page === 'RECRUITMENT' || page === 'TECHNOLOGY' ? handleOpenHomeMenu : handleCloseNavMenu}
                  sx={{
                    color: 'white', display: 'block',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    ":hover": { backgroundColor: 'white', color: 'black', scale: '1.1', fontWeight: '700', transition: 'ease-in-out' }
                  }}
                  className='shadow-2xl drop-shadow-lg'
                >
                 {(page === 'RECRUITMENT' || page === 'TECHNOLOGY') ? `${page} \u25BC` : page}

              
                </Button>
              ))}  
            </Box>

            {/* Menu for Home page */}
            <Menu
              id="home-menu"
              anchorEl={anchorElHomeMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElHomeMenu)}
              onClose={handleCloseHomeMenu}
            >
              <MenuItem onClick={handleCloseHomeMenu}>Option 1</MenuItem>
              <MenuItem onClick={handleCloseHomeMenu}>Option 2</MenuItem>
              <MenuItem onClick={handleCloseHomeMenu}>Option 3</MenuItem>
              <MenuItem onClick={handleCloseHomeMenu}>Option 4</MenuItem>
            </Menu>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Appbar;
