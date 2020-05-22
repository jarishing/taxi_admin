import React            from 'react';
import styled           from 'styled-components';

import { Doughnut }     from 'react-chartjs-2';

export default( props ) => {

    return(
        <PIE onClick={() => console.log(props)}>
            <div className="pie-title">
                {props.title}
            </div>
            <div className="pie-container-wrapper">
                <div className="pie-container">
                    <Doughnut 
                        data={props.data}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            legend: {
                                display: false,
                                position: 'bottom',
                                labels: {
                                    fontSize: '12'
                                }
                            }
                        }}
                    />
                </div>
                <div className="pie-legend">
                    {
                        props.data.labels.map((item,index) => (
                            <LegendItem key={index}>
                                <div className="legend-box" style={{'backgroundColor': props.data.datasets[0].backgroundColor[index]}}/>
                                <div className="legend-label">{item}</div>
                            </LegendItem>
                        ))
                    }
                </div>
            </div>
        </PIE>
    )
};

// <LegendItem>
//                         <div className="legend-box"/>
//                         <div className="legend-label">太子</div>
//                     </LegendItem>
// <Doughnut 
//                 data={props.data}
//             />

const LegendItem = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.5vh 0;

    &> .legend-box{
        width: 3vh;
        height: 3vh;
        border-radius: 3px;
        margin-right: 1vh;
    }

    &> .legend-label{
        font-size: 2vh;
    }
`

const PIE = styled.div`
    margin: 2.5vh;
    height: 36vh;
    background-color: #FFF;
    box-shadow: 0 1px 3px rgba(0,0,0,.55);

    &> .pie-title{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3vh;
        padding-top: 2vh;
    }

    &> .pie-container-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 29vh;
        width: 100%;

        &> .pie-legend{
            width: 30%;
            padding: 0 2vh;
        }

        &> .pie-container{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 70%;
        }
    }
`