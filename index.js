
const url = 'https://cephs-images-api.herokuapp.com/api/v1/leaderBoard';

const getLeaderBoardData = async () => {
    let response = await fetch(url);

    if (response.ok) { // if HTTP-status is 200-299
                       // get the response body (the method explained below)
        let { result } = await response.json();
        console.log(result[0]);

        const { 'FULL NAME': fullName, USERNAME: userName, EMAIL: email, 'TOTAL POINTS': totalPoints  } = result[0];
        // console.log(result[0]['FULL NAME']);
        // console.log(result[0].USERNAME);
        // console.log(result[0].EMAIL);
        // console.log(result[0]['TOTAL POINTS']);

        console.log(fullName, userName, email, totalPoints);
    } else {
        alert("HTTP-Error: " + response.status);
    }
};
