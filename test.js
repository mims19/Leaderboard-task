
const url = 'https://cephs-images-api.herokuapp.com/api/v1/leaderBoard';

const getLeaderBoardData = async () => {
    let response = await fetch(url);

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let { result } = await response.json();
        console.log(result[0]);

        formatData(result);

    } else {
        alert("HTTP-Error: " + response.status);
    }
};

const formatData = (data) => {
    const newData = [];

    for (const userData of data) {

        const { 'FULL NAME': fullName, USERNAME: userName, EMAIL: email, 'TOTAL POINTS': totalPoints  } = userData;

        console.log(fullName, userName, email, totalPoints);

        newData.push([
            (fullName === '') ? 'No Name' : fullName,
            (userName === '') ? 'No Slack Id' : userName,
            (email === '') ? 'No Email' : email,
            (totalPoints === '') ? 'n/A' : totalPoints,
        ]);
    }

    setDataTable(newData);

    return newData;
};

const setDataTable = (dataSet) => {
    $(document).ready(function() {
        $('#example').DataTable( {
            data: dataSet,
            columns: [
                { title: "Full Name" },
                { title: "Slack Id" },
                { title: "Email" },
                { title: "Total Points." },
            ]
        } );
    } );
};
