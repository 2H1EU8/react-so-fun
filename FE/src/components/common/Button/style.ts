import { Button as MuiButton, styled } from '@mui/material'

export const ButtonStyle = styled(MuiButton)(({theme}) => ({
   "&.btn-custom": {
    color: theme.palette.primary.contrastText,
    borderRadius: "12px",
    padding: "12px 20px",
    spacingLetter: "1%",
    textTransform: 'none',
    fontWeight: '700',
    lineHeight: '24px'
  },
  "&.btn-warning": {
    background: theme.palette.warning.main,
  },
  "&.btn-primary": {
    background: theme.palette.primary.main,
  },
  "&.btn-secondary": {
    background: '#fcfcfc',
    color: theme.palette.text.primary
  },
  "&.btn-success": {
    background: theme.palette.success.main,
  },
   "&.btn-error": {
    background: theme.palette.error.main,
  },
   "&.btn-circle": {
    borderRadius: "50%",
    padding: "20px 15px"
  },
  "&.Mui-disabled": {
    opacity: 0.5,
  },
  "&.MuiButton-sizeMedium": {
    fontSize: "15px",
  },
}));
