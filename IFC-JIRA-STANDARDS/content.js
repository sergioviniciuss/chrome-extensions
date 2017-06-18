chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.todo === "setTemplate") {
		var templateType = {
			developer : "**Dev Notes:**\n**SVN Revision:**\n**Evidencias de teste:**\n**Dicas de teste:**",
			tester : "**Status do teste:**\n**Notas do teste:**\n**Evidencias do teste:**"
		};
		debugger;
		var chosenTemplate = request.chosenTemplate;
		//open comment textarea
		document.getElementById("comment_issue").click();
		// document.getElementById("comment").value = "";
		if (!!templateType[chosenTemplate]) {
			$("#comment").html(templateType[chosenTemplate]).wrap('<pre />');
		} else {
			console.log("Oops.. chosenTemplate mismatch error... Please report it on github");
		}
	}
})