import React from 'react'
import { makeStyles, withStyles} from '@material-ui/core';

const Styles = {
    sideMenu: {
        display: 'flex',
        flexDirection:'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
        
    }
};

const SideMenu = (props)=> {
    const {classes} = props
    console.log(classes);
    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default withStyles(Styles)(SideMenu); // higher order functions
 