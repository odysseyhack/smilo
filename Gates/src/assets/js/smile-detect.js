class SmileClassifier {
    constructor() {
        this.previousParameters = [];
    }

    meanPredict(parameters) {
        this.previousParameters.splice(0, this.previousParameters.length === 10 ? 1 : 0);
        this.previousParameters.push(parameters.slice(0));

        if (this.previousParameters.length <= 9) { return false; }

        const meanParameters = [];
        for (let i = 0; i < parameters.length; i += 1) {
        meanParameters[i] = 0;
        }
        for (let i = 0; i < this.previousParameters.length; i += 1) {
        for (let j = 0; j < parameters.length; j += 1) {
            meanParameters[j] += this.previousParameters[i][j];
        }
        }
        for (let i = 0; i < parameters.length; i += 1) {
        meanParameters[i] /= 10;
        }

        const value = predict(meanParameters);

        return value;
    }
}

var vid;
var vid_width;
var vid_height;
var overlay;
var overlayCC;
var trackingStarted;
var ctrack;
var ec;
var svg;
var emotionData;
var getSmileInterval;
const smileClassifier = new SmileClassifier();

function startCamera() {
    vid = document.getElementById('videoel');
    vid_width = vid.width;
    vid_height = vid.height;
    /********** check and set up video/webcam **********/
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;
    // check for camerasupport
    if (navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({video : true}).then(gumSuccess).catch(gumFail);
    } else if (navigator.getUserMedia) {
        navigator.getUserMedia({video : true}, gumSuccess, gumFail);
    } else {
        alert("This demo depends on getUserMedia, which your browser does not seem to support. :(");
    }
    // vid.addEventListener('canplay', enablestart, false);
    /*********** setup of emotion detection *************/
    // set eigenvector 9 and 11 to not be regularized. This is to better detect motion of the eyebrows
    pModel.shapeModel.nonRegularizedVectors.push(9);
    pModel.shapeModel.nonRegularizedVectors.push(11);
    ctrack = new clm.tracker({useWebGL : true});
    ctrack.init(pModel);
    trackingStarted = false;
    delete emotionModel['disgusted'];
    delete emotionModel['fear'];
    ec = new emotionClassifier();
    ec.init(emotionModel);
}


function startVideo(callback) {
    // start tracking
    ctrack.start(vid);
    trackingStarted = true;
    // start loop to draw face
    getSmileInterval = setInterval(() => {
        drawLoop(callback);
    }, 75);
}
function stopGetSmileInterval() {
    clearInterval(getSmileInterval);
}
function drawLoop(callback) {
    var emotionData = ec.getBlank();
    var cp = ctrack.getCurrentParameters();
    var er = ec.meanPredict(cp);
    if (er[3]) {
        const smileScore = smileClassifier.meanPredict(cp);
        callback(smileScore);
    }
}
const smileModel = {
    bias: -1.4786712822,
    coefficients: [0.014837209675880276, 0.31092627456808286, -0.1214238695400552, 0.45265837869400843, 0.36700140259900887, 1.7113646510738279e-15, -0.4786251427206033, -0.15377369505521801, -0.16948121903942992, 6.0300272629176253e-15, -0.021184992727875669, -6.9318606881292957e-15, -0.81611603551588852, -3.7883560238442657e-15, 0.1486320646217055, 0.94973410351769527, 3.6260400713070416e-15, -0.31361179943007411]
};
  
const predict = (parameters) => {
    let { bias: score } = smileModel;
    const { coefficients } = smileModel;
    for (let i = 0; i < coefficients.length; i += 1) {
        score += coefficients[i] * parameters[i + 6];
    }
    return 1.0 / (1.0 + Math.exp(-score));
};

function updateData(data) {
    // update
    var rects = svg.selectAll("rect")
        .data(data)
        .attr("y", function(datum) { return height - y(datum.value); })
        .attr("height", function(datum) { return y(datum.value); });
    var texts = svg.selectAll("text.labels")
        .data(data)
        .attr("y", function(datum) { return height - y(datum.value); })
        .text(function(datum) { return datum.value.toFixed(1);});
    // enter
    rects.enter().append("svg:rect");
    texts.enter().append("svg:text");
    // exit
    rects.exit().remove();
    texts.exit().remove();
}

function enablestart() {
    var startbutton = document.getElementById('startbutton');
    startbutton.value = "start";
    startbutton.disabled = null;
}
function adjustVideoProportions() {
    // resize overlay and video if proportions are different
    // keep same height, just change width
    var proportion = vid.videoWidth/vid.videoHeight;
    vid_width = Math.round(vid_height * proportion);
    vid.width = vid_width;
}
function gumSuccess( stream ) {
    // add camera stream if getUserMedia succeeded
    if ("srcObject" in vid) {
        vid.srcObject = stream;
    } else {
        vid.src = (window.URL && window.URL.createObjectURL(stream));
    }
    vid.onloadedmetadata = function() {
        adjustVideoProportions();
        vid.play();
    }
    vid.onresize = function() {
        adjustVideoProportions();
        if (trackingStarted) {
            ctrack.stop();
            ctrack.reset();
            ctrack.start(vid);
        }
    }
}
function gumFail() {
    alert("There was a problem trying to fetch video from your webcam. If you have a webcam, please make sure to accept when the browser asks for access to your webcam.");
}