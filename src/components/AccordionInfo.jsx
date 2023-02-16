import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Typography,
} from '@mui/material'

export default function AccordionInfo({ title, children }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={'^'}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}
