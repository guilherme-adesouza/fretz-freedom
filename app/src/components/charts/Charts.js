import React, {useEffect} from "react";
import Chart from "chart.js";


const DEFAULT_OPTS = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const createChart = (type = 'bar', {ctx, data, options = DEFAULT_OPTS}) => {
    return new Chart(ctx, {
        type,
        data,
        options
    })
};

export const Bar = ({id, data, options}) => {
    useEffect(() => {
        const el = document.getElementById(id);
        createChart('bar', {ctx: el, data, options});
    }, [data, options])
    return (
        <canvas id={id} width="50%"></canvas>
    )
};