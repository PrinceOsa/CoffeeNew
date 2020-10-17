import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';



function HomePage() {

    var dataSource = {
        datasets: [{
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                'green',
                'purple',
                'grey'
            ]
        }
    ],
    labels: []
    
    };
    function createChart(){
        let ctx = document.getElementById("myChart");
        let myPieChart = new Chart(ctx, {
        type: 'pie',
        data: dataSource
      });
      }
      function getBudget() {
        axios.get('http://localhost:3000/budget')
        .then(function(res) {
            console.log(res.data);
            for (let i = 0; i < res.data.budget.myBudget.length; i++){
                dataSource.datasets[0].data[i] = res.data.budget.myBudget[i].budget;
                dataSource.labels[i] = res.data.budget.myBudget[i].title;
            }
    
        createChart();
        });
      }

  return (
    <main className="container center">

        <div className="page-area">

            <div className="text-box">
                <section>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </section>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>   

            <div className="text-box">
          <h1>Chart</h1>
          <div>
            <div>
            {getBudget()}
             </div>
             <canvas id="myChart" width="400" height="400"></canvas>
          </div>
        </div>

        </div>

    </main>
  );
}

export default HomePage;
