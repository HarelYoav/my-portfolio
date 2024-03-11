import {Box, Typography, createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme();

theme.typography.h6 = {
  fontFamily: 'Roboto, Helvetica, Arial ,sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: 1.75,
  letterSpacing: '0.00938em',
  // color: '#f8f8f8',
 
  [theme.breakpoints.up('md')]: {
    fontFamily: 'Roboto, Helvetica, Arial ,sans-serif',
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
};


const ProjectOverView = () => {

  return (
    <Box width={{xs: '90%', md: '60%'}} my={{xs: 3, md: 0}}>
      <ThemeProvider theme={theme}>
        <Typography variant='h6'>
          This project is hosted in Kubernetes Cluster that was created using a custom <a target='_blank' href='https://github.com/garutilorenzo/k3s-oci-cluster' style={{color:'inherit'}}>k3s-oci-cluster</a> which is currently private as it is still in development.
          Part of the customizations includes replacing the Ingress Nginx which is now installed with helm.
          In addition, Prometheues and Grafana were added to be able to monitor the resources and the Ingress in the cluster.
          This 'Portfolio' and the 'Battle-Ship' projects are deployed to the cluster using ArgoCD.
        </Typography>
        <Typography my={2}>
          View the Grafana dashboard of this project in this <a target='_blank' href='https://graf.yoavharel.com'>link</a> <br/>
          Username: read <br/>
          Password: 123456 <br/>
        </Typography>
      </ThemeProvider>
    </Box>
  )
}

export default ProjectOverView;