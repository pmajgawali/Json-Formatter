const formatButton = document.getElementById("format-btn");
const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");
const head = document.getElementById("head");
const copyMessage = document.getElementById("copy-message");
const errorMessage = document.getElementById("error-message");

const INVALID = "INVALID";

format = () => {
  const input = document.getElementById("input-text").value;
  outputBox.value = formatJson(input);
};

function formatJson(text) {
  var result = INVALID;

  try {
    var jsonObj = eval("(" + text + ")");
    console.log(jsonObj);
    result = JSON.stringify(jsonObj, null, 4);
  } catch (error) {
    displayError();
  }

  return result;
}

const copy = () => {
  const value = outputBox.value;
  navigator.clipboard.writeText(value).then(flipOnCopy());
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const flipOnCopy = async () => {
  copyMessage.style.display = "block";

  await sleep(2000);
  
  copyMessage.style.display = "none";
};

const displayError = async () => {
  errorMessage.style.display = "block";
  await sleep(2000);
  errorMessage.style.display = "none";
};
