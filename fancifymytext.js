function makeBigger() 
{
	document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() 
{
	alert("Style changed!");

	var textBox = document.getElementById("textInput");
	var isFancy = document.getElementById("fancyShmancy").checked;

	if (isFancy) 
    {
		textBox.style.fontWeight = "bold";
		textBox.style.color = "blue";
		textBox.style.textDecoration = "underline";
	} else {
		textBox.style.fontWeight = "normal";
		textBox.style.color = "";
		textBox.style.textDecoration = "none";
	}
}

function mooText() 
{
	var textBox = document.getElementById("textInput");
	var upperText = textBox.value.toUpperCase();
	var sentences = upperText.split(".");
	var hasPeriod = upperText.indexOf(".") !== -1;

	if (hasPeriod) 
    {
		for (var i = 0; i < sentences.length - 1; i++) 
        {
			var trimmedSentence = sentences[i].trim();
			if (trimmedSentence.length === 0) 
            {
				continue;
			}

			var words = trimmedSentence.split(/\s+/);
			words[words.length - 1] = words[words.length - 1] + "-Moo";
			sentences[i] = words.join(" ");
		}

		textBox.value = sentences.join(".");
	} else {
		var textWords = upperText.trim().split(/\s+/);
		if (textWords[0] !== "") 
        {
			textWords[textWords.length - 1] = textWords[textWords.length - 1] + "-Moo";
			textBox.value = textWords.join(" ");
		}
	}
}