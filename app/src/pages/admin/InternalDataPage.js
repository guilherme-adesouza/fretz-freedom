import React, {useEffect, useState} from "react";

import Api from "service/Api";
import {Bar} from "components/charts/Charts";


const InternalDataPage = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const _users = await Api.Fretz.User.getAll();
            setUsers(_users);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const createChartData = () => {
        const countAdmin = users.filter(u => u.admin).length
        return {
            labels: ['Admin', 'Comum'], 
            datasets: [{
                label: 'Usuários',
                data: [
                    countAdmin,
                    users.length - countAdmin,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        }
    }

    return (
        <div className="valign-wrapper row">
            <div className="col s6">
                <div className="card">
                    <Bar id="internal-bar-data-user" data={createChartData()} />
                </div>
            </div>
            <div className="col s6" style={{textAlign: 'center'}}>
                <div>
                    Novos gráficos em breve
                </div>
            </div>
        </div>
    )
}

export default InternalDataPage;