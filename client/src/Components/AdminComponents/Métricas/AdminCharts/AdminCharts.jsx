import styles from './AdminCharts.module.css';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";

import { Companies_Posts } from './Charts/Companies-Posts.jsx';
import { Companies_Plan } from './Charts/Companies-Plan';
import { TotalTalents } from './Charts/TotalTalents';
import { TotalCompanies } from './Charts/TotalCompanies';

Chart.register(CategoryScale);

const AdminCharts = () => {
    const monthLabels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

    const [companiesPostsData, setcompaniesPostsData] = useState([]);
    const [proPlanData, setProPlanData] = useState([]);
    const [premiumPlanData, setPremiumPlanData] = useState([]);
    const [freePlanData, setFreePlanData] = useState([]);
    
    const [totalTalentsData, setTotalTalentsData] = useState([]);
    const [maleTalentsData, setMaleTalentsData] = useState([]);
    const [femaleTalentsData, setFemaleTalentsData] = useState([]);
    const [availableTalentsData, setAvailableTalentsData] = useState([]);
    const [bannedTalentsData, setBannedTalentsData] = useState([]);
    
    const [totalCompaniesData, setTotalCompaniesData] = useState([]);
    const [availableCompaniesData, setAvailableCompaniesData] = useState([]);
    const [bannedCompaniesData, setBannedCompaniesData] = useState([]);


    const [paymentsData, setPaymentsData] = useState([]);
    
    let totalComissions = 0;
    let totalEarnings = 0;
    paymentsData.map(payment => {
        totalComissions = totalComissions + payment.taxes;
        totalEarnings = totalEarnings + payment.price;
    })
    totalEarnings = totalEarnings - totalComissions;
    
    const planDataRefactorization = monthLabels.map(month => {
        const obj = {
            id: monthLabels.indexOf(month) + 1,
            label: month,
            free: freePlanData.filter(company => {
                return company.creationDate.split("-")[1] === (`0${monthLabels.indexOf(month) + 1}`)
            }).length,
            premium: premiumPlanData.filter(company => {
                return company.creationDate.split("-")[1] === (`0${monthLabels.indexOf(month) + 1}`)
            }).length,
            pro: proPlanData.filter(company => {
                return company.creationDate.split("-")[1] === (`0${monthLabels.indexOf(month) + 1}`)
            }).length
        };
        return obj;
    })
    
    const [totalTalentsDataRefactorization, setTotalTalentsDataRefactorization] = useState([]);

    const handleTalentsDisplay = (event) => {
        const selection = event.target.value;
        if (selection === "all") {
            setTotalTalentsDataRefactorization([{
                id: 1,
                label: "Talentos Totales",
                data: totalTalentsData.length
            }])
        }
        else if (selection === "availability") {
            setTotalTalentsDataRefactorization([
                {
                    id: 1,
                    label: "Disponible",
                    data: totalTalentsData.length
                },
                {
                    id: 2,
                    label: "Baneado",
                    data: bannedTalentsData.length
                }
            ])
        }
        else if (selection === "gender") {
            setTotalTalentsDataRefactorization([
                {
                    id: 1,
                    label: "Masculino",
                    data: maleTalentsData.length
                },
                {
                    id: 2,
                    label: "Femenino",
                    data: femaleTalentsData.length
                }
            ])
        }
    }
    
    const [totalCompaniesDataRefactorization, setTotalCompaniesDataRefactorization] = useState([]);

    const handleCompaniesDisplay = (event) => {
        const selection = event.target.value;
        if (selection === "all") {
            setTotalCompaniesDataRefactorization([{
                id: 1,
                label: "Empresas Totales",
                data: totalCompaniesData.length
            }])
        }
        else if (selection === "availability") {
            setTotalCompaniesDataRefactorization([
                {
                    id: 1,
                    label: "Disponible",
                    data: totalCompaniesData.length
                },
                {
                    id: 2,
                    label: "Baneado",
                    data: bannedCompaniesData.length
                }
            ])
        }
        else if (selection === "plan") {
            setTotalCompaniesDataRefactorization([
                {
                    id: 1,
                    label: "Premium",
                    data: proPlanData.length
                },
                {
                    id: 2,
                    label: "Básico",
                    data: premiumPlanData.length
                },
                {
                    id: 1,
                    label: "Prueba",
                    data: freePlanData.length
                },
                {
                    id: 2,
                    label: "Pendiente",
                    data: totalCompaniesData.length - (proPlanData.length + premiumPlanData.length + freePlanData.length)
                }
            ])
        }
    }

    useEffect(() => {
        axios('https://deploy-sprint-2-backend.onrender.com/admin/companies/posts').then(({ data }) => {
            setcompaniesPostsData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/companies/premium/1').then(({ data }) => {
            setProPlanData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/companies/basico/1').then(({ data }) => {
            setPremiumPlanData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/companies/prueba-gratis/1').then(({ data }) => {
            setFreePlanData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/users/talents/1/12').then(({ data }) => {
            setTotalTalentsData(data);
            setTotalTalentsDataRefactorization([{
                id: 1,
                label: "Talentos Totales",
                data: data.length
            }])
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/users/companies/1/12').then(({ data }) => {
            setTotalCompaniesData(data);
            setTotalCompaniesDataRefactorization([{
                id: 1,
                label: "Empresas Totales",
                data: data.length
            }])
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/users/talents/male').then(({ data }) => {
            setMaleTalentsData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/users/talents/female').then(({ data }) => {
            setFemaleTalentsData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/users/available/talents').then(({ data }) => {
            setAvailableTalentsData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/users/available/companies').then(({ data }) => {
            setAvailableCompaniesData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/payments').then(({ data }) => {
            setPaymentsData(data);
        })
        axios('https://deploy-sprint-2-backend.onrender.com/admin/users/banned/companies').then(({ data }) => {
      setBannedCompaniesData(data);
      })
      axios('https://deploy-sprint-2-backend.onrender.com/admin/users/banned/talents').then(({ data }) => {
      setBannedTalentsData(data);
      })
    }, []);

    const companiesPosts = {
        labels: companiesPostsData.map((data) => data.email.split("@")[0]), 
        datasets: [
          {
            label: "Eventos Publicados",
            data: companiesPostsData.map((data) => data.numberPosts),
            backgroundColor: [
                "#7E7193",
                "#00c9a7",
                // "#e2e2e2",
                // "#e0d663",
                // "#63dae0",
                // "#c97175"
            ],
            borderColor: "#00c9a7",
            borderWidth: 0
          }
        ]
    };

    const companiesPlans = {
        labels: planDataRefactorization.map((data) => data.label), 
        datasets: [
        {
            label: "Premium",
            data: planDataRefactorization.map((data) => data.pro),
            backgroundColor: [
                "#e2e2e2",
            ],
            borderColor: "#00c9a7",
            borderWidth: 3
        },
        {
            label: "Básico",
            data: planDataRefactorization.map((data) => data.premium),
            backgroundColor: [
                "#e2e2e2",
            ],
            borderColor: "#7E7193",
            borderWidth: 3
        },
        {
            label: "Prueba Gratis",
            data: planDataRefactorization.map((data) => data.free),
            backgroundColor: [
                "#e2e2e2",
            ],
            borderColor: "#63dae0",
            borderWidth: 3
        }
        ]
    };
    
    const totalTalentsDataSet = {
        labels: totalTalentsDataRefactorization.map((data) => data.label), 
        datasets: [
          {
            label: " ",
            data: totalTalentsDataRefactorization.map((data) => data.data),
            backgroundColor: [
                "#7E7193",
                "#e2e2e2",
            ],
            borderColor: "#00c9a7",
            borderWidth: 6
          }
        ]
    };

    const totalCompaniesDataSet = {
        labels: totalCompaniesDataRefactorization.map((data) => data.label), 
        datasets: [
          {
            label: " ",
            data: totalCompaniesDataRefactorization.map((data) => data.data),
            backgroundColor: [
                "#7E7193",
                "#e2e2e2",
                "#63dae0",
                "#d1cc90",
            ],
            borderColor: "#00c9a7",
            borderWidth: 6
          }
        ]
    };
  
    return (
    <>
        <div className={styles.container}>
            {/* <h1>Métricas Admin</h1> */}
            
            <div className={styles.chart}>
                <Companies_Posts chartData={companiesPosts}/>
            </div>
            <div className={styles.chart}>
                <Companies_Plan chartData={companiesPlans}/>
            </div> 
            {/* <div className={styles.donnutDiv}>
                <select name="talentsDisplay" className={styles.dropDown} onChange={handleTalentsDisplay}>
                    <option className={styles.option} value="all">Todos los Talentos</option>
                    <option className={styles.option} value="availability">Disponibilidad</option>
                    <option className={styles.option} value="gender">Género</option>
                </select>
                <div className={styles.donnutChart}>
                    <TotalTalents chartData={totalTalentsDataSet}/>
                </div>
            </div> */}
            <div className={styles.leftDiv}>
                <div className={styles.stats}>
                    GANANCIAS TOTALES:
                    <h1 className={styles.amount}>$ <span>{totalEarnings.toFixed(2)}</span> USD</h1>
                </div>
                <div className={styles.stats}>
                    COMISIONES:
                    <h1 className={styles.amount}>$ <span>{totalComissions.toFixed(2)}</span> USD</h1>
                </div>
            </div> 
            {/* <div className={styles.chart}>
                <Companies_Plan chartData={companiesPlans}/>
            </div>         */}
            <div className={styles.donnutDiv}>
                <select name="talentsDisplay" className={styles.dropDown} onChange={handleTalentsDisplay}>
                    <option className={styles.option} value="all">Todos los Talentos</option>
                    <option className={styles.option} value="availability">Disponibilidad</option>
                    <option className={styles.option} value="gender">Género</option>
                </select>
                <div className={styles.donnutChart}>
                    <TotalTalents chartData={totalTalentsDataSet}/>
                </div>
            </div>
            <div className={styles.donnutDiv}>
                <select name="companiesDisplay" className={styles.dropDown} onChange={handleCompaniesDisplay}>
                    <option className={styles.option} value="all">Todas las Empresas</option>
                    <option className={styles.option} value="availability">Disponibilidad</option>
                    <option className={styles.option} value="plan">Plan</option>
                </select>
                <div className={styles.donnutChart}>
                    <TotalCompanies chartData={totalCompaniesDataSet}/>
                </div>
            </div>
            {/* <div className={styles.leftDiv}> */}
            {/* <div className={styles.stats}>
                    TOTAL COMPANIES:
                </div>
                <div className={styles.stats}>
                    TOTAL EVENTS:
                </div> */}
            {/* </div> */}
        </div>
    </>
  );
};

export default AdminCharts;