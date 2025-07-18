buttonInvisible('result-copy');
buttonInvisible('end-copy');
buttonInvisible('start-copy');
buttonInvisible('facing-line-copy');
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.getElementById("current-form");
    // Listen for the submit event
    form.addEventListener("submit", calculateYaw);
});

function divideByEight(a) {
    if (a.length > 0) {
        a /= 8;
        a = (Math.round(a * 1000.0)) / 1000.0;
        return a + "";
    }
    return "";
}

function buttonVisible(elementid) {
    const x = document.getElementById(elementid);
    x.style.display = "block";
}

function buttonInvisible(elementid) {
    const x = document.getElementById(elementid);
    x.style.display = "none";
}

function copyInnerHTML(elementid) {
    console.log("Copying " + `${elementid}` + "...");
    let text = document.getElementById(elementid).innerHTML;
    if (text.split(":").length - 1 == 1)
        text = text.substring(text.indexOf(":") + 1);
    else if (text.split(":").length - 1 == 2)
        text = text.substring(text.indexOf(":") + 1, text.lastIndexOf(":"));
    text = text.trim();
    navigator.clipboard.writeText(text);
}

function cardinalDirection(angle) {
	if ((angle <= -135.1 && angle > -180.0) || (angle <= 180.0 && angle >= 135.1))
		return "north"
	if (angle <= 135.0 && angle >= 45.1)
		return "west"
	if (angle <= 45.0 && angle >= -44.9)
		return "south"
	if (angle >= -135.0 && angle <= -45.0)
		return "east"
}

function fermatter(yaw) {
	let string = cardinalDirection(yaw)
	let axis = ""
	if (string === "north")
		axis = "negative Z"
	if (string === "west")
		axis = "negative X"
	if (string === "south")
		axis = "positive Z"
	if (string === "east")
		axis = "positive X"
	const res = `Facing: ${string} (Towards ${axis}) (${yaw}/xx.x)`
	return res
}

function calculateYaw(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    document.getElementById("result").innerHTML = "";
    document.getElementById("netherstart").innerHTML = "";
    document.getElementById("netherend").innerHTML = ""
    buttonInvisible("start-copy");
    buttonInvisible("end-copy");
    buttonInvisible("result-copy");

    // Get the values from the form inputs 
    let locX = data.get("locX");
    let locZ = data.get("locZ");
    let destX = data.get("destX");
    let destZ = data.get("destZ");
    const netherEquivCurrent = document.querySelector('#netherEquivCurrent').checked;
    const netherEquivDest = document.querySelector('#netherEquivDest').checked;
    if (netherEquivCurrent) {
        locX = divideByEight(locX);
        locZ = divideByEight(locZ);
    }
    if (netherEquivDest) {
        destX = divideByEight(destX);
        destZ = divideByEight(destZ);
    }
    const ficurrent = (netherEquivCurrent && !(locX.length === 0 && locZ.length === 0))
    const fidest = (netherEquivDest && !(destX.length === 0 && destZ.length === 0))
    if (ficurrent) {
        xString = locX.length === 0 ? "" : "X=" + `${locX}`;
        zString = locZ.length === 0 ? "" : "Z=" + `${locZ}`;
        buttonVisible("start-copy");
        if (xString.length > 0 && zString.length > 0)
            document.getElementById("netherstart").innerHTML = "Start from here in the Nether Biome: " + `${locX}` + ", " + `${locZ}`;
        else
            document.getElementById("netherstart").innerHTML = "Start from here in the Nether Biome: " + `${xString}` + `${zString}`;
    }
    if (fidest) {
        xString = destX.length === 0 ? "" : "X=" + `${destX}`;
        zString = destZ.length === 0 ? "" : "Z=" + `${destZ}`;
        buttonVisible("end-copy");
        if (xString.length > 0 && zString.length > 0)
            document.getElementById("netherend").innerHTML = "Destination in the Nether Biome: " + `${destX}` + ", " + `${destZ}`;
        else
            document.getElementById("netherend").innerHTML = "Destination in the Nether Biome: " + `${xString}` + `${zString}`;
    }

    // Build the url
    const processIt = (locX.length > 0 && locZ.length > 0 && destX.length > 0 && destZ.length > 0);
    console.log(processIt, locX, locZ, destX, destZ);
    if (processIt) {
        const yaw = getYawAngle(parseFloat(locX), parseFloat(locZ), parseFloat(destX), parseFloat(destZ));
	document.getElementById("result").innerHTML = `Calculated Yaw: ${yaw} :)`;
	buttonVisible("result-copy"); 
	const line = fermatter(yaw)
	document.getElementById("facing-line").innerHTML = line
	buttonVisible("facing-line-copy")
    }
    if (!ficurrent && !fidest && !processIt) {
        document.getElementById("result").innerHTML = `Either enter all the values</br>or tick the respective checkbox</br>after entering a value`;
    }
}

/**
 * Returns the Minecraft yaw angle (as a string) that points from the
 * current position (xcurrent, zcurrent) to the destination (xdest, zdest).
 * Matches the logic and quirks of the original Java method.
 */
function getYawAngle(xcurrent, zcurrent, xdest, zdest) {

  // z is negated for the atan2 call (equivalent to zdest - zcurrent in Java comment)
  let slope = Math.atan2(zcurrent - zdest, xdest - xcurrent) * (180 / Math.PI);

  slope += 90;   // rotate to Minecraft’s yaw convention
  slope *= -1;   // invert because positive quadrants become negative on rotation

  // Wrap into the (-180, 180] range
  if (Math.abs(slope) > 180) {
    slope = -360 * Math.sign(slope) + slope;
  }

  // Round to a single decimal place
  slope = Math.round(slope * 10) / 10;

  // Mimic the Java special‑case string outputs
  if (slope === 0)       return "-0.0";
  if (slope === -180)    return "180.0";

  // Default path – always keep one decimal digit like Java’s “‑123.4”
  return slope.toFixed(1);  
}
