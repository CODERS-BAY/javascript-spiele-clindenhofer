function getInputValue() {

    let fallingSpeed = document.getElementById("fallingSpeed")[0].value;

    let speed = document.getElementById("speed").value;
    let inputAngle = document.getElementById("angle").value;

    let angle = inputAngle * (Math.PI / 180);

    let calculateThrowingDistance = ((speed * speed) * Math.sin(2 * angle)) / fallingSpeed ;
    let throwingDistance = Math.round(calculateThrowingDistance);

    let calculateDistanceToMonster = Math.random() * 90 + 10;
    let distanceToMonster = Math.round(calculateDistanceToMonster);

    let documentH3 = document.getElementById("h3");
    let documentH2 = document.getElementById("h2");

    if (throwingDistance == distanceToMonster) {
        let throwingText = "You threw " + throwingDistance + " m.";
        let distanceText = " You hit the alien!";
        documentH3.innerHTML = throwingText;
        documentH2.innerHTML = distanceText;
        documentH2.style.color = "green";
    }
    else if (throwingDistance < distanceToMonster) {
        let throwingText = "You threw " + throwingDistance + " m.";
        let distanceText = "You threw not far enough!";
        documentH3.innerHTML = throwingText;
        documentH2.innerHTML = distanceText;
        documentH2.style.color = "red";
    }
    else if (throwingDistance > distanceToMonster) {
        let throwingText = "You threw " + throwingDistance + " m.";
        let distanceText = "You threw too far!";
        documentH3.innerHTML = throwingText;
        documentH2.innerHTML = distanceText;
        documentH2.style.color = "red";
    }
}