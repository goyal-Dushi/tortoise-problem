import {
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Fade,
} from '@mui/material';
import { CaretDown, CheckCircle } from '@phosphor-icons/react';
import React from 'react';

interface UpdateStatusBtnProps {}

const options = ['Approve', 'Pending', 'Delay'];

const UpdateStatusBtn: React.FC<UpdateStatusBtnProps> = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    event.stopPropagation();
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div ref={anchorRef} className="btn-group btn-group-sm">
        <button className="btn btn-sm status-btn" onClick={handleClick}>
          <CheckCircle
            weight="fill"
            height="inherit"
            width="inherit"
            className="status-btn__approve-check"
          />
          <span>{options[selectedIndex]}</span>
          <hr className="vr d-inline-block my-2" />
        </button>
        <button className="btn btn-sm caret-btn ps-0" onClick={handleToggle}>
          <CaretDown className="caret-btn__down-arr" />
        </button>
      </div>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        placement="bottom-start"
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={200}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(e) => handleMenuItemClick(e, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default UpdateStatusBtn;
