import * as React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const AcceptList = (ACCEPT_LIST_STORE) => {
  let acceptedArray = ACCEPT_LIST_STORE.Data.filter((items) => {
    return items.status === 'Accepted'
  })

  const onUndo = (items) => {
    //dispatch
    ACCEPT_LIST_STORE.undoFuncHandler({ 
      id: items.id,
      name: items.name,
      status: 'Accepted',
    })
  }
  return (
    <>
      <Paper elevation={12} sx={{
        paddingBottom: '1rem',
        width: '50%',
        minWidth: 'fit-content',
        marginTop: '2rem',
        mx: 'auto'
      }}
      >
        <Container>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Accept Test List</Typography>
          {acceptedArray.map((items) => {
            return (
              <Paper elevation={5} id={items.id}>
                <Box sx={{
                  m: 1,
                  p: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <Box>
                    <Typography variant="body1" color="secondary.main">
                      {items.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="secondary.main">
                      {items.status}
                    </Typography>
                  </Box>
                  <Button sx={{ borderRadius: '0.7rem' }} size="small" variant="contained" color="info" onClick={() => onUndo(items)}
                  >
                    Undo
                  </Button>
                </Box>
              </Paper>
            )
          })}
        </Container>
      </Paper>
    </>
  );
}

export default AcceptList;