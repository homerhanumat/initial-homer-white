/***********************************************************
*
* Quiz Code
*
***********************************************************/

// globals
let attempts = {
    "image-to-sanskrit": 0,
    "sanskrit-to-image": 0,
    "sanskrit-to-english": 0,
    "english-to-sanskrit": 0
};
let numberCorrect = {
    "image-to-sanskrit": 0,
    "sanskrit-to-image": 0,
    "sanskrit-to-english": 0,
    "english-to-sanskrit": 0
}

function questionSetup(starting, quizType) {
    
    // parameters
    numberOfChoices = 4;

    // handle counts
    if (starting) {
        attempts[quizType] = 0;
        numberCorrect[quizType] = 0;
        document.getElementById(`${quizType}-start-over`).style.visibility = "hidden";
    }

    const accounting = document.getElementById(`${quizType}-accounting`);
    accounting.innerHTML = `${numberCorrect[quizType]} out of ${attempts[quizType]} correct so far. `;

    // utility
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateDistinctIntegers(n, min, max) {
        if (max - min + 1 < n) {
          throw new Error("Range is too small to generate the required number of distinct integers.");
        }
      
        const result = new Set();
        
        while (result.size < n) {
          const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
          result.add(randomInt);
        }
      
        return Array.from(result);
      }

    function elementsAtIndices(arr, ind) {
        return ind.map(index => arr[index]);
    }

    function reducePostures(postures) {
        let reduced = [];
        let namesReduced = [];
        let posturesTemp = postures;
        posturesTemp.forEach(function(posture) {
            let name = posture.sanskrit.replace(/ \/.*/, '');
            name = name.replace(/ [A-Z].*$/, "");
            if (!namesReduced.includes(name)) {
                namesReduced.push(name);
                posturesTemp.sanskrit = name;
                let englishName = posture.english.replace(/ \/.*/, '');
                englishName = englishName.replace(/ \(.*/, '');
                posturesTemp.english = englishName.replace(/ [A-Z]$/, "");
                reduced.push(posture);
            }
        });
        return reduced;
    }

    function insertRadioButtons(quizType, name, options) {

        const container = document.getElementById(`${quizType}-question`);
  
        options.forEach((option, index) => {
          // Create radio input element
          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.id = `${quizType}-${name}-${index}`;
          radio.name = `${quizType}-${name}`;
          radio.value = option.value;
          radio.setAttribute("quiz-type", quizType);
  
        // image-to-sanskrit
        if (quizType == "image-to-sanskrit") {

            // Create label for the radio button
            const label = document.createElement('label');
            label.htmlFor = radio.id;
            label.className = "quiz-form-control";
            label.innerHTML = `<em>${option.label}</em>`;
            const span = document.createElement("span");
            span.innerHTML = ` (click <span class="pronounce-button"><strong>here</strong></span> for pronunciation)`;
            span.setAttribute("quiz-type", quizType);
            const pronouncer = span.getElementsByTagName("strong")[0];
            const audioElement = new Audio(option.all.audio);
            audioElement.controls = false;
            pronouncer.addEventListener("click", function() {
                audioElement.play();
            });

            radio.addEventListener("change", function(e) {
                if (e.target === radio) {

                    attempts[quizType] += 1;

                    document.getElementById(`${quizType}-go-again`).style.visibility = "visible";
                    document.getElementById(`${quizType}-start-over`).style.visibility = "visible";

                    let choice = e.target.value;
                    if (choice == "0") {
                        numberCorrect[quizType] +=1;
                        accounting.innerHTML = `Right! ${numberCorrect[quizType]} / ${attempts[quizType]} so far. `;
                    } else {
                        const labelThis = document.querySelector(`label[for="${radio.id}"]`);
                        const xmark = document.createElement("span");
                        xmark.innerHTML = "&#10060; ";
                        labelThis.prepend(xmark);
                        accounting.innerHTML = `Sorry, incorrect choice. ${numberCorrect[quizType]} / ${attempts[quizType]} so far. `;
                    }
                    const radioCorrect = document.querySelector(`input[quiz-type="${quizType}"][value="0"]`);
                    const labelCorrect = document.querySelector(`label[for="${radioCorrect.id}"]`);
                    const checkmark = document.createElement("span");
                    checkmark.innerHTML = "&#10004; ";
                    labelCorrect.prepend(checkmark);
                    const pronounceSpans = document.querySelectorAll(`span[quiz-type="${quizType}"]`);
                    for (let i = 0; i < pronounceSpans.length; i++) {
                        let detailsLink = ` <a href="${options[i].all.details}" target="_blank">Review details in new tab</a>`
                        pronounceSpans[i].innerHTML = detailsLink;
                    }
                    const allButtons = document.querySelectorAll(`input[type= "radio"][quiz-type="${quizType}"]`);
                    allButtons.forEach(radio => {
                        radio.disabled = true;
                    });
                }
            });  //end radio add event listener
            // Append radio button and label to the container
            container.appendChild(radio);
            container.appendChild(label);
            container.appendChild(span);
            container.appendChild(document.createElement('br'));
        } // end if image-to-sanskrit

        if (quizType == "sanskrit-to-image") {
            const label = document.createElement('label');
            label.htmlFor = radio.id;
            label.className = "quiz-form-control";
            label.innerHTML = 
                `
                <figure>
                <img src="${option.label}" class="sanskrit-image-quiz" alt="check filename">
                <figcaption>
                <span>${option.all.sanskrit}</span>
                <br>
                <a href="${option.all.details}" target="_blank">Review details in new tab</a>
                </figcaption>
                </figure>
                `;
            label.setAttribute("quiz-type", quizType);
            const caption = label.getElementsByTagName("figcaption")[0];
            caption.style.visibility = "hidden";

            radio.addEventListener("change", function(e) {
                if (e.target === radio) {

                    attempts[quizType] += 1;

                    document.getElementById(`${quizType}-go-again`).style.visibility = "visible";
                    document.getElementById(`${quizType}-start-over`).style.visibility = "visible";

                    let choice = e.target.value;
                    if (choice == "0") {
                        numberCorrect[quizType] +=1;
                        accounting.innerHTML = `Right! ${numberCorrect[quizType]} / ${attempts[quizType]} so far. `;
                    } else {
                        const labelThis = document.querySelector(`label[for="${radio.id}"]`);
                        const xmark = document.createElement("span");
                        xmark.innerHTML = "&#10060; ";
                        labelThis.prepend(xmark);
                        accounting.innerHTML = `Sorry, incorrect choice. ${numberCorrect[quizType]} / ${attempts[quizType]} so far. `;
                    }
                    const radioCorrect = document.querySelector(`input[quiz-type="${quizType}"][value="0"]`);
                    const labelCorrect = document.querySelector(`label[for="${radioCorrect.id}"]`);
                    const checkmark = document.createElement("span");
                    checkmark.innerHTML = "&#10004; ";
                    labelCorrect.prepend(checkmark);
                    const captions = document.querySelectorAll(`label[quiz-type="${quizType}"] figcaption`);
                    captions.forEach(function(caption) {
                        caption.style.visibility = "visible";
                    });
                    const allButtons = document.querySelectorAll(`input[type= "radio"][quiz-type="${quizType}"]`);
                    allButtons.forEach(radio => {
                        radio.disabled = true;
                    });
                }
            });  //end radio add event listener

            container.appendChild(radio);
            container.appendChild(label);
            container.appendChild(document.createElement('br'));
        } // end sanskrit-to-image

        if (quizType == "sanskrit-to-english") {
            const label = document.createElement('label');
            label.htmlFor = radio.id;
            label.className = "quiz-form-control";
            label.innerHTML = 
                `
                <span>${option.all.english} </span>
                <a href="${option.all.details}" target="_blank">Review details in new tab</a>
                `;
            label.setAttribute("quiz-type", quizType);
            const anchor = label.getElementsByTagName("a")[0];
            anchor.style.visibility = "hidden";

            radio.addEventListener("change", function(e) {
                if (e.target === radio) {

                    attempts[quizType] += 1;

                    document.getElementById(`${quizType}-go-again`).style.visibility = "visible";
                    document.getElementById(`${quizType}-start-over`).style.visibility = "visible";

                    let choice = e.target.value;
                    if (choice == "0") {
                        numberCorrect[quizType] +=1;
                        accounting.innerHTML = `Right! ${numberCorrect[quizType]} / ${attempts[quizType]} so far. `;
                    } else {
                        const labelThis = document.querySelector(`label[for="${radio.id}"]`);
                        const xmark = document.createElement("span");
                        xmark.innerHTML = "&#10060; ";
                        labelThis.prepend(xmark);
                        accounting.innerHTML = `Sorry, incorrect choice. ${numberCorrect[quizType]} / ${attempts[quizType]} so far. `;
                    }
                    const radioCorrect = document.querySelector(`input[quiz-type="${quizType}"][value="0"]`);
                    const labelCorrect = document.querySelector(`label[for="${radioCorrect.id}"]`);
                    const checkmark = document.createElement("span");
                    checkmark.innerHTML = "&#10004; ";
                    labelCorrect.prepend(checkmark);
                    const anchors = document.querySelectorAll(`label[quiz-type="${quizType}"] a`);
                    anchors.forEach(function(anchor) {
                        anchor.style.visibility = "visible";
                    });
                    const allButtons = document.querySelectorAll(`input[type= "radio"][quiz-type="${quizType}"]`);
                    allButtons.forEach(radio => {
                        radio.disabled = true;
                    });
                }
            });  //end radio add event listener

            container.appendChild(radio);
            container.appendChild(label);
            container.appendChild(document.createElement('br'));
        } // end sanskrit-to-english

        if (quizType == "english-to-sanskrit") {
            const label = document.createElement('label');
            label.htmlFor = radio.id;
            label.className = "quiz-form-control";
            label.innerHTML = 
                `
                <span>${option.all.sanskrit} </span>
                <a href="${option.all.details}" target="_blank">Review details in new tab</a>
                `;
            label.setAttribute("quiz-type", quizType);
            const anchor = label.getElementsByTagName("a")[0];
            anchor.style.visibility = "hidden";

            radio.addEventListener("change", function(e) {
                if (e.target === radio) {

                    attempts[quizType] += 1;

                    document.getElementById(`${quizType}-go-again`).style.visibility = "visible";
                    document.getElementById(`${quizType}-start-over`).style.visibility = "visible";

                    let choice = e.target.value;
                    if (choice == "0") {
                        numberCorrect[quizType] +=1;
                        accounting.innerHTML = `Right! ${numberCorrect[quizType]} / ${attempts[quizType]} so far. `;
                    } else {
                        const labelThis = document.querySelector(`label[for="${radio.id}"]`);
                        const xmark = document.createElement("span");
                        xmark.innerHTML = "&#10060; ";
                        labelThis.prepend(xmark);
                        accounting.innerHTML = `Sorry, incorrect choice. ${numberCorrect[quizType]} / ${attempts[quizType]} so far. `;
                    }
                    const radioCorrect = document.querySelector(`input[quiz-type="${quizType}"][value="0"]`);
                    const labelCorrect = document.querySelector(`label[for="${radioCorrect.id}"]`);
                    const checkmark = document.createElement("span");
                    checkmark.innerHTML = "&#10004; ";
                    labelCorrect.prepend(checkmark);
                    const anchors = document.querySelectorAll(`label[quiz-type="${quizType}"] a`);
                    anchors.forEach(function(anchor) {
                        anchor.style.visibility = "visible";
                    });
                    const allButtons = document.querySelectorAll(`input[type= "radio"][quiz-type="${quizType}"]`);
                    allButtons.forEach(radio => {
                        radio.disabled = true;
                    });
                }
            });  //end radio add event listener

            container.appendChild(radio);
            container.appendChild(label);
            container.appendChild(document.createElement('br'));
        } // end english-to-sanskrit

    });  // end options forEach

    } // end insertRadioButtons

    let workingPostureSet;
    if (["sanskrit-to-english", "english-to-sanskrit"].includes(quizType)) {
        workingPostureSet = reducePostures(postures);
    } else {
        workingPostureSet = postures;
    }
    let randomIndices = generateDistinctIntegers(numberOfChoices, 0, workingPostureSet.length - 1);
    let posturesInvolved = elementsAtIndices(workingPostureSet, randomIndices);
    let scrambledIndices = generateDistinctIntegers(numberOfChoices, 0, numberOfChoices - 1);
    let answer = posturesInvolved[0];
    const question = document.getElementById(`${quizType}-question`);
    // remove any previous material:
    while (question.firstChild) {
        question.removeChild(question.firstChild);
    }

    // image-to-sanskrit
    if (quizType == "image-to-sanskrit") {
        const img = document.createElement("img");
        img.src = answer.image;
        img.alt = 'Check image filename';
        img.className = "image-quiz";

        question.appendChild(img);
        question.appendChild(document.createElement('br'));
        const options = [];
        for (let i of scrambledIndices) {
            let obj = {
                value: i,
                label: posturesInvolved[i].sanskrit,
                all: posturesInvolved[i]
            }
            options.push(obj);
        }
        insertRadioButtons(quizType, "choices", options);
    }

    // sanskrit-to-image
    if (quizType == "sanskrit-to-image") {
        const sanskrit = document.createElement("div");
        sanskrit.innerHTML = 
            `
            <p>${answer.sanskrit}</p>
            <p>(click <span class="pronounce-button"><strong>here</strong></span> for pronunciation)</p>
            `;
        sanskrit.setAttribute("quiz-type", quizType);
        sanskrit.classList.add("text-question");
        const pronouncer = sanskrit.querySelector("span strong");
        const audioElement = new Audio(answer.audio);
        audioElement.controls = false;
        pronouncer.addEventListener("click", function() {
            audioElement.play();
        });

        question.appendChild(sanskrit);
        question.appendChild(document.createElement('br'));
        const options = [];
        for (let i of scrambledIndices) {
            let obj = {
                value: i,
                label: posturesInvolved[i].image,
                all: posturesInvolved[i]
            }
            options.push(obj);
        }
        insertRadioButtons(quizType, "choices", options);
    }  // end sanskrit-to-image

    // sanskrit-to-english
    if (quizType == "sanskrit-to-english") {
        const sanskrit = document.createElement("div");
        sanskrit.innerHTML = 
            `<p>${answer.sanskrit}</p>
            <p>(click <span class="pronounce-button"><strong>here</strong></span> for pronunciation)</p>
            `;
        sanskrit.setAttribute("quiz-type", quizType);
        sanskrit.classList.add("text-question");
        const pronouncer = sanskrit.querySelector("span strong");
        const audioElement = new Audio(answer.audio);
        audioElement.controls = false;
        pronouncer.addEventListener("click", function() {
            audioElement.play();
        });

        question.appendChild(sanskrit);
        question.appendChild(document.createElement('br'));
        const options = [];
        for (let i of scrambledIndices) {
            let obj = {
                value: i,
                label: posturesInvolved[i].english,
                all: posturesInvolved[i]
            }
            options.push(obj);
        }
        insertRadioButtons(quizType, "choices", options);
    }  // end sanskrit-to-english

        // english-to-sanskrit
        if (quizType == "english-to-sanskrit") {
            const english = document.createElement("div");
            english.innerHTML = 
                `<p>${answer.english}</p>
                `;
            english.setAttribute("quiz-type", quizType);
            english.classList.add("text-question");
    
            question.appendChild(english);
            question.appendChild(document.createElement('br'));
            const options = [];
            for (let i of scrambledIndices) {
                let obj = {
                    value: i,
                    label: posturesInvolved[i].sanskrit,
                    all: posturesInvolved[i]
                }
                options.push(obj);
            }
            insertRadioButtons(quizType, "choices", options);
        }  // end english-to-sanskrit

}  // end questionSetup

function addListeners(quizType) {
    window.addEventListener('load', function() {
        questionSetup(true, quizType);
    });

    const goAgain = document.getElementById(`${quizType}-go-again`);
    goAgain.addEventListener("click", function() {
            questionSetup(false, quizType);
    });

    const startOver = document.getElementById(`${quizType}-start-over`);
    startOver.addEventListener("click", function() {
        questionSetup(true, `${quizType}`);
    });
}

addListeners("image-to-sanskrit");
addListeners("sanskrit-to-image");
addListeners("sanskrit-to-english");
addListeners("english-to-sanskrit");



