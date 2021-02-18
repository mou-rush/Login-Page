import React from 'react';
import { Grid, TextField, Button, InputAdornment} from "@material-ui/core"
import {AccountCircle, LockRounded} from "@material-ui/icons"

const App: React.FC =() => {
  return (
    <div>
<Grid container style={{minHeight: '100vh'}}>
<Grid item xs={12} sm={6}>
<img src="https://images.unsplash.com/photo-1525197134674-4c3f02da2745?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
style={{width:"100%", height: "100%"}} 
alt="brand" />
</Grid>

<Grid container item xs={12} sm={6} alignItems="center" 
direction="column"
justify-content="space-between" 
style={{padding: 10}}> 
 <div/>
 <div style={{display: 'flex', flexDirection:"column",
 maxWidth: 400,
 minWidth: 300,
 }}
 >
<Grid container justify="center" >
<img src="https://images.unsplash.com/photo-1515552638994-8ce3dc5fea97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" 
width={200} 
alt="logo" 
/>
</Grid>
<TextField 
label="username" 
margin="normal" 
InputProps={{startAdornment: <InputAdornment position='start'><AccountCircle/></InputAdornment>}}/>
<TextField 
type="password"
label="password" margin="normal" 
InputProps={{startAdornment: <InputAdornment position='start'><LockRounded/></InputAdornment>}}/>
<div style={{height:20}}/>
<Button color="primary" variant="contained">
Log in
</Button>
<div style={{height:20}}/>
<Button>Interested in joining?</Button>
</div>
<div />

</Grid>
</Grid>
</div>
  );
}

export default App;
