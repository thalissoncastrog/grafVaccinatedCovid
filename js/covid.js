let gPopulation = document.querySelector("#ret-01");
let Seniors = document.querySelector("#ret-02");
let SeniorsInShelters = document.querySelector("#ret-03");
let SeniorsInstitucionalized = document.querySelector("#ret-04");
let SecurityForces = document.querySelector("#ret-05");
let HealthWorkers = document.querySelector("#ret-06");
let EducationWorkers = document.querySelector("#ret-07");
let TransportWorkers = document.querySelector("#ret-08");
let UrbanCleaningWorkers = document.querySelector("#ret-09");
let Comorbidities = document.querySelector("#ret-10");
let Quilombolas = document.querySelector("#ret-11");
let Pregnants = document.querySelector("#ret-12");
let Pospartum = document.querySelector("#ret-13");
let Breastfeeding = document.querySelector("#ret-14");
let Communication = document.querySelector("#ret-15");

let data01 = document.querySelector("#data-01");
let data02 = document.querySelector("#data-02");
let data03 = document.querySelector("#data-03");
let data04 = document.querySelector("#data-04");
let data05 = document.querySelector("#data-05");
let data06 = document.querySelector("#data-06");
let data07 = document.querySelector("#data-07");
let data08 = document.querySelector("#data-08");
let data09 = document.querySelector("#data-09");
let data10 = document.querySelector("#data-10");
let data11 = document.querySelector("#data-11");
let data12 = document.querySelector("#data-12");
let data13 = document.querySelector("#data-13");
let data14 = document.querySelector("#data-14");
let data15 = document.querySelector("#data-15");

function PlotGraf(){
    gPopulation.setAttribute("width", (information[0].generalPopulation)/70);
    Seniors.setAttribute("width", (information[0].seniors)/70);
    SeniorsInShelters.setAttribute("width", (information[0].seniorsInShelters)/70);
    SeniorsInstitucionalized.setAttribute("width", (information[0].seniorsInstitucionalized)/70);
    SecurityForces.setAttribute("width", (information[0].securityForces)/70);
    HealthWorkers.setAttribute("width", (information[0].healthWorkers)/70);
    EducationWorkers.setAttribute("width", (information[0].educationWorkers)/70);
    TransportWorkers.setAttribute("width", (information[0].transportWorkers)/70);
    UrbanCleaningWorkers.setAttribute("width", (information[0].urbanCleaningWorkers)/70);
    Comorbidities.setAttribute("width", (information[0].comorbidities)/70);
    Quilombolas.setAttribute("width", (information[0].quilombolas)/70);
    Pregnants.setAttribute("width", (information[0].pregnants)/70);
    Pospartum.setAttribute("width", (information[0].pospartum)/70);
    Breastfeeding.setAttribute("width", (information[0].breastfeeding)/70);
    Communication.setAttribute("width", (information[0].communication)/70);
}

function PlotData(){
    data01.innerHTML = information[0].generalPopulation;
    data02.innerHTML = information[0].seniors;
    data03.innerHTML = information[0].seniorsInShelters;
    data04.innerHTML = information[0].seniorsInstitucionalized;
    data05.innerHTML = information[0].securityForces;
    data06.innerHTML = information[0].healthWorkers;
    data07.innerHTML = information[0].educationWorkers;
    data08.innerHTML = information[0].transportWorkers;
    data09.innerHTML = information[0].urbanCleaningWorkers;
    data10.innerHTML = information[0].comorbidities;
    data11.innerHTML = information[0].quilombolas;
    data12.innerHTML = information[0].pregnants;
    data13.innerHTML = information[0].pospartum;
    data14.innerHTML = information[0].breastfeeding;
    data15.innerHTML = information[0].communication;
}

PlotGraf();
PlotData();