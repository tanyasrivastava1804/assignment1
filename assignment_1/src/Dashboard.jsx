import React from "react";
import data from './sample.json'
import './Dashboard.css'
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Icon,
    Table,
    ItemDescription,
    Button,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Dashboard = () => {

    return (
        <div className="parent-container">
            <div>
                <div className="button-container">
                    <Button className="button">
                        <Icon name="file outline" />
                        Project Name
                    </Button>
                    <ItemDescription className="item-text">
                        {data.project_name}
                    </ItemDescription>
                    <Button>
                        <Icon name="database" />
                        Output Dataset Name
                    </Button>
                    <ItemDescription className="item-text">
                        {data.output_name}
                    </ItemDescription>
                    <Button >
                        Last Run
                    </Button>
                    <ItemDescription className="item-text">
                        {data.last_run}
                    </ItemDescription>
                </div>
                <div>
                    <ItemDescription className="row">
                        Row count:
                        {data.row_count}
                    </ItemDescription>
                </div>
            </div>
            <div className="table-container">
                <Table celled>
                    <TableHeader>
                        <TableRow>
                            {data.table_headers.map((header) => (
                                <TableHeaderCell scope="col">
                                    {header.name}
                                </TableHeaderCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            {data.table_headers.map((header) => (
                                <TableHeaderCell scope="col">
                                    <select>
                                        <option>{header.type}</option>
                                    </select>

                                </TableHeaderCell>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.table_data.map((entry) => (
                            <TableRow>
                                {entry.map((data) => (
                                    <TableCell>{data}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Dashboard;
