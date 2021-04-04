import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        width: 500,
        minWidth: 500,
        height: 500,
        position: 'relative',
        left: '12%',
        margin: '3% 5% 0 5%',
    },
    rel: {
        width: 500,
        minWidth: 500,
        height: 500,
        position: 'relative',
        left: '20%',
        margin: '3% 5% 5% 5%'
    }
});

const ProfileBody = (props) => {
    const { relevantSkills, relevantExperience } = props.person
    const classes = useStyles();
    return (
        <body>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Skills</TableCell>
                        <TableCell align="right">Years of Exp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {relevantSkills.map((row) => (
                        <TableRow key={row.skill}>
                            <TableCell component="th" scope="row">
                                {row.skill}
                            </TableCell>
                            <TableCell align="right" >{row.exp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Table className={classes.rel} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Relevant Experience</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={relevantExperience}>
                        <TableCell component="th" scope="row">
                            {relevantExperience.substring(0, 1500)}...
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </body>
    )
}


export default ProfileBody